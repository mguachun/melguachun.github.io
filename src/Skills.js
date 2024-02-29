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
      <br />
      <div className="row justify-content-center">
        <h1 className="col-md-12 skills-title">Technical Skills</h1>
        <div className="skill-icon-container">
          <img src={javascript} alt="javascript icon" className="skill-icon" />
          <p className="underline">Javascript</p>
        </div>
        <div className="skill-icon-container">
          <img src={react} alt="react icon" className="skill-icon" />
          <p className="underline">React.js</p>
        </div>
        <div className="skill-icon-container">
          <img src={ruby} alt="ruby icon" className="skill-icon" />
          <p className="underline">Ruby</p>
        </div>
        <div className="skill-icon-container">
          <img src={ror} alt="ruby on rails icon" className="skill-icon" />
          <p>Ruby on Rails</p>
        </div>
        <div className="skill-icon-container">
          <img src={html} alt="html icon" className="skill-icon" />
          <p>HTML</p>
        </div>
        <div className="skill-icon-container">
          <img src={css} alt="css icon" className="skill-icon" />
          <p>CSS</p>
        </div>
        <div className="skill-icon-container">
          <img src={bootstrap} alt="bootstrap icon" className="skill-icon" />
          <p>Bootstrap</p>
        </div>
        <div className="skill-icon-container">
          <img src={sql} alt="sqlite icon" className="skill-icon" />
          <p>SQLite</p>
        </div>
        <div className="skill-icon-container">
          <img src={git} alt="git icon" className="skill-icon" />
          <p>Git</p>
        </div>
        <div className="skill-icon-container">
          <img src={ps} alt="photoshop icon" className="skill-icon" />
          <p>Adobe Photoshop</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
