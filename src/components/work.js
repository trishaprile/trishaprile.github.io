import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './work.css';

import Grasshopperfund from "../assets/Grasshopperfund.png"
import JamforChange from "../assets/JamforChange.png"
import PetersRoadmap from "../assets/PetersRoadmap.png"
import TravelPal from "../assets/TravelPal.png"

class Work extends Component {
  render() {
    return (
      <div id="work">
        <Container>
            <Row className="work-row">
							<Col>
                <a href="https://www.grasshopperfund.com/" target="_blank" rel="noreferrer">
                  <div className="project-glass">
                    <img src={Grasshopperfund} alt="Grasshopperfund" className="project-img" />
                    <h2 className="project-name">Grasshopperfund</h2>
                    <h3 className="project-description">A new crowdfunding platform for young entrepreneurs</h3>
                  </div>
                </a>
							</Col>
              <Col>
                <a href="https://www.icssc-jamforchange.com/" target="_blank" rel="noreferrer">
                  <div className="project-glass">
                    <img src={JamforChange} alt="Jam for Change" className="project-img" />
                    <h2 className="project-name">Jam for Change</h2>
                    <h3 className="project-description">A week-long development competition for social good.</h3>
                  </div>
                </a>
							</Col>	
            </Row>
						<Row className="work-row">
              <Col>
                <a href="https://icsscprojects.medium.com/peters-roadmap-peterportal-s-4-year-course-planner-64072e1adfb5" target="_blank" rel="noreferrer">
                  <div className="project-glass">
                    <img src={PetersRoadmap} alt="Peter's Roadmap" className="project-img" />
                    <h2 className="project-name">Peter's Roadmap</h2>
                    <h3 className="project-description">An interactive 4-year course planner for students</h3>
                  </div>
                </a>
							</Col>
							<Col>
                <a href="https://github.com/skapoor2/travelpal" target="_blank" rel="noreferrer">
                  <div className="project-glass">
                    <img src={TravelPal} alt="TravelPal" className="project-img" />
                    <h2 className="project-name">TravelPal</h2>
                    <h3 className="project-description">An all-encompassing trip planning app for travelers</h3>
                  </div>
                </a>
							</Col>
            </Row>
        </Container>
      </div>     
    );
  }
}
export default Work;