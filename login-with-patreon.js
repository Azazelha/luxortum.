export default function LoginWithPatreon() {
  const handleLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_PATREON_CLIENT_ID;
    const redirectUri = process.env.PATREON_REDIRECT_URI;
    window.location.href =
      `https://www.patreon.com/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=identity identity.memberships`;
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Увійти через Patreon</h1>
      <button onClick={handleLogin} style={{
        padding: '10px 20px', backgroundColor: '#e85b46', color: '#fff',
        border: 'none', borderRadius: '5px', cursor: 'pointer'
      }}>
        Увійти з Patreon
      </button>
    </div>
  );
}