// pages/api/patreon-callback.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const code = req.query.code;
  if (!code) return res.status(400).send('Missing code');

  try {
    const response = await fetch('https://www.patreon.com/api/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        grant_type: 'authorization_code',
        client_id: process.env.PATREON_CLIENT_ID,
        client_secret: process.env.PATREON_CLIENT_SECRET,
        redirect_uri: process.env.PATREON_REDIRECT_URI,
      }),
    });

    const tokenData = await response.json();
    if (!tokenData.access_token) {
      return res.status(400).json({ error: 'Invalid token response', tokenData });
    }

    // Optional: fetch member tier
    const userRes = await fetch('https://www.patreon.com/api/oauth2/v2/identity?include=memberships&fields%5Bmember%5D=patron_status,full_name,currently_entitled_tiers', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`
      }
    });

    const user = await userRes.json();

    // Store or verify Patreon tier here
    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ error: 'OAuth error', details: err.message });
  }
}