import React from "react";
import GallerySpace from "./images/GallerySpace.png";
import TicketTracker from "./images/Ticket_Tracker.png";
import Wishlist from "./images/Record_Wishlist.png";
import Stock from "./images/stock-highchart.png";
// import linkedin from './images/linkedin.png'
import github from './images/github.png';
// import dev from './images/dev.png'
import deploy from './images/deploy.png';
import Contact from './Contact';


function Projects() {

    return(
        <div id="projects" className="projects" >
         <h1 className="background-none">Projects</h1>
        {/* <div className="row project-title">
        </div>
   */}
        <div className="row">
          <div className="col-md-12 project-container justify-content-center">
            <div className="card border-rad project-card" style={{ width: "35rem", height: "40rem"}}>
              <div className="image-container">
                <img src={Stock} className=" border-rad card-img-top project-img" alt="..." />
              </div>
              <div className="card-body border-rad background-white">
                <h5 className="card-title background-white">Stock Highchart</h5>
                <h6 className="card-subtitle mb-2 text-muted background-white">
                  React.js, Javascript, Async Fetch, Public API, Vite, Highcharts
                </h6>
                <p className="card-text background-white">
                  Stock-Highcharts is an application that utilizes the Highcarts Library to track and display the properties of Apple (APPL) stock.
                  Historic stock data is fetched from an API call and maps the data according to stock's property. Features include a dropdown menu, where
                  a user is able to interactively select a property and view the stock data in a line graph. As well as a click and drag tooltip to track
                  the rise and fall of stock data at a specific point in time. React hooks and custom hooks are used to apply stateful logic to the functional components.  
                  The application is built with React.js, Javascript, Vite, and utilizes the Highcharts library to render the stock data.
                </p>
                <a
                  href="https://github.com/mguachun/stock-highchart"
                  className="card-link background-white"

                  // target="_blank"
                >
                  <img src={github} className="project-links"
                     alt="Github to Stock Highchart App"/>
                </a>
                
                <a
                  href="https://mguachun.github.io/stock-highchart/"
                  className="card-link background-white"

                  // target="_blank"
                >
                  <img src={deploy}  className="project-links"
                     alt="Deployed Stock Highchart App"/>
                </a>
                
               
                   
              </div>
            </div>
  
            
            <div className="card project-card border-rad" style={{ width: "35rem", height: "40rem" }}>
              <div className="image-container">
                <img
            
                  src={TicketTracker}
                  className="border-rad card-img-top project-img"
                  alt="Ticket Tracker app homepage"
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
                  // target="_blank"
                >
                  <img src={github} className="project-links"
                  alt="Github to Ticket Tracker"/>
                </a>
              </div>
            </div>
  
            <div className="card project-card border-rad" style={{ width: "35rem", height: "40rem" }}>
              <div className="image-container">
                <img
                  src={Wishlist}
                  className="border-rad card-img-top project-img"
                  alt="Record Day Wishlist homepage"
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
                  // target="_blank"
                >
                  <img src={github} className="project-links"
                     alt="Github to Record Day Wishlist"/>
                </a>
              </div>
            </div>

            <div className="card project-card border-rad" style={{ width: "35rem", height: "40rem" }}>
              <div className="image-container">
                <img
                  src={GallerySpace}
                  className="border-rad card-img-top project-img"
                  alt="Homepage of Gallery Space"
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
                  // target="_blank"
                >
                  <img src={github} className="project-links"
                  alt="Github to Gallery Space"/>
                </a>
              
              </div>
      
            </div>
            <Contact />
          </div>
        </div>
    
   
        </div>
    )
}
export default Projects;