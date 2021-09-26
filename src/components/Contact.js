import React from 'react';
import './Contact.scss';

import { Row } from "react-bootstrap";
import { Element } from 'react-scroll';
import { scroller } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { FiMail } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiGitlab } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { BsChevronCompactUp } from "react-icons/bs";

const Contact = () => { 
  return (
    <Element id='contact' name='contact'>
      <Fade>
        <h1>contact me</h1>
        <div className="badge">
          <h3><a href="mailto:trishaprilee@gmail.com"><FiMail className="mail-icon" /></a>trishaprilee@gmail.com</h3>
        </div>
      </Fade>
      <Row className="socials">
        <Fade bottom cascade>
          <a href="https://www.linkedin.com/in/trishaprile/" target="_blank" rel="noreferrer"><SiLinkedin className="icon"/></a>
          <a href="https://www.github.com/trishaprile/" target="_blank" rel="noreferrer"><SiGithub className="icon"/></a>
          <a href="https://www.gitlab.com/trishaprile/" target="_blank" rel="noreferrer"><SiGitlab className="icon"/></a>
          <a href="https://www.instagram.com/trishaprile/" target="_blank" rel="noreferrer"><SiInstagram className="icon"/></a>
        </Fade>
      </Row>
      <Fade top>
        <div 
          className="arrow-container"
          onClick={() => scroller.scrollTo('cover', {
            smooth: true,
            offset: -50,
            duration: 500,
          })}
        >
          <BsChevronCompactUp className="arrow" size={50} />
        </div>
      </Fade>
      <div className="footer">
        <Fade bottom>
          <p>Made with ✨ © Trisha Le 2021</p>
        </Fade>
      </div>
    </Element>
  );
}
export default Contact;