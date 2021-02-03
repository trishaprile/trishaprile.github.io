import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './about.css';
import me from '../assets/me.png'
class About extends Component {
  render() {
    return (
      <div id="about">
        <Container className="about-container">
          <Row className="about-row">
            <Col className="pic-col">
              <img className="pic" src={me} alt="Trisha Le"/>
            </Col>
            <Col className="text-col">
              <h1 className="about-title">about me</h1>
              <div className="about-text">
                <p>I’m a 20 year old student (she/her) from Orange County, California who aspires to be an innovative creator in the field of technology.</p>
                <p>Currently, I am pursuing a B.S. in Informatics with a minor in Education at the University of California, Irvine. My major involves the study and practice of human 
                    computer interaction, software design, and human behavior with an emphasis on people and design.</p>
                <p>I’m passionate about software development, UI/UX design and research, and project management with a focus on education, accessibility, and human-centered design.</p>
                <p>In my free time, I enjoy journaling, hiking, playing games, watching films, and discovering new places.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>     
    );
  }
}
export default About;