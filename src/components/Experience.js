import React from 'react';
import './Experience.scss';

import { Row, Col, Image, Button } from "react-bootstrap";
import figma from "../assets/figma.png";
import adobecc from "../assets/adobecc.png";
import bootstrap from "../assets/bootstrap.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import angular from "../assets/angular.png";
import nodejs from "../assets/nodejs.png";
import django from "../assets/django.jpg";
import graphql from "../assets/graphql.png";
import git from "../assets/git.png";
import resume from '../assets/Trisha Le Resume.pdf';

const Experience = () => { 
  return (
    <div id="experience">
      <Row className="content-container">
        <Col className="jobs-container" sm={12} md={8} xl={6}>
          <h1>my experience</h1>
          <div className="jobs">
            <div className="job">
              <h3 className="years">2020 - present</h3>
              <h2 className="company"><a href="https://startsmart.co/" target="_blank" rel="noreferrer">StartSmart</a></h2>
              <p className="role">Front-End Developer</p>
            </div>
            <div className="job">
              <h3 className="years">2020 - 2021</h3>
              <h2 className="company"><a href="https://peterportal-client.herokuapp.com/" target="_blank" rel="noreferrer">PeterPortal</a></h2>
              <p className="role">Project Lead</p>
            </div>
            <div className="job">
              <h3 className="years">2019 - 2020</h3>
              <h2 className="company"><a href="https://www.ardentlabs.io/" target="_blank" rel="noreferrer">Ardent Labs</a></h2>
              <p className="role">Software Development Intern</p>
            </div>
            <div className="job">
              <h3 className="years">2017</h3>
              <h2 className="company"><a href="https://www.boeing.com/" target="_blank" rel="noreferrer">Boeing</a></h2>
              <p className="role">Software Development Intern</p>
            </div>
          </div>
        </Col>
        <Col className="toolbox-container" sm={12} md={8} xl={6}>
          <h1>toolbox</h1>
          <div className="toolbox">
            <Row xs={3}>
              <Col className="icon-container"><Image className="icon" src={figma} alt="Figma"/></Col>
              <Col className="icon-container"><Image className="icon" src={adobecc} alt="Adobe Creative Cloud"/></Col>
              <Col className="icon-container"><Image className="icon" src={bootstrap} alt="Bootstrap"/></Col>
            </Row>
            <Row xs={3}>
              <Col className="icon-container"><Image className="icon" src={html} alt="HTML"/></Col>
              <Col className="icon-container"><Image className="icon" src={css} alt="CSS"/></Col>
              <Col className="icon-container"><Image className="icon" src={javascript} alt="Javascript"/></Col>
            </Row>
            <Row xs={3}>
              <Col className="icon-container"><Image className="icon" src={react} alt="React"/></Col>
              <Col className="icon-container"><Image className="icon" src={angular} alt="Angular"/></Col>
              <Col className="icon-container"><Image className="icon" src={nodejs} alt="NodeJS"/></Col>
            </Row>
            <Row xs={3}>
              <Col className="icon-container"><Image className="icon" src={django} alt="Django"/></Col>
              <Col className="icon-container"><Image className="icon" src={graphql} alt="GraphQL"/></Col>
              <Col className="icon-container"><Image className="icon" src={git} alt="Git"/></Col>
            </Row>
          </div>
          <Button className="resume-btn" href={resume} target="_blank" rel="noreferrer">VIEW RESUME</Button>
        </Col>
      </Row>
    </div>
  );
}
export default Experience;