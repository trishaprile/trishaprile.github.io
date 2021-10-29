import React from 'react';
import ThemeChanger from '../ThemeChanger';
import './Navbar.scss';

import { Nav, Navbar, Image } from "react-bootstrap";
import { scroller } from 'react-scroll';
import { RiMenu4Line } from "react-icons/ri";
import Fade from 'react-reveal/Fade';

import logo from "../assets/trishaprile_logo.svg";

const NavigationBar = () => { 
  return (
    <div className="navbar">
      <Navbar collapseOnSelect expand="lg" fixed="top" className="nav">
        <Fade left>
          <Navbar.Brand 
            onClick={() => scroller.scrollTo('cover', {
              smooth: true,
              offset: -100,
              duration: 500,
            })}
          >
            <Image src={logo} className="logo" />
          </Navbar.Brand>
        </Fade>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle">
          <RiMenu4Line size={25}/>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Fade top cascade>
              <Nav.Link 
                className="nav-link"               
                onClick={() => scroller.scrollTo('about', {
                  smooth: true,
                  offset: -50,
                  duration: 500,
                })}
              >
                about
              </Nav.Link>
              <Nav.Link 
                className="nav-link" 
                onClick={() => scroller.scrollTo('experience', {
                  smooth: true,
                  offset: -50,
                  duration: 500,
                })}
              >
                experience
              </Nav.Link>
              <Nav.Link 
                className="nav-link"
                onClick={() => scroller.scrollTo('projects', {
                  smooth: true,
                  offset: -50,
                  duration: 500,
                })}
              >
                projects
              </Nav.Link>
              <Nav.Link 
                className="nav-link contact" 
                onClick={() => scroller.scrollTo('contact', {
                  smooth: true,
                  offset: -50,
                  duration: 500,
                })}
              >
                contact
              </Nav.Link>
              <ThemeChanger />
            </Fade>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavigationBar;