import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/NavigationBar.css';

// EMPEZAR ESTILO MOBILE FIRST

/* Hay que arreglar el estilo de las letras de fondo, quiero que sea todo rojo,
pero el estilo de bootstrap me pisa, parece que tuviese algún tipo de prioridad,
porque solo pasa con los links del navbar pero no con los de los desplegables. */

function NavigationBar() {
  return (
    <>
      <Navbar bg='dark' expand='md' variant='dark'>
        {/* <Navbar.Brand href='#home'>Baphomet Tattoo</Navbar.Brand> */}
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='m-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item
                href='#action/3.1'
                className='nav-dropdown-dark'
              >
                Action
              </NavDropdown.Item>
              <NavDropdown.Item
                href='#action/3.2'
                className='nav-dropdown-dark'
              >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item
                href='#action/3.3'
                className='nav-dropdown-dark'
              >
                Something
              </NavDropdown.Item>

              <NavDropdown.Item
                href='#action/3.4'
                className='nav-dropdown-dark'
              >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar;
