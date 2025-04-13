# Luxortum — SaaS-платформа творчих образів

**Next.js + Sanity CMS + Stripe + Patreon + SendGrid + Docker + Vercel**

---

## Запуск платформи (повний чеклист)

### 1. Деплой на Vercel
```bash
npm install -g vercel
vercel
```
- Додай `.env` змінні (див. `.env.example`)
- Включи Stripe Webhook: `checkout.session.completed` → `/api/stripe-webhook`
- Додай кастомний домен

### 2. Sanity CMS
```bash
cd sanity
npm install
sanity login
sanity deploy
```
- Webhook → `/api/sanity-webhook`

### 3. Stripe
- Створи Product → Price → підписка
- Скопіюй `price_xxx` → `.env`
- Вкажи `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_SITE_URL`

### 4. Patreon
- Створи додаток: https://www.patreon.com/portal
- Redirect: `/api/patreon-callback`
- Додай `PATREON_CLIENT_ID`, `PATREON_CLIENT_SECRET`

### 5. Email через SendGrid
- https://sendgrid.com
- API Key → `SENDGRID_API_KEY`
- Верифікуй домен і email → `SENDGRID_FROM_EMAIL`

---

## Ролі та функції

| Сторінка | Функція |
|---------|---------|
| `/` | Редирект на `/gallery` |
| `/gallery` | Карусель образів + фільтрація + lightbox |
| `/premium` | Доступ лише для підписників |
| `/subscribe` | Stripe Checkout |
| `/login-with-patreon` | OAuth з Patreon |
| `/admin/publish` | Ручна публікація в Instagram |
| `/admin/dashboard` | Статистика і аналітика |
| `/api/email/notify` | Email-розсилка підписникам |

---

## Запуск у Docker
```bash
docker build -t luxortum .
docker run -p 3000:3000 luxortum
```

---

## Автор
Створено з любов’ю до візуальної поезії, музичних ритуалів і сучасного коду.

[Luxortum.com](https://luxortum.com) — свобода образу, музики, сенсу.