import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./navbar.styles.css"
const MyNavbar = () => {
    return (
        <>
          <Navbar collapseOnSelect fixed="top" expand="md"  variant="dark"  className="animate-navbar nav-theme justify-content-between">
  <Navbar.Brand href="#home" className="heading">{"<AniketPaygude/>"}</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto" >
      <Nav.Link style={{color:"white"}} href="#home" className="subheading">Home</Nav.Link>
      <Nav.Link style={{color:"white"}} href="#about" className="subheading">About</Nav.Link>
      <Nav.Link style={{color:"white"}} href="#skills" className="subheading">Skills</Nav.Link>
      <Nav.Link style={{color:"white"}} href="#projects" className="subheading">Projects</Nav.Link>
      <Nav.Link style={{color:"white"}} href="#contact" className="subheading">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>  
        </>
    )
}

export default MyNavbar
