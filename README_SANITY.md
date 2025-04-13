# Інтеграція Sanity.io + TailwindCSS + ISR у Next.js проект Luxortum

## 1. Встановлення TailwindCSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

tailwind.config.js:
```js
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [],
}
```

styles/globals.css:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 2. Ініціалізація Sanity CMS

```bash
npm install -g sanity
sanity init --create-project "luxortum-gallery"
```

- Dataset: `production`
- Template: `Clean project`
- Отримаєш projectId

schemas/galleryImage.js:
```js
export default {
  name: 'galleryImage',
  title: 'Образ галереї',
  type: 'document',
  fields: [
    { name: 'title', title: 'Назва', type: 'string' },
    { name: 'category', title: 'Категорія', type: 'string', options: { list: ['dark', 'light', 'dreamy'] }},
    { name: 'image', title: 'Зображення', type: 'image', options: { hotspot: true }},
  ]
}
```

## 3. Підключення до Next.js

```bash
npm install @sanity/client @portabletext/react
```

lib/sanity.js:
```js
import { createClient } from '@sanity/client';
export const sanity = createClient({
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
});
```

## 4. SSR або ISR (getStaticProps)

```js
export async function getStaticProps() {
  const images = await sanity.fetch(`*[_type == "galleryImage"]{
    title, category, "src": image.asset->url
  }`);
  return {
    props: { images },
    revalidate: 60, // ISR — оновлення кожні 60 сек
  };
}
```

## 5. Деплой на Vercel з власним доменом

1. `npx vercel`
2. У Vercel Dashboard -> Settings -> Domains
3. Додати `luxortum.com` або інший
4. Додати DNS-запис у реєстраторі:
   - A-запис або CNAME на `cname.vercel-dns.com`