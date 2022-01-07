import React from "react";
import "./aboutme.css";

function AboutME() {
  const globalCSSvariables = document.body.style;

  return (
    <div className="keyWordsBox">
      <div className="keyWords1">
        <h1 className="growth fontVariatonHover">Growth</h1>
      </div>
      <div className="keyWords2">
        <h1 className="resarcher fontVariatonHover">Resarcher</h1>
        <h1 className="teamBuilding fontVariatonHover">Team-building</h1>
      </div>
      <div className="keyWords3">
        <h1 className="comunication fontVariatonHover">Comunication</h1>
      </div>
      <div className="keyWords4">
        <h1 className="creativity fontVariatonHover">Creativity</h1>
        <h1 className="selfLearning fontVariatonHover">Self-learning</h1>
        <h1 className="activeListening fontVariatonHover">Active-listening</h1>
      </div>
      <div className="keyWords5">
        <h1 className="SCRUM fontVariatonHover">SCRUM</h1>
        <h1 className="github fontVariatonHover">Github</h1>
        <h1 className="githubProjects fontVariatonHover">Github projects</h1>
      </div>
      <div className="keyWords6">
        <h1 className="NPM fontVariatonHover">NPM</h1>
        <h1 className="nodeJs fontVariatonHover">Node.js</h1>
        <h1 className="reactJs fontVariatonHover">React.js</h1>
        <h1 className="bootstrap fontVariatonHover">Bootstrap</h1>
      </div>
      <div className="keyWords7">
        <h1 className="redux fontVariatonHover">REDUX</h1>
        <h1 className="mongoDB fontVariatonHover">MongoDB</h1>
        <h1 className="PHP fontVariatonHover">PHP</h1>
        <h1 className="mySQL fontVariatonHover">mySQL</h1>
      </div>
      <div className="keyWords8">
        <h1 className="expressJs fontVariatonHover">Express.js</h1>
        <h1 className="netlify fontVariatonHover">NETLIFY</h1>
      </div>
      <div className="keyWords9">
        <h1 className="heroku fontVariatonHover">HEROKU</h1>
      </div>
    </div>
  );
}
export default AboutME;
