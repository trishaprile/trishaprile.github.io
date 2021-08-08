import React from 'react';
import './About.scss';

import { Row, Col, Image } from "react-bootstrap";
import img  from "../assets/cover_img.svg";

const About = () => { 
  return (
    <div id="about">
      <Row className="content-container">
        <Col className="img-container">
          <Image src={img} className="img" />
        </Col>
        <Col className="info-container">
          <h1>about me</h1>
          <p>I’m a 21 year old ?? from Orange County, California who aspires to be an innovative creator in the field of technology.</p>
          <p>I recently graduated from the University of California, Irvine with a B.S. in Informatics and a minor in Education.
            My studies involved the understanding and practice of human computer interaction, software design, and human behavior with an emphasis on people and design.</p>
          <p>I’m passionate about software development, UI & UX design and research, and project management with a focus on education, accessibility, and human-centered design.</p>
        </Col>
      </Row>
    </div>
  );
}
export default About;