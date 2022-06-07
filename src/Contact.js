import linkedin from './images/linkedin.png'
import github from './images/github.png'
import dev from './images/dev.png'
import email from './images/email.png'
import './App.css';


function Contact() {
    return (
 
      <div className="contact-container">
        {/* col-md-12  */}
        <div className="inTouch">
        <h1>Get in Touch</h1>
        <p>I'm currently looking for new opportunities. Whether you have a 
          question or just want to say hi, my inbox is open!</p>
          <a href="mailto:1212malka@gmail.com"><img className="contactEmail" src={email}></img></a>
        </div>


        <a
            href="https://www.linkedin.com/in/melissa-guachun/"
            // target="_blank"
            className="background-none"
          >
        <img src={linkedin} alt="" className="contact-icon" />
        </a>
        <a
            href="https://github.com/mguachun"
            // target="_blank"
            className="background-none"
          >
        <img src={github} alt="" className="contact-icon" />
        </a>

        <a
            href="https://dev.to/melguachun"
            // target="_blank"
            className="background-none"
          >
        <img src={dev} alt="" className="contact-icon" />
        </a>

        <div>
          Created by Melissa Guachun 
        </div>

      </div>
    
    );
  }
  
  export default Contact;