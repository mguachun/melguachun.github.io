import React from "react";
import self from "./images/profile_img.png"
// import linkedin from './images/linkedin.png'
// import github from './images/github.png'
// import dev from './images/dev.png'
import paint from './images/paint.png'
import coding from './images/coding.png'

function Home() {
  return (

    <div className="container">
      <div className="row justify-content-center home-container">
        <div className="col-md-5">
          <div className="img-wrapper">
            <img className="profile-image" src={self} alt="profile-img" id="profile-img"></img>
          </div>
          {/* <img className="profile-image"  src={self} alt="profile-img" id="profile-img"></img> */}
          <div id="intro">
            {/* src={require("./images/profile_img.png")} */}
            <br></br>
            <h1> Hey, I'm Melissa</h1>
            <br></br>
            <div>
            <img className="values" src={coding} />
            <h3>Software Engineer </h3>
          
            <h3>Visual Artist</h3>
            <img className="values" src={paint}></img>
            </div>
            {/* <div className="leftAdj">
            <img className="values" src={coding} />
            <h3>Software Engineer </h3>
  
       
            </div>
 
            <div className="rightAdj">
            <h3>Visual Artist</h3>
            <img className="values" src={paint}></img>

            </div> */}
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Home;