import linkedin from './images/linkedin.png'
import github from './images/github.png'
import dev from './images/dev.png'
import './App.css';


function Contact() {
    return (
 
      <div className=" col-md-12 contact-container">
        <a
            href="https://www.linkedin.com/in/melissa-guachun/"
            target="_blank"
            className="background-none"
          >
        <img src={linkedin} alt="" className="contact-icon" />
        </a>
        <a
            href="https://github.com/mguachun"
            target="_blank"
            className="background-none"
          >
        <img src={github} alt="" className="contact-icon" />
        </a>

        <a
            href="https://dev.to/melguachun"
            target="_blank"
            className="background-none"
          >
        <img src={dev} alt="" className="contact-icon" />
        </a>

      </div>
    
    );
  }
  
  export default Contact;