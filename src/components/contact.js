import React, { Component } from 'react';
import './contact.css';

import Resume from "../assets/Trisha Le Resume.pdf"


import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <footer>
          <h1 className="contact-me">contact me</h1>
          <div className="socials">
            <a data-tip data-for="linkedInTip" href="https://www.linkedin.com/in/trishaprile/" target="_blank" rel="noreferrer"><FaLinkedinIn className="social-icon"/></a>
            <a href="https://github.com/trishaprile" target="_blank" rel="noreferrer"><FaGithub className="social-icon"/></a>
            <a href="https://www.instagram.com/trishaprile/" target="_blank" rel="noreferrer"><FaInstagram className="social-icon"/></a>
            <a href="mailto: trishaprilee@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope className="social-icon"/></a>
            <a href={Resume} target="_blank" rel="noreferrer"><FaFileAlt className="social-icon"/></a>
          </div>
          <p className="copyright">Made with ♥ • © Trisha Le 2020</p>
        </footer>
      </div>     
    );
  }
}
export default Contact;