import { useEffect, useState } from 'react';

export default function PremiumPage() {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const isStripe = localStorage.getItem('stripe_subscriber') === 'true';
    const isPatreon = localStorage.getItem('patreon_tier') !== null;
    if (isStripe || isPatreon) {
      setAuthorized(true);
    }
  }, []);

  if (!authorized) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>Цей контент доступний лише для підписників</h2>
        <p>Підпишіться через Stripe або авторизуйтеся через Patreon</p>
        <a href="/subscribe">Підписатися</a> | <a href="/login-with-patreon">Patreon Login</a>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Ексклюзивні Образи Luxortum</h1>
      <p>Вітаємо в преміум-зоні. Тут доступ до секретних образів, медитацій, аудіо і bonus-серій.</p>
      <img src="/images/image3.jpg" alt="Secret Image" style={{ maxWidth: '100%' }} />
    </div>
  );
}