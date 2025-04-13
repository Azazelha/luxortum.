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
    const totalImages = await sanity.fetch('count(*[_type == "galleryImage"])');
    const totalSubscribers = await sanity.fetch('count(*[_type == "subscriber" && active == true])');
    const monthlyPosts = await sanity.fetch(`count(*[_type == "postLog" && sentAt > now() - 30*24*60*60*1000])`);
    const topImages = await sanity.fetch(`*[_type == "galleryImage"] | order(views desc)[0...5]{
      title, views, likes, "src": image.asset->url
    }`);
    res.status(200).json({ totalImages, totalSubscribers, monthlyPosts, topImages });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}