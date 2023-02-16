import React from "react";
import { Link } from "react-router-dom";
import "./HomeProjects.css";
import ProjectCard from "./HomeProjectCard";

import { Container, Row, Col } from "react-bootstrap";

import amazonp from "../../Assets/Projects/amazon-app.png";
import chatp from "../../Assets/Projects/chat-app.png";
import bankp from "../../Assets/Projects/bank-app.png";
import feedbackp from "../../Assets/Projects/feedback-app.png";

function Projects() {
  const projectlist = [
    {
      title: "Amazon-App",
      imgUrl: amazonp,
      demoUrl: "https://amazon-clone-app-ytbo.onrender.com/",
      codeUrl: "https://github.com/sanjeev662/Amazon-Clone-App",
      description:
        "This is a MERN project with functionality like login-logout by authentication add to cart items, remove from cart , responsiveness etc.",
      skills: "React, NodeJs, Authentication",
    },
    {
      title: "Chat-App",
      imgUrl: chatp,
      demoUrl: "https://clone-chat-app-5h0j.onrender.com",
      codeUrl: "https://github.com/sanjeev662/Clone-Chat-App",
      description:
        "It is Chat app beta version with basic functionality like Authorization, one to one and group chat using MERN stack and with the help of socket.IO .",
      skills: "React, NodeJs, socket.IO",
    },
    {
      title: "BankingSystem",
      imgUrl: bankp,
      demoUrl: "https://bankingsystemsanjeev.herokuapp.com/",
      codeUrl: "https://github.com/sanjeev662/BankingSystem",
      description:
        "This is full stack Bank Management System with basic functinality like create account, remove account, edit details and login authantication are used...",
      skills: "EJS, NodeJs, MongoDb",
    },
    { 
      title: "FeedbackSystem",
      imgUrl: feedbackp,
      demoUrl: "https://github.com/sanjeev662/StudentFeedbackManagementSystem",
      codeUrl: "https://github.com/sanjeev662/StudentFeedbackManagementSystem",
      description:
        "Two way sql based full stack feedback system where admin can login to add, remove and update the records of teachers and student can give feedback to the teacher by filling feedback form.",
      skills: "React,NodeJs,SQL,CRUD",
    }
  ];


  return (
    <div>
      <Container
        fluid
        className="project-section"
      >
        <Container>
          <Row>
            
            <Col
              md={12}
              className="project-description d-flex justify-content-start"
            >
              <div className="row">
                <div className="section-title padd-15">
                  <h2>Projects</h2>
                </div>
              </div>
            </Col>

            <Col md={12} className="mt-3">
              <Row className="g-4">
                {projectlist.map((element) => {
                  return (
                    <Col md={3}>
                      <ProjectCard
                        title={element.title}
                        imgUrl={element.imgUrl}
                        demoUrl={element.demoUrl}
                        codeUrl={element.codeUrl}
                        description={element.description}
                        skills={element.skills}
                      />

                      {/* here first title is for passing value as props and second
                            title for extracting value from given array data */}
                    </Col>
                  );
                })}
              </Row>
            </Col>


          </Row>
          </Container>
        <Row className="row" style={{ justifyContent:"center" , padding:"50px" }} >               
                  <Link to="/projects" className="btn" style={{ maxWidth:"87%" }}>View More..</Link>
        </Row>
        </Container>
    </div>
  );
}

export default Projects;
