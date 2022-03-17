import bootstrap from "./images/bootstrap.png";
import css from "./images/css.png";
import html from "./images/html.png";
import javascript from "./images/javascript.png";
import react from "./images/react.png";
import ruby from "./images/ruby.png";
import ror from "./images/ror.png";
import git from "./images/git.png";
import ps from "./images/photoshop.png";
import sql from "./images/sql.svg";

function Skills() {
  return (
    <div id="skills" className="">
      <div className="row justify-content-center">
        <div className="col-md-12 skills-container justify-content-center">
        <h1 className="col-md-12 skills-title">Technical Skills</h1>
          <div className="skill-icon-container">
            <img src={javascript} className="skill-icon" />
            <p className="underline">Javascript</p>
          </div>
          <div className="skill-icon-container">
            <img src={react} className="skill-icon" />
            <p className="underline">React</p>
          </div>
          <div className="skill-icon-container">
            <img src={ruby} className="skill-icon" />
            <p className="underline">Ruby</p>
          </div>
          <div className="skill-icon-container">
            <img src={ror} className="skill-icon" />
            <p>Ruby on Rails</p>
          </div>
          <div className="skill-icon-container">
            <img src={html} className="skill-icon" />
            <p>HTML</p>
          </div>
          <div className="skill-icon-container">
            <img src={css} className="skill-icon" />
            <p>CSS</p>
          </div>
          <div className="skill-icon-container">
            <img src={bootstrap} className="skill-icon" />
            <p>Bootstrap</p>
          </div>
          <div className="skill-icon-container">
            <img src={sql} className="skill-icon" />
            <p>SQLite</p>
          </div>
          <div className="skill-icon-container">
            <img src={git} className="skill-icon" />
            <p>Git</p>
          </div>
          <div className="skill-icon-container">
            <img src={ps} className="skill-icon" />
            <p>Adobe Photoshop</p>
          </div>

        </div>
     
      </div>

    </div>
  );
}

export default Skills;