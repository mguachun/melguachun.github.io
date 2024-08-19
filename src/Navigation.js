import React from "react";
import Projects from './Projects';
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
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
