import React from 'react';
import './Cover.scss';

import { Row, Col, Button, Image } from "react-bootstrap";
import { Element } from 'react-scroll';
import { scroller } from 'react-scroll';
import Fade from 'react-reveal/Fade';

import img  from "../assets/cover_img.svg";

const Cover = () => { 
  return (
    <Element id='cover' name='cover'>
      <Row className="content-container">
        <Col className="info-container">
          <Fade top>
            <h1>Hello!</h1>
            <h2>I'm Trisha,</h2>
            <h3>a manager, developer, and designer who enjoys creating impactful experiences, from ideation to execution.</h3>
          </Fade>
          <Fade bottom>
            <Button 
              className="contact-btn"
              onClick={() => scroller.scrollTo('contact', {
                smooth: true,
                offset: -50,
                duration: 500,
              })}
            >
              LET'S CHAT!
            </Button>
          </Fade>
        </Col>
        <Col className="img-container" sm={12} md={8} lg={6}>
          <Fade>
            <Image src={img} className="img" />
          </Fade>
        </Col>
      </Row>
    </Element>
  );
}
export default Cover;