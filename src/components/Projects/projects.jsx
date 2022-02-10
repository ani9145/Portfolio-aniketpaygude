import React from "react";

import Button from "react-bootstrap/Button";
import sample from "../../images/projects/Screenshot12.png";
import sample1 from "../../images/projects/Screenshot13.png";
// import sample2 from "../../images/projects/dineout.mp4";
// import sample3 from "../../images/projects/livechat.mp4";
import "./projects.styles.css";

const TimeLine = () => {
  return (
    <>
      <h1 className=" text-center font-details headingTop1">PROJECTS</h1><br/>
      <div className="container1" id="projects">
        <div className="timeline">
          <ul>
            <li>
              <div className="timeline-content">
                <h1>FOREST ESSENTIALS CLONE</h1>
                <div style={{ width: "fit-content" }}>
                  {/* <video className="videoTag" autoPlay loop muted controls> */}
                    <img className="videoTag" alt="Internshala" src={sample} type="Image/png" />
                  {/* </video> */}
                </div>
                <p>
                The Forest Essentials website which is an e-commerce website 
                  dealing with the sale of Luxurious Ayurveda Products.
                </p>
                <div>
                  <a
                    href="https://github.com/rahulkumarmbd/forestessential_clone.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-light">
                      Source Code
                    </Button>
                    
                  </a>
                  <a
                    href="https://awesome-joliot-5b2717.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-light">
                      Live Demo
                    </Button>
                    
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-content">
                <h1>POTTREYBARN CLONE</h1>
                <div style={{ width: "fit-content" }}>
                  {/* <video className="videoTag" autoPlay loop muted controls> */}
                  <img className="videoTag" alt="Nutrify" src={sample1} type="Image/png" />
                  {/* </video> */}
                </div>
                <p>
                The Pottery Barn website which is an E-commerce website where one can
                 purchase furniture, home decoratives etc.
                </p>
                <div>
                  <a
                    href="https://github.com/mrBharatSingh/pottreybarn.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-light">
                      Source Code
                    </Button>
                  </a>
                  <a
                    href="https://potterybarn.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-light">
                      Live Demo
                    </Button>
                  </a>
                </div>
              </div>
            </li>
            {/* <li>
              <div className="timeline-content">
                <h1>GOOGLE MEET CLONE</h1>
                <div style={{ width: "fit-content" }}>
                  <video className="videoTag" autoPlay loop muted controls>
                    <source src={sample} type="video/mp4" />
                  </video>
                </div>
                <p>
                  Google Meet Clone is a simple one-one calling.It also got
                  couple of features like text messagging from one person to
                  another,screen sharing and simply calling functionality.This
                  was done by taking reference from youtube.
                </p>
                <div>
                  <a
                    href="https://github.com/GopiChandana/Google-Meet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-light">
                      Source Code
                    </Button>
                  </a>
                </div>
              </div>
            </li> */}
            {/* <li>
              <div className="timeline-content">
                <h1>LIVE CHAT</h1>
                <div style={{ width: "fit-content" }}>
                  <video className="videoTag" autoPlay loop muted controls>
                    <source src={sample3} type="video/mp4" />
                  </video>
                </div>
                <p>
                  A Live chat application where we can chat with our friends in
                  private rooms in real-time.
                </p>
                <div>
                  <a
                    href="https://github.com/GopiChandana/chat_application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-light">
                      Source Code
                    </Button>
                  </a>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </div><br/>
    </>
  );
};

export default TimeLine;
