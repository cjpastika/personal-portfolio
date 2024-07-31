import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/react tic tac toe.png";
import projImg2 from "../assets/img/react tic tac toe code.png";
import projImg3 from "../assets/img/react tic tac toe code 2.png";
import projImg4 from "../assets/img/snake game.png";
import projImg5 from "../assets/img/snake game 2.png";
import projImg6 from "../assets/img/snake game code.png";
import projImg7 from "../assets/img/MPDX current.png";
import projImg8 from "../assets/img/MPDX old.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { AlignCenter, Display } from "react-bootstrap-icons";

export const Projects = () => {

  const firstProjects = [
    {
      title: "Cru MPDX",
      description: "Current Version",
      imgUrl: projImg7,
    },
    {
      title: "Cru MPDX",
      description: "Old Version",
      imgUrl: projImg8,
    },
  ]

  const secondProjects = [
    {
      title: "Python Snake Game",
      description: "Start Screen",
      imgUrl: projImg4,
    },
    {
      title: "Python Snake Game",
      description: "Game Screen",
      imgUrl: projImg5,
    },
    {
      title: "Python Snake Game",
      description: "Python Code",
      imgUrl: projImg6,
    },
  ]

  const thirdProjects = [
    {
      title: "React Tic-Tac-Toe",
      description: "Game Screen",
      imgUrl: projImg1,
    },
    {
      title: "React Tic-Tac-Toe",
      description: "JavaScript Code",
      imgUrl: projImg2,
    },
    {
      title: "React Tic-Tac-Toe",
      description: "CSS Code",
      imgUrl: projImg3,
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some various projects that I have worked on in the past!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Cru MPDX</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Snake Game</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">React Tic-Tac-Toe</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>This is an internal tool used by the company Cru. I worked on several pages as the organization transitioned from an Angular frontend to a React. I used various technologies including: React, NodeJS, GraphQL, Apollo, Yup, and Formik</p>
                        <Row>
                          {
                            firstProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>This is a snake game that I made using the pygame library. It has a integrated game loop with bounds and collision detection.</p>
                      <Row>
                        {
                          secondProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>My first React project was a simple version of Tic-Tac-Toe. It uses 3 arrays to keep track of the grid and minimal CSS styling</p>
                        <Row>
                          {
                            thirdProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
