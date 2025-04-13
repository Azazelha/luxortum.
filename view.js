// pages/api/view.js
import { createClient } from '@sanity/client';

const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { imageId } = req.body;

  try {
    await sanity
      .patch(imageId)
      .setIfMissing({ views: 0 })
      .inc({ views: 1 })
      .commit();

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register view', details: err.message });
  }
}