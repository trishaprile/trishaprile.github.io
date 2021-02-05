import React, { Component } from 'react';
import './cover.css';
// import ReactTooltip from 'react-tooltip';
import Resume from "../assets/Trisha Le Resume.pdf"

import { Container } from 'react-bootstrap';

import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

class Cover extends Component {
  render() {
    return (
      <div id="cover">
        <div className="cover-container">
          <div className="glass">
            <Container className="cover-text">
              <h1 className="intro-title">Hello! I'm Trisha,</h1>
              <h3 className="intro-subtitle">a designer and developer who enjoys creating impactful experiences, from ideation to execution.</h3>
              <div className="socials">
                <a data-tip data-for="linkedInTip" href="https://www.linkedin.com/in/trishaprile/" target="_blank" rel="noreferrer"><FaLinkedinIn className="social-icon"/></a>
                <a href="https://github.com/trishaprile" target="_blank" rel="noreferrer"><FaGithub className="social-icon"/></a>
                <a href="https://www.instagram.com/trishaprile/" target="_blank" rel="noreferrer"><FaInstagram className="social-icon"/></a>
                <a href="mailto: trishaprilee@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope className="social-icon"/></a>
                <a href={Resume} target="_blank" rel="noreferrer"><FaFileAlt className="social-icon"/></a>
              </div>
            </Container>
        </div>
        </div>
      </div>     
    );
  }
}
export default Cover;