import React from 'react';
import '../styles/Banner.css';
import { useSpring, animated } from 'react-spring';

// EMPEZAR ESTILO MOBILE FIRST

function Banner() {
  const styles = useSpring({
    config: { duration: 1000 },
    to: { opacity: 1, transform: 'translateY(0%)' },
    from: { opacity: 0, transform: 'translateY(100%)' },
  });

  return (
    <>
      <div className='banner-container'>
        <animated.div style={styles}>BAPHOMET TATTOO</animated.div>
      </div>
    </>
  );
}

export default Banner;
