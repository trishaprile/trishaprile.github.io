import React from 'react';
import './Experience.scss';

import { Row, Col, Image, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';

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
      <Row className="content-container" xs={1} sm={1} md={1} lg={2}> 
        <Col className="jobs-container">
          <Fade>
            <h1>my experience</h1>
          </Fade>
          <Col className="jobs">
            <Fade top>
              <Row className="job" xs={8} sm={8} md={8} lg={8}>
                <Col className="logo-container" xs={2} sm={2} md={2} lg={2}>
                  <a href="https://startsmart.co/" target="_blank" rel="noreferrer"><Image className="logo" src={startsmart} alt="StartSmart"/></a>
                </Col>
                <Col className="info-container" xs={9} sm={9} md={9} lg={9}>
                  <h3 className="years">2020 - present</h3>
                  <h2 className="company"><a href="https://startsmart.co/" target="_blank" rel="noreferrer">StartSmart</a></h2>
                  <p className="role">Product Manager</p>
                </Col>
              </Row>
              <Row className="job" xs={8} sm={8} md={8} lg={8}>
                <Col className="logo-container" xs={2} sm={2} md={2} lg={2}>
                  <a href="https://peterportal-client.herokuapp.com/" target="_blank" rel="noreferrer"><Image className="logo" src={peterportal} alt="StartSmart"/></a>
                </Col>
                <Col className="info-container" xs={9} sm={9} md={9} lg={9}>
                  <h3 className="years">2020 - 2021</h3>
                  <h2 className="company"><a href="https://peterportal-client.herokuapp.com/" target="_blank" rel="noreferrer">PeterPortal</a></h2>
                  <p className="role">Project Manager</p>
                </Col>
              </Row>
              <Row className="job" xs={8} sm={8} md={8} lg={8}>
                <Col className="logo-container" xs={2} sm={2} md={2} lg={2}>
                  <a href="https://www.ardentlabs.io/" target="_blank" rel="noreferrer"><Image className="logo" src={ardentlabs} alt="StartSmart"/></a>
                </Col>
                <Col className="info-container" xs={9} sm={9} md={9} lg={9}>
                  <h3 className="years">2019 - 2020</h3>
                  <h2 className="company"><a href="https://www.ardentlabs.io/" target="_blank" rel="noreferrer">Ardent Labs</a></h2>
                  <p className="role">Software Development Intern</p>
                </Col>
              </Row>
              <Row className="job" xs={8} sm={8} md={8} lg={8}>
                <Col className="logo-container" xs={2} sm={2} md={2} lg={2}>
                  <a href="https://www.boeing.com/" target="_blank" rel="noreferrer"><Image className="logo" src={boeing} alt="StartSmart"/></a>
                </Col>
                <Col className="info-container" xs={9} sm={9} md={9} lg={9}>
                  <h3 className="years">2017</h3>
                  <h2 className="company"><a href="https://www.boeing.com/" target="_blank" rel="noreferrer">Boeing</a></h2>
                  <p className="role">Software Engineer Intern</p>
                </Col>
              </Row>
            </Fade>
          </Col>
        </Col>
        <Col className="toolbox-container">
          <Fade>
            <h1>toolbox</h1>
          </Fade>
          <div className="toolbox">
            <Fade>
              <Row xs={3}>
                <Col className="icon-container">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="tooltip" className="tooltip">Figma</Tooltip>}
                  >
                    <Image className="icon" src={figma} alt="Figma"/>
                  </OverlayTrigger>
                </Col>
                <Col className="icon-container">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip className="tooltip">Adobe Creative Cloud</Tooltip>}
                  >
                    <Image className="icon" src={adobecc} alt="Adobe Creative Cloud"/>
                  </OverlayTrigger>
                </Col>
                <Col className="icon-container">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip className="tooltip">Bootstrap</Tooltip>}
                  >
                    <Image className="icon" src={bootstrap} alt="Bootstrap"/>
                  </OverlayTrigger>
                </Col>
              </Row>
              <Row xs={3}>
                <Col className="icon-container">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip className="tooltip">HTML</Tooltip>}
                  >
                    <Image className="icon" src={html} alt="HTML"/>
                  </OverlayTrigger>
                </Col>
                <Col className="icon-container">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip className="tooltip">CSS</Tooltip>}
                  >
                    <Image className="icon" src={css} alt="CSS"/>
                  </OverlayTrigger>
                </Col>
                <Col className="icon-container">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip className="tooltip">JavaScript</Tooltip>}
                  >
                    <Image className="icon" src={javascript} alt="JavaScript"/>
                  </OverlayTrigger>
                </Col>
              </Row>
              <Row xs={3}>
                <Col className="icon-container">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip className="tooltip">React</Tooltip>}
                  >
                    <Image className="icon" src={react} alt="React"/>
                  </OverlayTrigger>
                </Col>
                <Col className="icon-container">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip className="tooltip">Angular</Tooltip>}
                  >
                    <Image className="icon" src={angular} alt="Angular"/>
                  </OverlayTrigger>
                </Col>
                <Col className="icon-container">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip className="tooltip">Django</Tooltip>}
                  >
                    <Image className="icon" src={django} alt="Django"/>
                  </OverlayTrigger>
                </Col>
              </Row>
              <Row xs={3}>
                <Col className="icon-container">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip className="tooltip">GraphQL</Tooltip>}
                  >
                    <Image className="icon" src={graphql} alt="GraphQL"/>
                  </OverlayTrigger>
                </Col>
                <Col className="icon-container">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip className="tooltip">Docker</Tooltip>}
                  >
                    <Image className="icon" src={docker} alt="Docker"/>
                  </OverlayTrigger>
                </Col>
                <Col className="icon-container">
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip className="tooltip">Git</Tooltip>}
                  >
                    <Image className="icon" src={git} alt="Git"/>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Fade>
          </div>
          <Button className="resume-btn" href={resume} target="_blank" rel="noreferrer">VIEW RESUME</Button>
        </Col>
      </Row>
    </Element>
  );
}
export default Experience;