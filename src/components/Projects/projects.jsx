import React from "react";

import Button from "react-bootstrap/Button";
import sample from "../../images/projects/Screenshot12.png";
import sample1 from "../../images/projects/Screenshot13.png";
import sample2 from "../../images/projects/spotify-clone-2.0.png";

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
            <li>
              <div className="timeline-content">
                <h1>SPOTIFY RRACT CLONE</h1>
                <div style={{ width: "fit-content" }}>
                  {/* <video className="videoTag" autoPlay loop muted controls> */}
                  <img className="videoTag" alt="Nutrify" src={sample2} type="Image/png" />
                  {/* </video> */}
                </div>
                <p>
                Spotify clone using react and spotify-api. 
                Shows recently played and playlists in your account. 
                You can have 30 seconds of preview only as a limitation of spotify.
                </p>
                <div>
                  <a
                    href="https://github.com/yeti201/spotify-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-light">
                      Source Code
                    </Button>
                  </a>
                  <a
                    href="https://spotify-clone8.netlify.app"
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
          </ul>
        </div>
      </div><br/>
    </>
  );
};

export default TimeLine;
