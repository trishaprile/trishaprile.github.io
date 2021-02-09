import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './work.css';

class Work extends Component {
  render() {
    return (
      <div id="work">
        <Container>
            <Row className="work-row">
							<Col>
                <div className="project-glass">
                  {/* https://github.com/grasshopperfund */}
                  <h2 className="project-name">Grasshopperfund</h2>
                  <h3 className="project-description">A new crowdfunding platform for young entrepreneurs</h3>
                </div>
							</Col>
							<Col>
                <div className="project-glass">
                  {/* https://icsscprojects.medium.com/peters-roadmap-peterportal-s-4-year-course-planner-64072e1adfb5 */}
                  <h2 className="project-name">Peter's Roadmap</h2>
                  <h3 className="project-description">An interactive 4-year course planner for students</h3>
                </div>
							</Col>
            </Row>
						<Row className="work-row">
							<Col>
                <div className="project-glass">
                  {/* https://github.com/skapoor2/travelpal */}
                  <h2 className="project-name">TravelPal</h2>
                  <h3 className="project-description">An all-encompassing trip planning app for travelers</h3>
                </div>
							</Col>
							<Col>
                <div className="project-glass">
                  {/* https://medium.com/inf-132-group-17/soundcloud-redesign-b7ec659abecb */}
                  <h2 className="project-name">Jam for Change</h2>
                  <h3 className="project-description">A week-long development competition for social good.</h3>
                </div>
							</Col>
            </Row>
        </Container>
      </div>     
    );
  }
}
export default Work;