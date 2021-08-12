import React from 'react';
import './Contact.scss';

import { Image } from "react-bootstrap";
import { Element } from 'react-scroll';
import { FiMail } from "react-icons/fi";

import linkedin from "../assets/LinkedIn.png";
import github from "../assets/GitHub.png";
import gitlab from "../assets/GitLab.png";
import instagram from "../assets/Instagram.png";

const Contact = () => { 
  return (
    <Element id='contact' name='contact'>
      <h1>contact me</h1>
      <h3><a href="mailto:trishaprilee@gmail.com"><FiMail className="mail-icon" size={25}/></a>trishaprilee@gmail.com</h3>
      <div className="socials">
        <a href="https://www.linkedin.com/in/trishaprile/" target="_blank" rel="noreferrer"><Image src={linkedin} className="icon" /></a>
        <a href="https://www.github.com/trishaprile/" target="_blank" rel="noreferrer"><Image src={github} className="icon" /></a>
        <a href="https://www.gitlab.com/trishaprile/" target="_blank" rel="noreferrer"><Image src={gitlab} className="icon" /></a>
        <a href="https://www.instagram.com/trishaprile/" target="_blank" rel="noreferrer"><Image src={instagram} className="icon" /></a>
      </div>
      <div className="footer">
        <p>Made with ✨ © Trisha Le 2021</p>
      </div>
    </Element>
  );
}
export default Contact;