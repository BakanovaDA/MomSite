import styles from './Carousel.module.css'
import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button 
        className={`${styles.carouselBtn} ${styles.carouselBtnPrev}`} 
        onClick={handlePrev}
      >
        «
      </button>
      
      <div className={styles.carouselSlides}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carouselSlide} ${
              index === currentIndex ? styles.carouselSlideActive : ''
            }`}
          >
            <img 
              src={image} 
              alt={`Slide ${index + 1}`}
              className={styles.carouselImage}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <button 
        className={`${styles.carouselBtn} ${styles.carouselBtnNext}`} 
        onClick={handleNext}
      >
        »
      </button>

      {/* Индикаторы */}
      {images.length > 1 && (
        <div className={styles.carouselIndicators}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.carouselIndicator} ${
                index === currentIndex ? styles.carouselIndicatorActive : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel