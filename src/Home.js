// import React from "react";
import self from "./images/profile_img.png"
// import linkedin from './images/linkedin.png'
// import github from './images/github.png'
// import dev from './images/dev.png'
import paint from './images/paint.png'
import coding from './images/coding.png'

// function Home() {
//   return (
//     <div className="container">
//       <div className="row justify-content-center home-container">
//         <div className="col-md-5">
//           <div className="img-wrapper">
//             <img className="profile-image" src={self} alt="profile-img" id="profile-img"></img>
//           </div>
//           {/* <img className="profile-image"  src={self} alt="profile-img" id="profile-img"></img> */}
//           <div id="intro">
//             {/* src={require("./images/profile_img.png")} */}
//             <br></br>
//             <h1>Hey, I'm Melissa</h1>
//             <br></br>
//             <div>
//             <img className="values" src={coding} />
//             <h3>Software Engineer </h3>
//             <h3>Visual Artist</h3>
//             <img className="values" src={paint}></img>
//             </div>
//             <div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   )
// }
// export default Home;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "./images/profile_img.png";
import computerIcon from "./images/computer-plain.jpg"
import './App.css';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingTop: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img">
                  <img
                    src={computerIcon}
                    alt="home pic"
                    className="img-fluid"
                    style={{ maxHeight: "150px" }} />
                </span>
              </h1>
              <h1 className="heading-name">
                I'm <strong className="main-name">Melissa Guachun</strong>
              </h1>
              <h4>Software Engineer / Visual Artist</h4>
            </Col>
            <Col>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "275px", padding: "20px" }}
              />
            </Col>
          </Row>
      </Container>
    </section>
  );
}

export default Home;
