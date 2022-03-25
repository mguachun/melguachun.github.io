import React from "react";
import self from "./images/profile_img.png"
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import dev from './images/dev.png'

function Home() {
    return(
 
        <div className="container">
          <div className="row justify-content-center home-container">
            <div className="col-md-5">
              <img className="profile-image"  src={self} alt="profile-img" id="profile-img"></img>
              <div id="intro">
              {/* src={require("./images/profile_img.png")} */}
                <br></br>
                <h1 > Hey, I'm Melissa </h1>
                <h4>Software Engineer, Visual Artist, Creative </h4>
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
            </div>
            </div>
          </div>
        </div>

    )
}
export default Home;