import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('/api/stats/summary')
      .then(res => res.json())
      .then(setStats);
  }, []);

  if (!stats) return <p style={{ padding: '2rem' }}>Завантаження статистики...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Адмін Дашборд</h1>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
        <div><strong>Образів:</strong> {stats.totalImages}</div>
        <div><strong>Підписників:</strong> {stats.totalSubscribers}</div>
        <div><strong>Публікацій:</strong> {stats.monthlyPosts}</div>
      </div>
      <h2>Топ 5 Образів</h2>
      <ul>
        {stats.topImages.map((img, i) => (
          <li key={i} style={{ marginBottom: '1rem' }}>
            <strong>{img.title}</strong> — {img.views} переглядів, {img.likes} лайків<br />
            <img src={img.src} alt={img.title} style={{ maxWidth: '200px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
}