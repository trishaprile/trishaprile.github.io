import React from 'react';
import './About.scss';

import { Row, Col, Image } from "react-bootstrap";
import { Element } from 'react-scroll';

import me from "../assets/me.png";
import projectManagement  from "../assets/project_management.svg";
import softwareDevelopment  from "../assets/software_development.svg";
import UIUXdesign  from "../assets/uiux_design.svg";

const About = () => { 
  return (
    <Element id='about' name='about'>
      <Row className="content-container" sm={1} md={2} xl={2}>
        <Col className="img-container">
          <Image src={me} className="img" />
        </Col>
        <Col className="info-container">
          <h1>about me</h1>
          <p>I’m a 21 year old ?? from Orange County, California who aspires to be an innovative creator in the field of technology.</p>
          <p>I recently graduated from the University of California, Irvine with a B.S. in Informatics and a minor in Education.
            My studies involved the understanding and practice of human computer interaction, software design, and human behavior with an emphasis on people and design.</p>
          <p>I’m passionate about software development, UI & UX design and research, and project management with a focus on education, accessibility, and human-centered design.</p>
        </Col>
      </Row>
      <Row className="content-container">
        <Col className="role-container">
          <Image src={projectManagement} className="role-img" />
          <p>project management</p>
        </Col>
        <Col className="role-container">
          <Image src={softwareDevelopment} className="role-img" />
          <p>software development</p>
        </Col>
        <Col className="role-container">
          <Image src={UIUXdesign} className="role-img" />
          <p>UI & UX design</p>
        </Col>
      </Row>
    </Element>
  );
}
export default About;