import React, { useState, useEffect } from 'react';
import './Navbar.scss';

import { Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => { 
  let listener = null;
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 150) {
        if (scrollState !== "amir") {
          setScrollState("amir")
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])

  return (
    <div className="navbar">
      <Navbar collapseOnSelect expand="lg" fixed="top" className={scrollState === "top" ? "nav-top" : "nav"}>
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