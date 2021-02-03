import React, { Component } from 'react';
import './cover.css';
import NavigationBar from './navbar';

import { Container } from 'react-bootstrap';

class Cover extends Component {
  render() {
    return (
      <div className="cover">
        <NavigationBar />
        <div className="glass">
          <Container className="cover-container">
            <h1 className="intro-title">Hello! I'm Trisha,</h1>
            <h3 className="intro-subtitle">a designer and developer who enjoys creating impactful experiences, from ideation to execution.</h3>
          </Container>
          <div className="socials">
            <div className="btnsame btn1">
              <a href="https://github.com/vikalp2502" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
            </div>
            <div className="btnsame btn2">
              <a href="https://twitter.com/@kaushik_vikalp" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
            </div>
            <div className="btnsame btn3">
              <a href="https://linkedin.com/in/vikalp-kaushik-99966a1ab" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
            </div>
            <div className="btnsame btn4">
              <a href="https://instagram.com/vikalp._.kaushik" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>     
    );
  }
}
export default Cover;