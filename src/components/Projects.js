import React from 'react';
import './Projects.scss';

import { Row, Col, Image } from "react-bootstrap";
import { Element } from 'react-scroll';
import Flip from 'react-reveal/Flip';

import grasshopperfund from "../assets/project_covers/grasshopperfund.png";
import dfs_ias from "../assets/project_covers/dfs ias.png";
import peter_portal from "../assets/project_covers/peter portal.png";
import trishaprile from "../assets/project_covers/trishaprile.png";
import jam_for_change from "../assets/project_covers/jam for change.png";
import covidulator from "../assets/project_covers/covidulator.png";

const Projects = () => { 
  return (
    <Element id='projects' name='projects'>
      <h1>my projects</h1>
      <Col className="project-container">
        <Row className="project-row">
          <Col className="project">
            <Flip top>
              <a href="https://grasshopperfund.com/" rel="noreferrer" target="_blank"><Image src={grasshopperfund} className="project-img" /></a>
            </Flip>
          </Col>
          <Col className="project">
            <Flip top> 
              <a href="https://drive.google.com/file/d/17-RU8pIZirdjOSQ6bpYtekCQBNaAhXJL/view" rel="noreferrer" target="_blank"><Image src={dfs_ias} className="project-img" /></a>
            </Flip>
          </Col>
        </Row>
        <Row className="project-row">
          <Col className="project">
            <Flip top> 
              <a href="https://peterportal-client.herokuapp.com/" rel="noreferrer" target="_blank"><Image src={peter_portal} className="project-img" /></a>
            </Flip>
          </Col>
          <Col className="project">
            <Flip top>
              <a href="#"><Image src={trishaprile} className="project-img" /></a>
            </Flip>
          </Col>
        </Row>
        <Row className="project-row">
          <Col className="project">
            <Flip top>
              <a href="https://www.icssc-jamforchange.com/" rel="noreferrer" target="_blank"><Image src={jam_for_change} className="project-img" /></a>
            </Flip>
          </Col>
          <Col className="project">
            <Flip top>
              <a href="https://nmpham2.github.io/covidulator/#/" rel="noreferrer" target="_blank"><Image src={covidulator} className="project-img" /></a>
            </Flip>
          </Col>
        </Row>
      </Col>
    </Element>
  );
}
export default Projects;