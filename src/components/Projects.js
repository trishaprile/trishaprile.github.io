import React from 'react';
import './Projects.scss';

import { Row, Col, Image } from "react-bootstrap";
import grasshopperfund from "../assets/grasshopperfund.png";
import dfs_ias from "../assets/dfs ias.png";
import peter_portal from "../assets/peter portal.png";
import trishaprile from "../assets/trishaprile.png";
import jam_for_change from "../assets/jam for change.png";
import covidulator from "../assets/covidulator.png";

const Projects = () => { 
  return (
    <div id="projects">
      <h1>my projects</h1>
      <Col className="project-container">
        <Row className="project-row">
          <Col className="project">
            <Image src={grasshopperfund} className="project-img" />
          </Col>
          <Col className="project">
            <Image src={dfs_ias} className="project-img" />
          </Col>
        </Row>
        <Row className="project-row">
          <Col className="project">
            <Image src={peter_portal} className="project-img" />
          </Col>
          <Col className="project">
            <Image src={trishaprile} className="project-img" />
          </Col>
        </Row>
        <Row className="project-row">
          <Col className="project">
            <Image src={jam_for_change} className="project-img" />
          </Col>
          <Col className="project">
            <Image src={covidulator} className="project-img" />
          </Col>
        </Row>
      </Col>
    </div>
  );
}
export default Projects;