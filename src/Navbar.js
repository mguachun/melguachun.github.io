import React from "react";
// import { Link } from "react-scroll";
import {Nav} from 'react-bootstrap'
function Navbar() {
  return (
    <div id="nav">
     
      <Nav defaultActiveKey="/home" as="ul">
      <div className="title-container">
        <p className="nav-name">Melissa Guachun
          <img src={require("./images/computer-plain.jpg")} alt="logo" id="logo" />
        </p>
      </div>
        <Nav.Item as="li">
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/skills">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>

    </div>

  )
}
export default Navbar;