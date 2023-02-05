import React, { useState } from 'react';
import { CustomImage } from '../image';
import styles from './index.module.scss';


const ImageSlider = (
  {
    images,
    width = 300,
    height = 200,
    alt = 'image',
    quality = 50
  }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (event) => {
    const { clientX } = event;
    const { left, width } = event.currentTarget.getBoundingClientRect();
    if (clientX - left > width / 2) {
      setCurrentIndex((currentIndex + 1) % images.length);
    } else {
      setCurrentIndex(
        (currentIndex + images.length - 1) % images.length
      );
    }
  };

  return (
    <div className={styles.main} onClick={handleClick}>
      {images.map((image, index) => {
        return <CustomImage
          src={image}
          width={width}
          height={height}
          alt={alt}
          styles={index === currentIndex ? '' : styles.hide}
          quality={quality}
          key={index}
        />;
      })}
    </div>
  );
};

export default ImageSlider;
