import Carousel from 'react-bootstrap/Carousel';
import '../styles/Slides.css';

function Slides() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className='d-block w-100'
          src={require('./images/tattoo1.png')}
          alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className='d-block w-100'
          src={require('./images/tattoo2.png')}
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={require('./images/tattoo3.png')}
          alt='Third slide'
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;
