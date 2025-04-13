# Luxortum Autodeploy Guide

## 1. Setup
- Clone the repo
- Add your env vars (see `.env.example`)
- Push to GitHub

## 2. Deploy
- Go to https://vercel.com/import
- Connect your GitHub repo
- Vercel will detect Next.js and use vercel.json
- Add environment variables in the dashboard
- Click **Deploy**

## 3. Done
- Site will be live on yourdomain.vercel.app
- Admin form: /admin/email
- Revalidation: /api/revalidate
- SEO: sitemap.xml, robots.txt, OG tags