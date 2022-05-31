import React from 'react';
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import Navigation from "./Navigation";
import Home from "./Home";

// import Resume from "./Resume";
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      {/* <Resume /> */}
      <Skills />
      <Projects />
      {/* <Contact /> */}


  
    </div>

  );
}

export default App;
