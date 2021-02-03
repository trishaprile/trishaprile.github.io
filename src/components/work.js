import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './work.css';

class Work extends Component {
  render() {
    return (
      <div id="work">
        <h1>my work</h1>
        <Container>
            <Row>
							<Col xs={6}>
                <div className="project">
                  {/* https://github.com/grasshopperfund */}
                  <h2>Grasshopperfund</h2>
                  <h3>A new crowdfunding platform for young entrepreneurs</h3>
                </div>
							</Col>
							<Col xs={6}>
                <div className="project">
                  {/* https://icsscprojects.medium.com/peters-roadmap-peterportal-s-4-year-course-planner-64072e1adfb5 */}
                  <h2>Peter's Roadmap</h2>
                  <h3>An interactive 4-year course planner for students</h3>
                </div>
							</Col>
            </Row>
						<Row>
							<Col xs={6}>
                <div className="project">
                  {/* https://github.com/skapoor2/travelpal */}
                  <h2>TravelPal</h2>
                  <h3>An all-encompassing trip planning app for travelers</h3>
                </div>
							</Col>
							<Col xs={6}>
                <div className="project">
                  {/* https://medium.com/inf-132-group-17/soundcloud-redesign-b7ec659abecb */}
                  <h2>Jam for Change</h2>
                  <h3>A week-long development competition for social good.</h3>
                </div>
							</Col>
            </Row>
        </Container>
      </div>     
    );
  }
}
export default Work;