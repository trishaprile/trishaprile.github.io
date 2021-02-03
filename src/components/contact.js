import React, { Component } from 'react';
import './contact.css';
import { Container, Row, Col } from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <footer>
        <h1>contact me</h1>
        <div className="info">
          <h2>trishaprilee@gmail.com</h2>

        </div>
        <p>Made with ♥ • © Trisha Le 2020</p>
        </footer>
      </div>     
    );
  }
}
export default Contact;