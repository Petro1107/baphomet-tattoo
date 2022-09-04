import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/NavigationBar.css';
import { Link } from 'react-scroll';

function NavigationBar() {
  return (
    <>
      <Navbar bg='dark' expand='md' variant='dark'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='m-auto'>
            <Link
              to='portrait-container'
              spy={true}
              smooth={true}
              offset={-50}
              duration={800}
            >
              <Nav.Link className='mx-5'>Baphomet-Tattoo</Nav.Link>
            </Link>
            <Link
              to='galery-container'
              spy={true}
              smooth={true}
              offset={-210}
              duration={800}
            >
              <Nav.Link className='mx-5'>Galería</Nav.Link>
            </Link>
            {/* formContainer */}
            <Link
              to='formContainer'
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
            >
              <Nav.Link className='mx-5'>Precios</Nav.Link>
            </Link>
            <Nav.Link className='mx-5'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar;
