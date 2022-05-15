import React from 'react';
import './App.scss';

import Fade from 'react-reveal/Fade';
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiDribbble } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const App = () => {
  return (
    <div className="App">
      <div className="info">
        <Fade>
          <h1>hello, im trisha</h1>
          <p>im a designer, developer, and human who enjoys creating thoughtful experiences</p>
        </Fade>
        <div className="socials">
          <Fade bottom cascade>
            <a href="https://www.linkedin.com/in/trishaprile/" target="_blank" rel="noreferrer"><FiLinkedin className="icon"/></a>
            <a href="https://www.github.com/trishaprile/" target="_blank" rel="noreferrer"><FiGithub className="icon"/></a>
            <a href="https://dribbble.com/trishaprile/" target="_blank" rel="noreferrer"><FiDribbble className="icon"/></a>
            <a href="mailto:trishaprilee@gmail.com"><FiMail className="icon" /></a>
          </Fade>
        </div>
      </div>
    </div>
  );
}
export default App;