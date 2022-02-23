import React from "react";
import { Link } from "react-scroll";
function Navbar() {
    return(
        <div id="nav" className="row nav-bar">
      <div className="col-sm-6 nav-left">
        <p className="nav-name">Melissa Guachun 
        <img href=""</p>
      </div>
      <div className="col-sm-6 nav-right">
        <Link className="nav-button" to="about" spy={true} smooth={false}>
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

        <Link
          className="home-button background-none"
          to="nav"
          spy={true}
          smooth={false}
        >
          
        </Link>
      </div>
    </div>

    )
}
export default Navbar;