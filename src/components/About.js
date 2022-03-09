import React from 'react';
import './About.scss';

import { Row, Col, Image } from "react-bootstrap";
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';

import me from "../assets/picture_of_me.svg";
import projectManagement  from "../assets/role_icons/project_management.svg";
import softwareDevelopment  from "../assets/role_icons/software_development.svg";
import UIUXdesign  from "../assets/role_icons/uiux_design.svg";

const About = () => { 
  return (
    <Element id='about' name='about'>
      <Row className="content-container" sm={1} md={1} lg={2}>
        <Col className="img-container">
          <Fade>
            <Image src={me} className="img" />
          </Fade>
        </Col>
        <Col className="info-container">
          <Fade top>
            <h1>about me</h1>
            <p>I’m a 21 year old who recently moved from Orange County, California to San Francisco.</p>
            <p>In 2021, I graduated from the University of California, Irvine with a B.S. 
              in <a href="https://www.informatics.uci.edu/undergrad/bs-informatics/"
              rel="noreferrer" target="_blank">Informatics</a> and a minor in Education. 
              My studies involved the understanding and practice of human computer interaction, 
              software design, and human behavior with an emphasis on people and design.</p>
            <p>I’m passionate about exploring the possibilities of product & project management, 
              software development, and UI & UX design and research, with a focus on education, 
              accessibility, inclusion, and universal usability.</p>
            <p>I am currently working as a UI Engineer at <a href="https://readme.com/" 
              rel="noreferrer" target="_blank">ReadMe</a>! 🦉</p>
          </Fade>
        </Col>
      </Row>
      <Row className="content-container" sm={1} md={3} lg={3}>
        <Col className="role-container" >
          <Fade>
            <h2>project & product management</h2>
            <Image src={projectManagement} className="role-img" />
          </Fade>
          <Fade top cascade>
            <div className="skills">
              <div className="badge"><p>Product Research & Strategies</p></div>
              <div className="badge"><p>Feature Specification & Roadmapping</p></div>
              <div className="badge"><p>Agile & Scrum Management</p></div>
            </div>
          </Fade>
        </Col>
        <Col className="role-container" >
          <Fade>
            <h2>software development</h2>
            <Image src={softwareDevelopment} className="role-img" />
          </Fade>
          <Fade top cascade>
            <div className="skills">
              <div className="badge"><p>Frontend Development</p></div>
              <div className="badge"><p>Backend Development</p></div>
              <div className="badge"><p>Web & Mobile Development</p></div>
            </div>
          </Fade>
        </Col>
        <Col className="role-container" >
          <Fade>
            <h2>UI & UX design</h2>
            <Image src={UIUXdesign} className="role-img" />
          </Fade>
          <Fade top cascade>
            <div className="skills">
              <div className="badge"><p>Wireframing & Prototyping</p></div>
              <div className="badge"><p>User Research & Testing</p></div>
              <div className="badge"><p>Visual Communication</p></div>
            </div>
          </Fade>
        </Col>
      </Row>
    </Element>
  );
}
export default About;