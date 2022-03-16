import React from "react";
import GallerySpace from "./images/GallerySpace.png";
import TicketTracker from "./images/TicketTracker.png";
import Wishlist from "./images/Wishlist.png";
import Ghibli from "./images/Ghibli.png";
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import dev from './images/dev.png'



function Projects() {
    return(
        <div id="projects" className="" >
         <h1 className="background-none">Projects</h1>
        <div className="row project-title">

          {/* <h6>Here are a few examples of my work.</h6> */}
        </div>
  
        <div className="row ">
          <div className="col-md-12 project-container justify-content-center">
            <div className="card border-rad project-card" style={{ width: "35rem", height: "40rem"}}>
              <div className="image-container">
                <img src={Ghibli} className=" border-rad card-img-top project-img" alt="..." />
              </div>
              <div className="card-body border-rad background-white">
                <h5 className="card-title background-white">Studio Ghibli Collection</h5>
                <h6 className="card-subtitle mb-2 text-muted background-white">
                  React, Bootstrap, CSS, NPM, Async Fetch, Public API
                </h6>
                <p className="card-text background-white">
                    Studio Ghibli Collection is a centralized hub for exploring and discovering 
                    the filmography of Studio Ghibli. Users can click on a given movie title and find 
                  specific information on their movie of choice. This frontend application was created with 
                  React.js and fetches information for an API. 
                </p>
                <a
                  href="https://mguachun.github.io/ghibli-fetch/"
                  className="card-link background-white"
                  target="_blank"
                >
                  <img src={github} className="project-links"/>
                </a>
              </div>
            </div>
  
            
            <div className="card project-card border-rad" style={{ width: "35rem", height: "40rem" }}>
              <div className="image-container">
                <img
                  src={TicketTracker}
                  className="border-rad card-img-top project-img"
                  alt="..."
                />
              </div>
              <div className="card-body border-rad background-white">
                <h5 className="card-title background-white">Ticket Tracker</h5>
                <h6 className="card-subtitle mb-2 text-muted background-white">
                  React.js, Redux, Ruby on Rails, Bootstrap, CSS, NPM
                </h6>
                <p className="card-text background-white">
                  Inspired by ticket collectors living in a digital age. Users can log their 
                  concert or live show ticket information such as the artist, venue, date, and year. Users
                  can also log comments about the concert to keep all your memories 
                  in one place. This application is developed with a React.js frontend, Redux for state management, 
                   and Ruby on Rails/SQLite back-end.
                </p>
                <a
                  href="https://github.com/mguachun/concert-api-backend.git"
                  className="card-link background-white"
                  target="_blank"
                >
                  <img src={github} className="project-links"/>
                </a>
              </div>
            </div>
  
            <div className="card project-card border-rad" style={{ width: "35rem", height: "40rem" }}>
              <div className="image-container">
                <img
                  src={Wishlist}
                  className="border-rad card-img-top project-img"
                  alt="..."
                />
              </div>
              <div className="card-body border-rad background-white">
                <h5 className="card-title background-white">My Record Store Wishlist</h5>
                <h6 className="card-subtitle mb-2 text-muted background-white">
                  JavaScript, CSS, Bootstrap, HTML, Ruby on Rails
                </h6>
                <p className="card-text background-white">
                  Inspired by "Record Store Day", this app will never let you forget the albums you're on the 
                  lookout for. Users can compile a list of albums with specifications for future purchase and filter 
                  through them by genre. Utilized self made RESTful API to store and render albums and artist information. This 
                  app is a Single Page Application using vanilla JavaScript, HTML, and CSS for the frontend
                  and Ruby on Rails backend. 

                </p>
                 
                <a
                  href="https://github.com/mguachun/record_day_wishlist"
                  className="card-link background-white"
                  target="_blank"
                >
                  <img src={github} className="project-links"/>
                </a>
              </div>
            </div>

            <div className="card project-card border-rad" style={{ width: "35rem", height: "40rem" }}>
              <div className="image-container">
                <img
                  src={GallerySpace}
                  className="border-rad card-img-top project-img"
                  alt="..."
                />
              </div>
              <div className="card-body border-rad background-white">
                <h5 className="card-title background-white">Gallery/Space</h5>
                <h6 className="card-subtitle mb-2 text-muted background-white">
                  Sinatra, Ruby on Rails, Active Record, BCrypt, Omniauth, Bootstrap, CSS
                </h6>
                <p className="card-text background-white">
                  Ever dreamed of having your own art gallery? This app is made for artists and art enthusiasts alike.
                    Users can log in, create their collection by logging their favorie works out art, and save them to their profile.
                    This full-stack application was created with Sinatra and a Ruby on Rails/Active Record backend with RESTFUL routes. Also featuring BCrypt 
                    library to secure user passwords, and sessions and cookies to store user authentication.
                </p>
                <a
                  href="https://github.com/mguachun/gallery-space.git"
                  className="card-link background-white"
                  target="_blank"
                >
                  <img src={github} className="project-links"/>
                </a>
               
              </div>
            </div>
  
          </div>
        </div>
      </div>
    )
}
export default Projects;