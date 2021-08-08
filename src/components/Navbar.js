import React from 'react';
import './Navbar.scss';

import { Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => { 
  return (
    <div className="navbar">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#" className="logo">trishaprile</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="nav-link" href="#about">about</Nav.Link>
            <Nav.Link className="nav-link" href="#experience">experience</Nav.Link>
            <Nav.Link className="nav-link" href="#projects">projects</Nav.Link>
            <Nav.Link className="nav-link contact" href="#contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavigationBar;