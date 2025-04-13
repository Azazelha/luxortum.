// pages/api/sanity-webhook.js

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Only POST allowed');

  const { _type, image, caption } = req.body;

  if (_type !== 'galleryImage') {
    return res.status(200).json({ message: 'Not a gallery image. Ignored.' });
  }

  const imageUrl = image?.asset?.url;
  if (!imageUrl) return res.status(400).json({ error: 'Missing image URL' });

  const accessToken = process.env.IG_ACCESS_TOKEN;
  const igUserId = process.env.IG_USER_ID;

  try {
    // 1. Create media
    const mediaRes = await fetch(`https://graph.facebook.com/v19.0/${igUserId}/media`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        image_url: imageUrl,
        caption: caption || '',
        access_token: accessToken,
      }),
    });
    const media = await mediaRes.json();

    if (!media.id) {
      return res.status(400).json({ error: 'Failed to create media', media });
    }

    // 2. Publish media
    const publishRes = await fetch(`https://graph.facebook.com/v19.0/${igUserId}/media_publish`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        creation_id: media.id,
        access_token: accessToken,
      }),
    });

    const publish = await publishRes.json();
    res.status(200).json({ success: true, publish });
  } catch (error) {
    res.status(500).json({ error: 'Publishing failed', details: error.message });
  }
}