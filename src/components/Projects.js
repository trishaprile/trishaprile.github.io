import React, { useState } from 'react';
import './Projects.scss';

import { Row, Col, Image, Modal, Button } from "react-bootstrap";
import { Element } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import { BiTrophy } from "react-icons/bi";

import grasshopperfund from "../assets/project_covers/grasshopperfund.png";
import dfs_ias from "../assets/project_covers/dfs ias.png";
import peter_portal from "../assets/project_covers/peter portal.png";
import trishaprile from "../assets/project_covers/trishaprile.png";
import jam_for_change from "../assets/project_covers/jam for change.png";
import covidulator from "../assets/project_covers/covidulator.png";

const Projects = () => { 

  const [showGrasshopperfund, setShowGrasshopperfund] = useState(false);
	const handleCloseGrasshopperfund = () => setShowGrasshopperfund(false);
	const handleShowGrasshopperfund = () => setShowGrasshopperfund(true);

  const [showDFSIAS, setShowDFSIAS] = useState(false);
	const handleCloseDFSIAS = () => setShowDFSIAS(false);
	const handleShowDFSIAS = () => setShowDFSIAS(true);

  const [showPP, setShowPP] = useState(false);
	const handleClosePP = () => setShowPP(false);
	const handleShowPP = () => setShowPP(true);

  const [showTrishaprile, setShowTrishaprile] = useState(false);
	const handleCloseTrishaprile = () => setShowTrishaprile(false);
	const handleShowTrishaprile = () => setShowTrishaprile(true);

  const [showJamForChange, setShowJamForChange] = useState(false);
	const handleCloseJamForChange = () => setShowJamForChange(false);
	const handleShowJamForChange = () => setShowJamForChange(true);

  const [showCovidulator, setShowCovidulator] = useState(false);
	const handleCloseCovidulator = () => setShowCovidulator(false);
	const handleShowCovidulator = () => setShowCovidulator(true);

  return (
    <Element id='projects' name='projects'>
      <Fade>
        <h1>my projects</h1>
      </Fade>
      <Col className="project-container">
        <Row className="project-row">
          <Fade>
            <Col className="project">
              <Image src={grasshopperfund} className="project-img" onClick={handleShowGrasshopperfund} />
              <Modal show={showGrasshopperfund} onHide={handleCloseGrasshopperfund} scrollable={true} dialogClassName="project-modal">
								<Modal.Header closeButton><h2>Grasshopperfund</h2></Modal.Header>
								<Modal.Body>
                  <Fade top>
                    <p>Grasshopperfund is a Startup Marketplace and first funding platform for youth led startups, 
                      bridging the gap between idea and reality for youth ages 13-30 through immediate access to startup coaching & services, 
                      debt-free capital, and an entrepreneur network.</p>
                    <p><BiTrophy className="trophy" size={20} />2021 UCI Butterworth Product Development Competition 1st Place Winner</p>
                    <Row>
                      <Col>
                        <h4>CLIENT</h4>
                        <p>StartSmart</p>
                      </Col>
                      <Col>
                        <h4>PRODUCT</h4>
                        <p>Web App</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h4>ROLES</h4>
                        <p>Product Manager, Lead Frontend Developer, UI/UX Designer</p>
                      </Col>
                      <Col>
                        <h4>TIMELINE</h4>
                        <p>Oct 2020 - Present</p>
                      </Col>
                    </Row>
                    <h3>BUILT WITH</h3>
                    <div className="badge"><p>React</p></div>
                    <div className="badge"><p>GraphQL</p></div>
                    <div className="badge"><p>REST</p></div>
                    <div className="badge"><p>Django</p></div>
                    <div className="badge"><p>PostgreSQL</p></div>
                    <div className="badge"><p>Figma</p></div>
                    <div className="badge"><p>Bootstrap</p></div>
                    <div className="badge"><p>AWS</p></div>
                    <Button className="visit-site-btn" href="https://grasshopperfund.com/" rel="noreferrer" target="_blank">VISIT SITE</Button>
                    <Button className="secondary-btn" href="https://innovation.uci.edu/2021/03/uci-startup-makes-semi-finals-at-blackstone-launchpad-pitch-competition/" rel="noreferrer" target="_blank">READ ARTICLE</Button>
                  </Fade>
                </Modal.Body>
							</Modal>
            </Col>
            <Col className="project">
              <Image src={dfs_ias} className="project-img" onClick={handleShowDFSIAS} />
              <Modal show={showDFSIAS} onHide={handleCloseDFSIAS} scrollable={true} dialogClassName="project-modal">
								<Modal.Header closeButton><h2>Dreams for Schools Instructor Assignment Sorter</h2></Modal.Header>
								<Modal.Body>
                  <Fade top>
                    <p>The Instructor Assignment Sorter aims to assist DFS program directors by providing an optimal way for them to automatically 
                      sort the instructors into their preferred program using a sorting algorithm while also supporting manual fine-tune adjustment. 
                      The application also warehouses all data regarding seasons, schools, programs, and instructors.</p>
                    <Row>
                      <Col>
                        <h4>CLIENT</h4>
                        <p>Dreams for Schools</p>
                      </Col>
                      <Col>
                        <h4>PRODUCT</h4>
                        <p>Web App</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h4>ROLES</h4>
                        <p>UI/UX Designer, Software Developer</p>
                      </Col>
                      <Col>
                        <h4>TIMELINE</h4>
                        <p>Jan 2021 - Jun 2021</p>
                      </Col>
                    </Row>
                    <h3>BUILT WITH</h3>
                    <div className="badge"><p>React</p></div>
                    <div className="badge"><p>MySQL</p></div>
                    <div className="badge"><p>Express</p></div>
                    <div className="badge"><p>Node.js</p></div>
                    <div className="badge"><p>Firebase</p></div>
                    <div className="badge"><p>Figma</p></div>
                    <div className="badge"><p>Bootstrap</p></div>
                    <Button className="visit-site-btn" href="https://drive.google.com/file/d/17-RU8pIZirdjOSQ6bpYtekCQBNaAhXJL/view" rel="noreferrer" target="_blank">WATCH VIDEO</Button>
                  </Fade>
                </Modal.Body>
							</Modal>
            </Col>
          </Fade>
        </Row>
        <Row className="project-row">
          <Fade>
            <Col className="project">
              <Image src={peter_portal} className="project-img" onClick={handleShowPP} />
              <Modal show={showPP} onHide={handleClosePP} scrollable={true} dialogClassName="project-modal">
								<Modal.Header closeButton><h2>PeterPortal</h2></Modal.Header>
								<Modal.Body>
                  <Fade top>
                    <p>PeterPortal is the one-stop-shop for course discovery at UC Irvine. It consolidates public data from official UCI 
                      sources to aid students when planning their course schedule. Peter’s Roadmap is an interactive tool within PeterPortal
                      that helps students plan out courses they need to take for each quarter and school year.</p>
                    <Row>
                      <Col>
                        <h4>CLIENT</h4>
                        <p>ICSSC Projects</p>
                      </Col>
                      <Col>
                        <h4>PRODUCT</h4>
                        <p>Web App</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h4>ROLES</h4>
                        <p>Project Lead, Frontend Developer, UI/UX Designer</p>
                      </Col>
                      <Col>
                        <h4>TIMELINE</h4>
                        <p>Mar 2020 - Jun 2021</p>
                      </Col>
                    </Row>
                    <h3>BUILT WITH</h3>
                    <div>
                      <div className="badge"><p>React</p></div>
                      <div className="badge"><p>GraphQL</p></div>
                      <div className="badge"><p>ExpressJS</p></div>
                      <div className="badge"><p>MongoDB</p></div>
                      <div className="badge"><p>ElasticSearch</p></div>
                      <div className="badge"><p>TypeScript</p></div>
                      <div className="badge"><p>PeterPortal API</p></div>
                    </div>
                    <Button className="visit-site-btn" href="https://peterportal-client.herokuapp.com/" rel="noreferrer" target="_blank">VISIT SITE</Button>
                    <Button className="secondary-btn" href="https://icsscprojects.medium.com/peters-roadmap-peterportal-s-4-year-course-planner-64072e1adfb5" rel="noreferrer" target="_blank">READ ARTICLE</Button>
                  </Fade>
                </Modal.Body>
							</Modal>
            </Col>
            <Col className="project">
              <Image src={trishaprile} className="project-img" onClick={handleShowTrishaprile} />
              <Modal show={showTrishaprile} onHide={handleCloseTrishaprile} scrollable={true} dialogClassName="project-modal">
								<Modal.Header closeButton><h2>trishaprile</h2></Modal.Header>
								<Modal.Body>
                  <Fade top>
                    <p>My personal portfolio website!</p>
                    <Row>
                      <Col>
                        <h4>CLIENT</h4>
                        <p>Myself</p>
                      </Col>
                      <Col>
                        <h4>PRODUCT</h4>
                        <p>Web App</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h4>ROLES</h4>
                        <p>Sole Developer, Designer</p>
                      </Col>
                      <Col>
                        <h4>TIMELINE</h4>
                        <p>Oct 2020 - Present</p>
                      </Col>
                    </Row>
                    <h3>BUILT WITH</h3>
                    <div className="badge"><p>React</p></div>
                    <div className="badge"><p>Bootstrap</p></div>
                    <div className="badge"><p>Sass</p></div>
                    <div className="badge"><p>Figma</p></div>
                    <Button className="visit-site-btn" href="/">VISIT SITE</Button>
                    <Button className="secondary-btn" href="https://github.com/trishaprile/trishaprile.github.io" rel="noreferrer" target="_blank">VIEW REPO</Button>
                  </Fade>
								</Modal.Body>
							</Modal>
            </Col>
          </Fade>
        </Row>
        <Row className="project-row">
          <Fade>
            <Col className="project">
              <Image src={jam_for_change} className="project-img" onClick={handleShowJamForChange} />
              <Modal show={showJamForChange} onHide={handleCloseJamForChange} scrollable={true} dialogClassName="project-modal">
								<Modal.Header closeButton><h2>Jam for Change</h2></Modal.Header>
								<Modal.Body>
                  <Fade top>
                    <p>ICS Student Council's Jam for Change is a five day long development competition where teams work together to create applications that promote social good.</p>
                    <Row>
                      <Col>
                        <h4>CLIENT</h4>
                        <p>ICS Student Council</p>
                      </Col>
                      <Col>
                        <h4>PRODUCT</h4>
                        <p>Web App</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h4>ROLES</h4>
                        <p>Sole Developer, Designer</p>
                      </Col>
                      <Col>
                        <h4>TIMELINE</h4>
                        <p>Jan 2021 - Feb 2021</p>
                      </Col>
                    </Row>
                    <h3>BUILT WITH</h3>
                    <div className="badge"><p>React</p></div>
                    <Button className="visit-site-btn" href="https://www.icssc-jamforchange.com/" rel="noreferrer" target="_blank">VISIT SITE</Button>
                    <Button className="secondary-btn" href="https://github.com/trishaprile/jam-for-change-2021" rel="noreferrer" target="_blank">VIEW REPO</Button>
                  </Fade>
                </Modal.Body>
							</Modal>
            </Col>
            <Col className="project">
              <Image src={covidulator} className="project-img" onClick={handleShowCovidulator} />
              <Modal show={showCovidulator} onHide={handleCloseCovidulator} scrollable={true} dialogClassName="project-modal">
								<Modal.Header closeButton><h2>Covidulator</h2></Modal.Header>
								<Modal.Body>
                  <Fade top>
                    <p>Covidulator is a web app that calculates the impact of one's actions in regards to preventing the spread of COVID-19.
                      Inspired by the Carbon Footprint Calculator, the app aims to provide a way for people to evaluate how well they are performing in face of the pandemic
                      and take steps to reduce the spread.</p>
                    <p><BiTrophy className="trophy" size={20} />2021 Jam for Change 2nd Place Winner</p>
                    <Row>
                      <Col>
                        <h4>CLIENT</h4>
                        <p>Jam for Change 2021</p>
                      </Col>
                      <Col>
                        <h4>PRODUCT</h4>
                        <p>Web App</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h4>ROLES</h4>
                        <p>Project Manager, Designer, Developer</p>
                      </Col>
                      <Col>
                        <h4>TIMELINE</h4>
                        <p>Feb 2021 - Feb 2021</p>
                      </Col>
                    </Row>
                    <h3>BUILT WITH</h3>
                    <div className="badge"><p>React</p></div>
                    <Button className="visit-site-btn" href="https://nmpham2.github.io/covidulator/#/" rel="noreferrer" target="_blank">VISIT SITE</Button>
                    <Button className="secondary-btn" href="https://github.com/trishaprile/covidulator" rel="noreferrer" target="_blank">VIEW REPO</Button>
                  </Fade>
                </Modal.Body>
							</Modal>
            </Col>
          </Fade>
        </Row>
      </Col>
    </Element>
  );
}
export default Projects;