import React from "react";
import Projects from "./Projects";
import "./App.css";
function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <a className="navbar-brand" href="#">
        Mel Guachun
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
