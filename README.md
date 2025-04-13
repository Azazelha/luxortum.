# Luxortum

**Immersive ritual SaaS platform for modern mystics and creators.**

A curated experience blending art, sound and storytelling. Built with Next.js, Sanity, Stripe and SendGrid. Hosted on Vercel or Netlify.

---

## Features

- Visual & audio gallery
- Stripe + Patreon subscriptions
- Admin dashboard with email forms
- SEO & OpenGraph optimized
- Auto-revalidate and dynamic sitemap
- Social launch kit included

---

## Deploy Now

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Azazelha/luxortum)

Or use [Vercel Deploy](https://vercel.com/import/project?template=https://github.com/Azazelha/luxortum)

---

## Environment Variables

Create a `.env.local` file and add:

```env
SENDGRID_API_KEY=your_sendgrid_key
SENDGRID_FROM_EMAIL=you@luxortum.com
SANITY_PROJECT_ID=your_sanity_id
SANITY_DATASET=production
STRIPE_SECRET_KEY=sk_live_...
PATREON_CLIENT_ID=your_client_id
PATREON_CLIENT_SECRET=your_secret
PATREON_REDIRECT_URI=https://luxortum.com/api/oauth/patreon
```

---

## License

MIT © Luxortum Team