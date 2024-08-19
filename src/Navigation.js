import React from "react";
import Projects from './Projects';
// import Nav from 'react-bootstrap/Nav';
// import { Link } from "react-scroll";
import './App.css';
function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Mel Guachun</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#skills">Skills</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
          {/* <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
//     <div id="nav">
//       <div className="nav-left">
//         <p className="nav-name">Melissa Guachun
//           <img src={require("./images/computer-plain.jpg")} alt="logo" id="logo" />
//         </p>
//       </div>
//       <div className="nav-right">
//       <Link className="nav-button" to="about-blurb" spy={true} smooth={false}>
//           About
//         </Link>
   
//         <Link className="nav-button" to="skills" spy={true} smooth={false}>
//           Skills
//         </Link>

//         <Link className="nav-button" to="projects" spy={true} smooth={false}>
//           Projects
//         </Link>

//         <Link className="nav-button" to="contact" spy={true} smooth={false}>
//           Contact
//         </Link>

//         <a className="nav-button" href="https://www.melguachunart.com/" spy={true} smooth={false}>
//           Art
//         </a>
//         </div>
//       </div>
     
//       )
// }
//     export default Navigation
