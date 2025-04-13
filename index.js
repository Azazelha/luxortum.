export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-serif">
      <section className="flex flex-col justify-center items-center text-center px-4 pt-32">
        <h1 className="text-5xl font-bold mb-6">Enter the Gallery of the Soul</h1>
        <p className="text-xl max-w-xl mb-8">
          A ritual platform for visual poetry, soundscapes and digital mysticism.
        </p>
        <div className="flex gap-4">
          <a href="/gallery" className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200">Explore Gallery</a>
          <a href="/subscribe" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black">Join Premium</a>
        </div>
      </section>

      <section className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Features</h2>
        <ul className="text-lg space-y-2">
          <li>• Elegant image + audio carousel</li>
          <li>• Premium access via Stripe or Patreon</li>
          <li>• Admin dashboard + analytics</li>
          <li>• Email campaigns with SendGrid</li>
          <li>• Instagram and Behance integration</li>
        </ul>
      </section>

      <footer className="bg-black text-gray-400 text-sm text-center py-8">
        © 2025 Luxortum. Ritual Technology for Creative Minds.
      </footer>
    </div>
  );
}