
import { useEffect, useRef } from 'react';
import styles from '../styles/gallery.module.css';

export default function Carousel({ images, onImageClick }) {
  const trackRef = useRef();
  const scrollAmount = 320;

  useEffect(() => {
    const interval = setInterval(() => {
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let startX = 0;
    let isSwiping = false;
    const track = trackRef.current;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      isSwiping = true;
    };
    const handleTouchMove = (e) => {
      if (!isSwiping) return;
      const diffX = e.touches[0].clientX - startX;
      if (Math.abs(diffX) > 50) {
        track.scrollBy({ left: diffX > 0 ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        isSwiping = false;
      }
    };
    const handleTouchEnd = () => { isSwiping = false; };

    track.addEventListener('touchstart', handleTouchStart);
    track.addEventListener('touchmove', handleTouchMove);
    track.addEventListener('touchend', handleTouchEnd);

    return () => {
      track.removeEventListener('touchstart', handleTouchStart);
      track.removeEventListener('touchmove', handleTouchMove);
      track.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <button className={`${styles.navButton} ${styles.left}`} onClick={() => trackRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })}>&#10094;</button>
      <div className={styles.carouselTrack} ref={trackRef}>
        {images.map((img, i) => (
          <img
            key={i}
            src={`/images/${img.src}`}
            alt={`Образ ${i + 1}`}
            loading="lazy"
            className={`${styles.carouselImage} ${img.category}`}
            onClick={() => onImageClick(`/images/${img.src}`)}
          />
        ))}
      </div>
      <button className={`${styles.navButton} ${styles.right}`} onClick={() => trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })}>&#10095;</button>
    </div>
  );
}
