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
        <Container className="experience-container">
          <Row>
            <Col className="jobs-col">
              <div className="jobs-glass">
                <div className="jobs">
                  <div className="job">
                    <h3 className="years">2020 - present</h3>
                    <h2 className="company">StartSmart</h2>
                    <p className="role">Front-End Developer</p>
                  </div>
                  <div className="job">
                    <h3 className="years">2019 - 2020</h3>
                    <h2 className="company">Ardent Labs</h2>
                    <p className="role">Software Development Intern</p>
                  </div>
                  <div className="job">
                    <h3 className="years">2019</h3>
                    <h2 className="company">Dreams for Schools</h2>
                    <p className="role">App Development Mentor</p>
                  </div>
                  <div className="job">
                    <h3 className="years">2017</h3>
                    <h2 className="company">Boeing</h2>
                    <p className="role">Software Development Intern</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="toolbox-col">
              <div className="toolbox-glass">
                <h2 className="toolbox-title">toolbox</h2>
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
              </div>
            </Col>
          </Row>
        </Container>
      </div>     
    );
  }
}
export default Experience;