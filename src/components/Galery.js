import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

/* import { RViewer, RViewerTrigger } from 'react-viewerjs'; 
RViewer genera un bug... el trigger no se ejecuta correctamente
y al momento de clickear la imagen queda una pantalla en blanco
con varios errores en consola.
*/

import '../styles/Galery.css';

function Galery() {
  let images = [];

  for (let i = 1; i < 14; i++) {
    images.push({
      img: `${require(`../components/images/tattoo-galery/tg${i}.png`)}`,
    });
  }

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(images.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === images.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <>
      {openModal && (
        <div className='slider-container'>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className='btnClose'
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className='btnPrev'
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className='btnNext'
            onClick={nextSlide}
          />

          <div className='fullScreenImg' onClick={handleCloseModal}>
            <img src={images[slideNumber].img} alt='tattoo' />
          </div>
        </div>
      )}

      <div className='galery-container'>
        {images.map((image, index) => {
          // console.log(image);
          return (
            // <div className='galery-item'>
            <img
              src={image.img}
              alt='tattoo'
              className='galery-img'
              key={index}
              onClick={() => handleOpenModal(index)}
            />
            //</div>
          );
        })}
      </div>
    </>
  );
}

export default Galery;
