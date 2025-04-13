import { loadStripe } from '@stripe/stripe-js';

export default function SubscribePage() {
  const handleSubscribe = async () => {
    const res = await fetch('/api/create-checkout-session', { method: 'POST' });
    const { id } = await res.json();
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    await stripe.redirectToCheckout({ sessionId: id });
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Luxortum Premium</h1>
      <p>Отримайте доступ до ексклюзивних образів, музики та раннього контенту.</p>
      <button onClick={handleSubscribe} style={{
        padding: '10px 20px', backgroundColor: '#000', color: '#fff', border: 'none',
        borderRadius: '5px', cursor: 'pointer'
      }}>
        Підписатися — $5/міс
      </button>
    </div>
  );
}