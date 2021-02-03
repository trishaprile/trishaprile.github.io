import React, { Component } from 'react';
import './experience.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import figma from '../assets/figma.png';
import adobecc from '../assets/adobecc.jpg';
import bootstrap from '../assets/bootstrap.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import angular from '../assets/angular.png';
import nodejs from '../assets/nodejs.png';
import django from '../assets/django.jpg';
import graphql from '../assets/graphql.png';
import git from '../assets/git.png';

class Experience extends Component {
  render() {
    return (
      <div id="experience">
        <h1>my experience</h1>
        <Container className="main">
          <Row>
            <Col xs={10}>
              <div className="jobs">
                <div className="job">
                  <h3>2020 - present</h3>
                  <h2>StartSmart</h2>
                  <p>Front-End Developer</p>
                </div>
                <div className="job">
                  <h3>2019 - 2020</h3>
                  <h2>Ardent Labs</h2>
                  <p>Software Development Intern</p>
                </div>
                <div className="job">
                  <h3>2019</h3>
                  <h2>Dreams for Schools</h2>
                  <p>App Development Mentor</p>
                </div>
                <div className="job">
                  <h3>2017</h3>
                  <h2>Boeing</h2>
                  <p>Software Development Intern</p>
                </div>
              </div>
            </Col>
            <Col>
              <h2>toolbox</h2>
              <div className="toolbox">
                <Container>
                  <Row xs={3}>
                    <Col><img className="icon" src={figma} alt="Figma"/></Col>
                    <Col><img className="icon" src={adobecc} alt="Adobe Creative Cloud"/></Col>
                    <Col><img className="icon" src={bootstrap} alt="Bootstrap"/></Col>
                  </Row>
                  <Row xs={3}>
                    <Col><img className="icon" src={html} alt="HTML"/></Col>
                    <Col><img className="icon" src={css} alt="CSS"/></Col>
                    <Col><img className="icon" src={javascript} alt="Javascript"/></Col>
                  </Row>
                  <Row xs={3}>
                    <Col><img className="icon" src={react} alt="React"/></Col>
                    <Col><img className="icon" src={angular} alt="Angular"/></Col>
                    <Col><img className="icon" src={nodejs} alt="NodeJS"/></Col>
                  </Row>
                  <Row xs={3}>
                    <Col><img className="icon" src={django} alt="Django"/></Col>
                    <Col><img className="icon" src={graphql} alt="GraphQL"/></Col>
                    <Col><img className="icon" src={git} alt="Git"/></Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="resume"><Button>view resume</Button></div>
      </div>     
    );
  }
}
export default Experience;