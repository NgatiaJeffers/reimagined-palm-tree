import { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % texts.length);
    }, 8000); // Adjust the delay between transitions (in milliseconds)

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.carousel}>
      {texts.map((text, index) => (
        <div
          key={index}
          className={`${styles.carouselText} ${
            index === currentIndex ? styles.active : ''
          }`}
        >
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
