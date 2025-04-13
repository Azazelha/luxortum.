import { createClient } from '@sanity/client';

const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export default async function handler(req, res) {
  try {
    const top = await sanity.fetch(`*[_type == "galleryImage"] | order(views desc)[0...5]{
      title, views, likes, "src": image.asset->url
    }`);
    res.status(200).json(top);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stats', details: err.message });
  }
}