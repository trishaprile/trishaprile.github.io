import React from 'react';
import './Contact.scss';

import { Image } from "react-bootstrap";
import linkedin from "../assets/LinkedIn.png";
import github from "../assets/GitHub.png";
import gitlab from "../assets/GitLab.png";
import instagram from "../assets/Instagram.png";

const Contact = () => { 
  return (
    <div id="contact">
      <h1>contact me</h1>
      <h3>trishaprilee@gmail.com</h3>
      <div className="socials">
        <a href="https://www.linkedin.com/in/trishaprile/" target="_blank" rel="noreferrer"><Image src={linkedin} className="icon" /></a>
        <a href="https://www.github.com/trishaprile/" target="_blank" rel="noreferrer"><Image src={github} className="icon" /></a>
        <a href="https://www.gitlab.com/trishaprile/" target="_blank" rel="noreferrer"><Image src={gitlab} className="icon" /></a>
        <a href="https://www.instagram.com/trishaprile/" target="_blank" rel="noreferrer"><Image src={instagram} className="icon" /></a>
      </div>
      <div className="footer">
        <p>Made with ✨ © Trisha Le 2021</p>
      </div>
    </div>
  );
}
export default Contact;