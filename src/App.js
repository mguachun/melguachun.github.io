import React from 'react';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>

  );
}

export default App;
