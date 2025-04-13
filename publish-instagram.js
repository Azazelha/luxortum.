// pages/api/publish-instagram.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Only POST allowed');

  const { imageUrl, caption } = req.body;

  const accessToken = process.env.IG_ACCESS_TOKEN;
  const igUserId = process.env.IG_USER_ID;

  try {
    // Step 1: Create media object
    const mediaResponse = await fetch(
      `https://graph.facebook.com/v19.0/${igUserId}/media`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image_url: imageUrl,
          caption: caption,
          access_token: accessToken,
        }),
      }
    );

    const media = await mediaResponse.json();

    if (!media.id) {
      return res.status(400).json({ error: 'Failed to create media', details: media });
    }

    // Step 2: Publish the media
    const publishResponse = await fetch(
      `https://graph.facebook.com/v19.0/${igUserId}/media_publish`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          creation_id: media.id,
          access_token: accessToken,
        }),
      }
    );

    const publishResult = await publishResponse.json();

    res.status(200).json({ success: true, result: publishResult });
  } catch (err) {
    res.status(500).json({ error: 'Internal error', details: err.message });
  }
}