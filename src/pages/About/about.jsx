import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../images/profile/profile-pic(3).png";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3 headingTop">ABOUT ME</h1>
        <Container style={{width:"85%"}}>
          <Row className="pt-3 pb-5 ">
            <Col xs={12} md={6}>
              <Row className=" mb-4 mr-2 ml-2 ">
                <Image
                  className="profile "
                  alt="profile"
                  src={Profile}
                  roundedCircle
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className="justify-content-center p-3 my-details rounded">
              Meticulous Full Stack Web Developer dedicated to developing clean and scalable code. <br/>
              <br/>
              Passionate about creating the wonderful digital and overall great user experience.<br/>
              <br/> Effective Communicator and a learning enthusiast with a proactive attitude ready to take up tasks with a commitment to professionalism.
                <br /> 
                <br/>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1nNVW4YIuxQoK1FqxSXmrDOX0uYO_StI7/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline-light">Resume</Button>{' '}
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
