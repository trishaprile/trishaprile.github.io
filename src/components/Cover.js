import React from 'react';
import './Cover.scss';

import { Row, Col, Button, Image } from "react-bootstrap";
import img  from "../assets/cover_img.svg";

const Cover = () => { 
  return (
    <div id="cover">
      <Row className="content-container">
        <Col className="info-container">
          <h1>Hello!</h1>
          <h2>I'm Trisha,</h2>
          <h3>a designer and developer who enjoys creating impactful experiences, from ideation to execution.</h3>
          <Button className="contact-btn" href="#contact">LET'S CHAT!</Button>
        </Col>
        <Col className="img-container" sm={12} md={8} xl={6}>
          <Image src={img} className="img" />
        </Col>
      </Row>
    </div>
  );
}
export default Cover;