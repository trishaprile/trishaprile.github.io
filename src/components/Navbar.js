import React, { useState, useEffect } from 'react';
import './Navbar.scss';

import { Nav, Navbar } from "react-bootstrap";
import { scroller } from 'react-scroll';
import { RiMenu4Line } from "react-icons/ri";
import Fade from 'react-reveal/Fade';

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
        <Fade left>
          <Navbar.Brand 
            className="logo"
            onClick={() => scroller.scrollTo('cover', {
              smooth: true,
              offset: -100,
              duration: 500,
            })}
          >
            trishaprile
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
            </Fade>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavigationBar;