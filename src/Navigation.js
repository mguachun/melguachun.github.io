import React from "react";
import Projects from './Projects'
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-scroll";
// import { HashLink as Link } from 'react-router-hash-link';
import './App.css';
function Navigation() {
  return (
    <div id="nav">
      <div className="nav-left">
        <p className="nav-name">Melissa Guachun
          <img src={require("./images/computer-plain.jpg")} alt="logo" id="logo" />
        </p>
      </div>
      <div className="nav-right">
      <Link className="nav-button" to="about-blurb" spy={true} smooth={false}>
          About
        </Link>
   
        <Link className="nav-button" to="skills" spy={true} smooth={false}>
          Skills
        </Link>

        <Link className="nav-button" to="projects" spy={true} smooth={false}>
          Projects
        </Link>

        <Link className="nav-button" to="contact" spy={true} smooth={false}>
          Contact
        </Link>

        <a className="nav-button" href="https://www.melguachunart.com/" spy={true} smooth={false}>
          Art
        </a>
        </div>
      </div>
     
      )
}
    export default Navigation