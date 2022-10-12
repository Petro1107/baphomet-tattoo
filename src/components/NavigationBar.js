import React from 'react';
import '../styles/NavigationBar.css';
import { Link } from 'react-scroll';

function NavigationBar() {
  return (
    <>
      <nav className='navbar'>
        <ul>
          <li>
            <Link
              to='portrait-container'
              spy={false}
              smooth={true}
              offset={-50}
              duration={800}
            >
              Baphomet-Tattoo
            </Link>
          </li>
          <li>
            <Link
              to='galery-container'
              spy={false}
              smooth={true}
              offset={-220}
              duration={800}
            >
              Galería
            </Link>
          </li>
          {/* formContainer */}
          <li>
            <Link
              to='formContainer'
              spy={false}
              smooth={true}
              offset={-50}
              duration={800}
            >
              Precios
            </Link>
          </li>
          <li>
            <Link
              to='contactSection'
              spy={false}
              smooth={true}
              offset={0}
              duration={800}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationBar;
