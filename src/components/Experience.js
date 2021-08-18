import React from 'react';
import './Experience.scss';

import { Row, Col, Image, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Element } from 'react-scroll';

import startsmart from "../assets/job_logos/startsmart_logo.png";
import peterportal from "../assets/job_logos/peterportal_logo.png";
import ardentlabs from "../assets/job_logos/ardentlabs_logo.png";
import boeing from "../assets/job_logos/boeing_logo.png";
import figma from "../assets/toolbox_icons/figma.png";
import adobecc from "../assets/toolbox_icons/adobecc.png";
import bootstrap from "../assets/toolbox_icons/bootstrap.png";
import html from "../assets/toolbox_icons/html.png";
import css from "../assets/toolbox_icons/css.png";
import javascript from "../assets/toolbox_icons/javascript.png";
import react from "../assets/toolbox_icons/react.png";
import angular from "../assets/toolbox_icons/angular.png";
import django from "../assets/toolbox_icons/django.png";
import graphql from "../assets/toolbox_icons/graphql.png";
import docker from "../assets/toolbox_icons/docker.png";
import git from "../assets/toolbox_icons/git.png";
import resume from '../assets/Trisha Le Resume.pdf';

const Experience = () => { 
  return (
    <Element id='experience' name='experience'>
      <Row className="content-container"> 
        <Col className="jobs-container" sm={12} md={8} xl={6}>
          <h1>my experience</h1>
          <Col className="jobs">
            <Row className="job">
              <Col className="logo-container" sm={2} md={2} xl={2}>
                <a href="https://startsmart.co/" target="_blank" rel="noreferrer"><Image className="logo" src={startsmart} alt="StartSmart"/></a>
              </Col>
              <Col className="info-container">
                <h3 className="years">2020 - present</h3>
                <h2 className="company"><a href="https://startsmart.co/" target="_blank" rel="noreferrer">StartSmart</a></h2>
                <p className="role">Product Manager</p>
              </Col>
            </Row>
            <Row className="job">
              <Col className="logo-container" sm={2} md={2} xl={2}>
                <a href="https://peterportal-client.herokuapp.com/" target="_blank" rel="noreferrer"><Image className="logo" src={peterportal} alt="StartSmart"/></a>
              </Col>
              <Col className="info-container">
                <h3 className="years">2020 - 2021</h3>
                <h2 className="company"><a href="https://peterportal-client.herokuapp.com/" target="_blank" rel="noreferrer">PeterPortal</a></h2>
                <p className="role">Project Manager</p>
              </Col>
            </Row>
            <Row className="job">
              <Col className="logo-container" sm={2} md={2} xl={2}>
                <a href="https://www.ardentlabs.io/" target="_blank" rel="noreferrer"><Image className="logo" src={ardentlabs} alt="StartSmart"/></a>
              </Col>
              <Col className="info-container">
                <h3 className="years">2019 - 2020</h3>
                <h2 className="company"><a href="https://www.ardentlabs.io/" target="_blank" rel="noreferrer">Ardent Labs</a></h2>
                <p className="role">Software Development Intern</p>
              </Col>
            </Row>
            <Row className="job">
              <Col className="logo-container" sm={2} md={2} xl={2}>
                <a href="https://www.boeing.com/" target="_blank" rel="noreferrer"><Image className="logo" src={boeing} alt="StartSmart"/></a>
              </Col>
              <Col className="info-container">
                <h3 className="years">2017</h3>
                <h2 className="company"><a href="https://www.boeing.com/" target="_blank" rel="noreferrer">Boeing</a></h2>
                <p className="role">Software Engineer Intern</p>
              </Col>
            </Row>
          </Col>
        </Col>
        <Col className="toolbox-container" sm={12} md={8} xl={6}>
          <h1>toolbox</h1>
          <div className="toolbox">
            <Row xs={3}>
              <Col className="icon-container">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Figma</Tooltip>}
                >
                  <Image className="icon" src={figma} alt="Figma"/>
                </OverlayTrigger>
              </Col>
              <Col className="icon-container">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Adobe Creative Cloud</Tooltip>}
                >
                  <Image className="icon" src={adobecc} alt="Adobe Creative Cloud"/>
                </OverlayTrigger>
              </Col>
              <Col className="icon-container">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Bootstrap</Tooltip>}
                >
                  <Image className="icon" src={bootstrap} alt="Bootstrap"/>
                </OverlayTrigger>
              </Col>
            </Row>
            <Row xs={3}>
              <Col className="icon-container">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>HTML</Tooltip>}
                >
                  <Image className="icon" src={html} alt="HTML"/>
                </OverlayTrigger>
              </Col>
              <Col className="icon-container">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>CSS</Tooltip>}
                >
                  <Image className="icon" src={css} alt="CSS"/>
                </OverlayTrigger>
              </Col>
              <Col className="icon-container">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>JavaScript</Tooltip>}
                >
                  <Image className="icon" src={javascript} alt="JavaScript"/>
                </OverlayTrigger>
              </Col>
            </Row>
            <Row xs={3}>
              <Col className="icon-container">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>React</Tooltip>}
                >
                  <Image className="icon" src={react} alt="React"/>
                </OverlayTrigger>
              </Col>
              <Col className="icon-container">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Angular</Tooltip>}
                >
                  <Image className="icon" src={angular} alt="Angular"/>
                </OverlayTrigger>
              </Col>
              <Col className="icon-container">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Django</Tooltip>}
                >
                  <Image className="icon" src={django} alt="Django"/>
                </OverlayTrigger>
              </Col>
            </Row>
            <Row xs={3}>
              <Col className="icon-container">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>GraphQL</Tooltip>}
                >
                  <Image className="icon" src={graphql} alt="GraphQL"/>
                </OverlayTrigger>
              </Col>
              <Col className="icon-container">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Docker</Tooltip>}
                >
                  <Image className="icon" src={docker} alt="Docker"/>
                </OverlayTrigger>
              </Col>
              <Col className="icon-container">
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Git</Tooltip>}
                >
                  <Image className="icon" src={git} alt="Git"/>
                </OverlayTrigger>
              </Col>
            </Row>
          </div>
          <Button className="resume-btn" href={resume} target="_blank" rel="noreferrer">VIEW RESUME</Button>
        </Col>
      </Row>
    </Element>
  );
}
export default Experience;