import React from "react";
// import { Link } from "react-scroll";
// import {Nav} from 'react-bootstrap'
import './App.css';
function Navigation() {
  return (
    <div id="nav">

      {/* <Nav defaultActiveKey="/home" as="ul"> */}
      <div className="nav-left">
        <p className="nav-name">Melissa Guachun
          <img src={require("./images/computer-plain.jpg")} alt="logo" id="logo" />
        </p>
      </div>
      {/* <div>
        <Nav>
          <Nav.Item as="li" className="nav-right">
            <Nav.Link href="/#about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/#skills" className="nav-right">Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/#projects" className="nav-right">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/#contact" className="nav-right">Contact</Nav.Link>
          </Nav.Item>
        </Nav> */}

      </div>

      )
}
    export default Navigation