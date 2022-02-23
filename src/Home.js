import React from "react";
import computer from "./images/computer-plain.jpg"

function Home() {
    return(
        <div id="home" className="content">
        <div className="container">
          <div className="row justify-content-center home-container">
            <div className="col-md-5">
              <img className="profile-image" ></img>
              {/* src={pic} */}
            </div>
            <div className="col-md-5 justify-content-center">
              <div className="home-name">
                Hey, I'm Melissa <span><img  className="home-smiley"/></span>
                {/* src={smile} */}
              </div>
            
            </div>
          </div>
        </div>
      </div>
    )
}
export default Home;