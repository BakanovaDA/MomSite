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
          // <div
          //   key={index}
          //   className={`${styles.carouselSlide} ${
          //     index === currentIndex ? styles.carouselSlideActive : ''
          //   }`}
          //   style={{ backgroundImage: `url(${image})` }}
          // />


          <div
            key={index}
            className={`${styles.carouselSlide} ${
              index === currentIndex ? styles.carouselSlideActive : ''
            }`}
          >
            {/* 🔴 УБРАЛ: style={{ backgroundImage: `url(${image})` }} */}
            {/* 🔴 ДОБАВИЛ: */}
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

  // const handleImageChange = (offset, slide) => {
  //   const activeSlide = document.querySelector('[data-active]')
  //   const slides = [...document.getElementsByClassName(`${slide}`)]

  //   document.query

  //   const currentIndex = slides.indexOf(activeSlide)

  //   let newIndex = currentIndex + offset
  
  //   if (newIndex < 0) newIndex = slides.length - 1
  //   if (newIndex >= slides.length) newIndex = 0
  
  //   slides[newIndex].dataset.active = true
  //   delete activeSlide.dataset.active
  // }

  // // const onNext = (slide) => handleImageChange(1, slide)
  // // const onPrev = (slide) => handleImageChange(-1, slide)

  // const onNext = () => handleImageChange(1, styles.slide)
  // const onPrev = () => handleImageChange(-1, styles.slide)

  // const onNext2 = () => handleImageChange(1, styles.slide2)
  // const onPrev2 = () => handleImageChange(-1, styles.slide2)

              // <div className={styles.carousel}>
              //   <button className={styles.btn} id={styles.next} onClick={onNext2}>&#187;</button>
              //   <button className={styles.btn} id={styles.prev} onClick={onPrev2}>&#171;</button>
              //   <ul className={styles.slides}>
              //     <li className={styles.slide2} data-active>
              //       <div className={styles.img} style={{ backgroundImage: 'url(/MomSite/pdd/1.jpg)' }}/>
              //     </li>
              //     <li className={styles.slide2}>
              //       <div className={styles.img} style={{ backgroundImage: 'url(/MomSite/pdd/2.jpeg)' }}/>
              //     </li>
              //     <li className={styles.slide2}>
              //       <div className={styles.img} style={{ backgroundImage: 'url(/MomSite/pdd/3.jpeg)' }}/>
              //     </li>
              //   </ul>
              // </div>
  