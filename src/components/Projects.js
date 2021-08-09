import React from 'react';
import './Projects.scss';

import { Row, Col, Image } from "react-bootstrap";
import grasshopperfund from "../assets/grasshopperfund.png";

const Projects = () => { 
  return (
    <div id="projects">
      <h1>my projects</h1>
      <Row className="project-container">
        <Col className="project">
          <Image src={grasshopperfund} className="project-img" />
        </Col>
        <Col className="project">
          <Image src={grasshopperfund} className="project-img" />
        </Col>
      </Row>
      <Row className="project-container">
        <Col className="project">
          <Image src={grasshopperfund} className="project-img" />
        </Col>
        <Col className="project">
          <Image src={grasshopperfund} className="project-img" />
        </Col>
      </Row>
      <Row className="project-container">
        <Col className="project">
          <Image src={grasshopperfund} className="project-img" />
        </Col>
        <Col className="project">
          <Image src={grasshopperfund} className="project-img" />
        </Col>
      </Row>
    </div>
  );
}
export default Projects;