import React from 'react';
import './About.scss';

import { Row, Col, Image } from "react-bootstrap";
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';

import me from "../assets/me.jpeg";
import projectManagement  from "../assets/project_management.svg";
import softwareDevelopment  from "../assets/software_development.svg";
import UIUXdesign  from "../assets/uiux_design.svg";

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
            <p>I’m a 21 year old from Orange County, California who aspires to be an innovative creator in the field of technology.</p>
            <p>I recently graduated from the University of California, Irvine with a B.S. in Informatics and a minor in Education.
              My studies involved the understanding and practice of human computer interaction, software design, and human behavior with an emphasis on people and design.</p>
            <p>I’m passionate about software development, UI & UX design and research, and project & product management with a focus on education, accessibility, and human-centered design.</p>
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
            <div>
              <p>Scrum & Agile Management</p>
              <p>Product Research & Strategies</p>
              <p>Requirements Specification</p>
            </div>
          </Fade>
        </Col>
        <Col className="role-container" >
          <Fade>
            <h2>software development</h2>
            <Image src={softwareDevelopment} className="role-img" />
          </Fade>
          <Fade top cascade>
            <div>
              <p>Frontend Development</p>
              <p>Backend Development</p>
              <p>Quality Assurance</p>
            </div>
          </Fade>
        </Col>
        <Col className="role-container" >
          <Fade>
            <h2>UI & UX design</h2>
            <Image src={UIUXdesign} className="role-img" />
          </Fade>
          <Fade top cascade>
            <div>
              <p>Wireframing & Prototyping</p>
              <p>User Research & Testing</p>
              <p>Usability Evaluation</p>
            </div>
          </Fade>
        </Col>
      </Row>
    </Element>
  );
}
export default About;