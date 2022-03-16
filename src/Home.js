import React from "react";
import self from "./images/profile_img.png"

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
            </div>
            </div>
          </div>
        </div>

    )
}
export default Home;