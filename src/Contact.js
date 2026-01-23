import React from "react";
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import dev from './images/dev.png';
import email from './images/email.png';
import paint from './images/paint.png';
import './App.css';

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <h1>Get in Touch</h1>
      <p>I'm currently looking for new opportunities.</p>
      <p>Whether you have a question or just want to say hi, my inbox is open!</p>

      {/* Email */}
      <a href="mailto:1212malka@gmail.com">
        <img src={email} alt="Email" className="contact-icon contactEmail" />
      </a>

      {/* Social Links */}
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/melissa-guachun/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="contact-icon" />
        </a>

        <a href="https://github.com/mguachun" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="contact-icon" />
        </a>

        <a href="https://dev.to/melguachun" target="_blank" rel="noopener noreferrer">
          <img src={dev} alt="Dev.to" className="contact-icon" />
        </a>

        <a href="https://www.instagram.com/melguachunart/?hl=en" target="_blank" rel="noopener noreferrer">
          <img src={paint} alt="Art/Instagram" className="contact-icon" />
        </a>
      </div>

      <div className="contact-footer">
        Created by Melissa Guachun 2026
      </div>
    </div>
  );
}

export default Contact;
