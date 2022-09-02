import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/NavigationBar.css';

function NavigationBar() {
  return (
    <>
      <Navbar bg='dark' expand='md' variant='dark'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='m-auto'>
            <Nav.Link href='#home' className='mx-5'>
              Baphomet-Tattoo
            </Nav.Link>
            <Nav.Link href='#gallery' className='mx-5'>
              Galería
            </Nav.Link>
            <Nav.Link href='#calc' className='mx-5'>
              Precios
            </Nav.Link>
            <Nav.Link href='#contact' className='mx-5'>
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar;
