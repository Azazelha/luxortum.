import { useState } from 'react';
import Carousel from '../components/Carousel';

export default function Gallery() {
  const [lightboxImg, setLightboxImg] = useState(null);

  const images = Array.from({ length: 24 }, (_, i) => ({
    src: `image${i + 1}.jpg`,
    category: (i % 3 === 0) ? 'dark' : (i % 3 === 1) ? 'light' : 'dreamy'
  }));

  return (
    <div>
      <h1 style={{ textAlign: 'center', padding: '1rem' }}>Галерея Образів</h1>

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <audio id="bg-music" loop>
          <source src="/voice/background.mp3" type="audio/mpeg" />
        </audio>
        <button onClick={() => {
          const music = document.getElementById('bg-music');
          if (music.paused) music.play();
          else music.pause();
        }}>Вкл/Викл музику</button>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        {['all', 'dark', 'light', 'dreamy'].map(type => (
          <button key={type} style={{ margin: '0 5px' }}
            onClick={() => {
              document.querySelectorAll('.carousel-image').forEach(img => {
                if (type === 'all' || img.classList.contains(type)) {
                  img.style.display = 'block';
                } else {
                  img.style.display = 'none';
                }
              });
            }}
          >
            {type === 'all' ? 'Усі' : type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <Carousel images={images} onImageClick={(src) => setLightboxImg(src)} />

      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex',
            justifyContent: 'center', alignItems: 'center'
          }}
        >
          <img src={lightboxImg} style={{ maxWidth: '90%', maxHeight: '80vh' }} alt="Zoomed" />
        </div>
      )}
    </div>
  );
}