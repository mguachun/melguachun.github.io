import React from "react";
import TicketTracker from "./images/Ticket_Tracker.png";
import Wishlist from "./images/Record_Wishlist.png";
import Stock from "./images/stock-highchart.png";
import ToDoList from "./images/ToDoList.png";
import github from "./images/github.png";
import deploy from "./images/deploy.png";
import Contact from "./Contact";

function Projects() {
  const projectData = [
    {
      title: "Stock Highchart",
      subtitle: "React.js, JavaScript, Vite, Highcharts",
      description:
        "Stock-Highcharts is an application that utilizes the Highcharts Library to track and display Apple (APPL) stock data. Users can interactively select properties and view the data on a line graph. React hooks and custom hooks manage state efficiently, and local storage ensures persistence.",
      image: Stock,
      githubLink: "https://github.com/mguachun/stock-highchart",
      deployLink: "https://mguachun.github.io/stock-highchart/",
    },
    {
      title: "Ticket Tracker",
      subtitle: "React.js, Redux, Ruby on Rails, Bootstrap",
      description:
        "Inspired by ticket collectors, users can log concert or live show ticket info, including artist, venue, date, and comments. Frontend is built with React.js, Redux for state management, and Ruby on Rails backend.",
      image: TicketTracker,
      githubLink: "https://github.com/mguachun/concert-api-backend.git",
      deployLink: null,
    },
    {
      title: "My Record Store Wishlist",
      subtitle: "JavaScript, CSS, Bootstrap, HTML, Ruby on Rails",
      description:
        "Inspired by 'Record Store Day', users can compile a wishlist of albums for future purchase and filter by genre. Uses a RESTful API with a vanilla JavaScript frontend and Ruby on Rails backend.",
      image: Wishlist,
      githubLink: "https://github.com/mguachun/record_day_wishlist",
      deployLink: null,
    },
    {
      title: "To Do List",
      subtitle: "Vite, React.js, Javascript, CSS, HTML, Local Storage, Bootstrap",
      description:
        "A simple, intuitive app for managing daily tasks. Users can add, edit, and delete tasks, with state management in React and persistence via local storage.",
      image: ToDoList,
      githubLink: "https://github.com/mguachun/To-Do-List-App",
      deployLink: "https://mguachun.github.io/To-Do-List-App/",
    },
  ];

  return (
    <div id="projects" className="projects container py-5">
      <h1 className="text-center mb-5">Projects</h1>

      <div className="row justify-content-center">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-4 d-flex mb-4"
          >
            <div className="card project-card border-rad w-100 h-100 d-flex flex-column">
              <img
                src={project.image}
                className="card-img-top img-fluid border-rad"
                alt={project.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {project.subtitle}
                </h6>
                <p className="card-text flex-grow-1">{project.description}</p>
                <div className="d-flex gap-3 mt-3">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <img
                      src={github}
                      className="project-links"
                      alt={`Github link for ${project.title}`}
                    />
                  </a>
                  {project.deployLink && (
                    <a
                      href={project.deployLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={deploy}
                        className="project-links"
                        alt={`Deployed version of ${project.title}`}
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Contact />
    </div>
  );
}

export default Projects;
