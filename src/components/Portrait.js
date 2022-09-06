import React, { useEffect } from 'react';
import '../styles/Portrait.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Portrait() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className='section'>
      <div className='portrait-container'>
        <p data-aos='fade-right' data-aos-once={true}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum"
        </p>
      </div>
    </div>
  );
}

export default Portrait;
