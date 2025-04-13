// pages/api/publish-behance.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Only POST allowed');

  const { title, description, imageUrl } = req.body;

  // NOTE: Behance API requires OAuth workflow, which is not accessible directly from serverless without token exchange.
  // Instead, this endpoint generates a ready-made HTML for manual upload or future automation.

  const htmlTemplate = `
    <html>
    <head><title>${title}</title></head>
    <body>
      <h1>${title}</h1>
      <img src="${imageUrl}" alt="${title}" style="max-width:100%;"/>
      <p>${description}</p>
    </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(htmlTemplate);
}