import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
//import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${(props) => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
      margin-bottom: 50px;
    }
  }
`;

const Title = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hello, I am
          <br />
          <span>
            <strong>Aniket Paygude</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Full-Stack Web Developer", "Learner", "Coder"],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
        {/* <Jumbotron className="contact-jumbotron"> */}
        <div className="LineHeight">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            
            <div className="m-2">
              <a
                href="mailto:paygudeaniket12@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-danger"
                  title="Gamil.com"
                >
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://github.com/ani9145"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-light" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2 ">
              <a
                href="https://www.linkedin.com/in/aniket-paygude-97049721b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </div>
      {/* </Jumbotron> */}
      </div>
    </div>
  </MyTitleMessage>
);

export default Title;
