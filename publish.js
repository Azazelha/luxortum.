import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PublishPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token === process.env.NEXT_PUBLIC_ADMIN_TOKEN) {
      setAuthorized(true);
    } else {
      const input = prompt('Введіть пароль адміністратора:');
      if (input === process.env.NEXT_PUBLIC_ADMIN_TOKEN) {
        localStorage.setItem('admin_token', input);
        setAuthorized(true);
      } else {
        alert('Доступ заборонено');
        router.push('/');
      }
    }
  }, []);

  if (!authorized) return null;

  const handlePublish = async () => {
    const res = await fetch('/api/publish-instagram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageUrl, caption }),
    });

    const data = await res.json();
    setResponse(data);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>Публікація в Instagram</h1>

      <label>Image URL:</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="https://..."
        style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
      />

      <label>Підпис (caption):</label>
      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Опис до образу..."
        style={{ width: '100%', padding: '8px', height: '100px', marginBottom: '1rem' }}
      />

      <button onClick={handlePublish} style={{
        background: '#000',
        color: '#fff',
        padding: '10px 20px',
        cursor: 'pointer',
        border: 'none'
      }}>
        Опублікувати
      </button>

      {response && (
        <pre style={{ marginTop: '2rem', background: '#f0f0f0', padding: '1rem' }}>
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
}