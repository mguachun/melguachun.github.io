import React from "react";

function Home() {
    return(
 
        <div className="container">
          <div className="row justify-content-center home-container">
            <div className="col-md-5">
              <img className="profile-image"  src={require("./images/IMG_3680.jpg")} alt="profile-img" id="profile-img"></img>
              <div id="intro">
                <br></br>
                <h1 > Hey, I'm Melissa </h1>
                <p>Software Engineer, Visual Artist, Creative </p> 
            </div>
            </div>
          </div>
        </div>

    )
}
export default Home;