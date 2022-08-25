import React from 'react';
//import { RViewer, RViewerTrigger } from 'react-viewerjs';

import '../styles/Galery.css';

function Galery() {
  let images = [];
  //     require('../components/images/tattoo-galery/tg1.png'),
  //     require('../components/images/tattoo-galery/tg2.png'),
  //     require('../components/images/tattoo-galery/tg3.png'),
  //     require('../components/images/tattoo-galery/tg4.png'),
  //     require('../components/images/tattoo-galery/tg5.png'),
  //     require('../components/images/tattoo-galery/tg6.png'),
  //     require('../components/images/tattoo-galery/tg7.png'),
  //     require('../components/images/tattoo-galery/tg8.png'),
  //   ];

  for (let i = 1; i < 14; i++) {
    images.push(`${require(`../components/images/tattoo-galery/tg${i}.png`)}`);
  }

  return (
    <div className='galery-container'>
      <div className='galery-item'>
        {images.map((image) => {
          return <img src={image} className='galery-img' />;
        })}
      </div>
    </div>
  );
}

export default Galery;
