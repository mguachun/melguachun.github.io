import React from "react";


function Home() {
    return(
        <div id="home" className="content">
        <div className="container">
          <div className="row justify-content-center home-container">
            <div className="col-md-5">
              <img className="profile-image"  src={require("./images/IMG_3680.jpg")} alt="profile-img" id="profile-img"></img>
              <div id="intro">
            <h1 > Hey, I'm Melissa </h1>
                <p>Software Engineer, Visual Artist ,Creative </p> 
            </div>
            <div className="col-md-5 justify-content-center">
              <div className="home-name">
                
            <img src={require("./images/computers.jpg")} id="computer"/>
           
              </div>
            
            </div>
            </div>
           
     
          
          </div>
        </div>
      </div>
    )
}
export default Home;