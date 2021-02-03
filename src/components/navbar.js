import React from 'react';
import './navbar.css';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => (
  <Navbar className="navbar">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link className='navBarLink' href="#about">about</Nav.Link>
        <Nav.Link className='navBarLink' href="#work">work</Nav.Link>
        <Nav.Link className='navBarLink' href="#experience">experience</Nav.Link>
        <Nav.Link className='navBarLink' href="#contact">contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
export default NavigationBar;