import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import "./skills.styles.css";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoNpm } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
// import { SiRedux } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
const Skills = () => {
  return (
    <>
    <div id="skills">
    <h1 className="pt-3 text-center font-details pb-3 headingTop">TECH STACK</h1>
    <div class="flex-container">
  <div class="flex-item-left">
    <AiFillHtml5 size={98}  className="top-react-icons"/>
    <p style={{color:"#ffffff",fontSize:"25px",textAlign:"center",paddingLeft:"10px",paddingRight:"10px",paddingTop:"8px"}}>HTML5</p>
    </div>
    <div class="flex-item-left">
    <FaCss3Alt  size={91} className= "top-react-icons"/>
    <p style={{color:"#ffffff",fontSize:"25px",textAlign:"center",paddingLeft:"10px",paddingRight:"10px",paddingTop:"12px"}}>CSS3</p>
    </div>
    <div class="flex-item-left">
    <IoLogoJavascript  size={88} className= "top-react-icons"/>
    <p style={{color:"#ffffff",fontSize:"25px",textAlign:"center",paddingLeft:"10px",paddingRight:"10px",paddingTop:"12px"}}>Javascript</p>
    </div>
    <div class="flex-item-left">
    <RiReactjsLine  size={100} className= "top-react-icons"/>
    <p style={{color:"#ffffff",fontSize:"25px",textAlign:"center",paddingLeft:"10px",paddingRight:"10px",paddingTop:"7px"}}>React JS</p>
    </div>
    <div class="flex-item-left">
    <IoLogoNpm  size={96} className= "top-react-icons"/>
    <p style={{color:"#ffffff",fontSize:"25px",textAlign:"center",paddingLeft:"10px",paddingRight:"10px",paddingTop:"5px"}}>N P M </p>
    </div>
    <div class="flex-item-left">
    <IoLogoNodejs  size={92} className= "top-react-icons"/>
    <p style={{color:"#ffffff",fontSize:"25px",textAlign:"center",paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px"}}>Node.js</p>
    </div>
    <div class="flex-item-left">
    <SiMongodb  size={92} className= "top-react-icons"/>
    <p style={{color:"#ffffff",fontSize:"25px",textAlign:"center",paddingLeft:"10px",paddingRight:"10px",paddingTop:"12px"}}>MongoDB</p>
    </div>
</div>
<h1 className="pt-3 text-center font-details pb-3 headingTop">Tool</h1>
<div class="flex-container">
  <div class="flex-item-left">
    {/* < size={98}  className="top-react-icons"/> */}
    <img src="https://cdn-icons-png.flaticon.com/128/906/906324.png" size={92} className= "top-react-icons"  alt=""/>
    <p style={{color:"#ffffff",fontSize:"25px",textAlign:"center",paddingLeft:"10px",paddingRight:"10px",paddingTop:"8px"}}>VS code</p>
    </div>
    <div class="flex-item-left">
    {/* <FaCss3Alt  size={91} className= "top-react-icons"/> */}
    <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/70/000000/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" alt="" size={92} className= "POSTMAN" />
    <p style={{color:"#ffffff",fontSize:"25px",textAlign:"center",paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px"}}>Postman</p>
    </div>
    <div class="flex-item-left">
    {/* <IoLogoJavascript  size={88} className= "top-react-icons"/> */}
    <img src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt=""  size={92} className= "top-react-icons"/>
    <p style={{color:"#ffffff",fontSize:"25px",textAlign:"center",paddingLeft:"10px",paddingRight:"10px",paddingTop:"12px"}}>GitHub</p>
    </div>
</div>
</div>
    </>
  );
};

export default Skills;
