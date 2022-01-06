import React from "react";
import "./aboutme.css";

function AboutME() {
  const globalCSSvariables = document.body.style;
  function hover(globalVariable: string, value: string) {
    globalCSSvariables.setProperty(globalVariable, value);
  }
  return (
    <div className="keyWordsBox">
      <div className="keyWords1">
        <h1
          onMouseOver={() => hover("--Growth-font-weight-value", "900")}
          onMouseOut={() => hover("--Growth-font-weight-value", "300")}
        >
          Growth
        </h1>
      </div>
      <div className="keyWords2">
        <h1
          onMouseOver={() => hover("--Resarcher-font-weight-value", "900")}
          onMouseOut={() => hover("--Resarcher-font-weight-value", "300")}
        >
          Resarcher
        </h1>
        <h1
          onMouseOver={() => hover("--Team-building-font-weight-value", "900")}
          onMouseOut={() => hover("--Team-building-font-weight-value", "100")}
        >
          Team-building
        </h1>
      </div>
      <div className="keyWords3">
        <h1
          onMouseOver={() => hover("--Comunication-font-weight-value", "900")}
          onMouseOut={() => hover("--Comunication-font-weight-value", "100")}
        >
          Comunication
        </h1>
      </div>
      <div className="keyWords4">
        <h1
          onMouseOver={() => hover("--Creativity-font-weight-value", "900")}
          onMouseOut={() => hover("--Creativity-font-weight-value", "100")}
        >
          Creativity
        </h1>
        <h1
          onMouseOver={() => hover("--Self-learning-font-weight-value", "900")}
          onMouseOut={() => hover("--Self-learning-font-weight-value", "100")}
        >
          Self-learning
        </h1>
        <h1
          onMouseOver={() =>
            hover("--Active-listening-font-weight-value", "900")
          }
          onMouseOut={() =>
            hover("--Active-listening-font-weight-value", "100")
          }
        >
          Active-listening
        </h1>
      </div>
      <div className="keyWords5">
        <h1
          onMouseOver={() => hover("--SCRUM-font-weight-value", "900")}
          onMouseOut={() => hover("--SCRUM-font-weight-value", "100")}
        >
          SCRUM
        </h1>
        <h1
          onMouseOver={() => hover(" --Github-font-weight-value", "900")}
          onMouseOut={() => hover(" --Github-font-weight-value", "100")}
        >
          Github
        </h1>
        <h1
          onMouseOver={() =>
            hover("--Github-projects-font-weight-value", "900")
          }
          onMouseOut={() => hover("--Github-projects-font-weight-value", "100")}
        >
          Github projects
        </h1>
      </div>
      <div className="keyWords6">
        <h1
          onMouseOver={() => hover("--NPM-font-weight-value", "900")}
          onMouseOut={() => hover("--NPM-font-weight-value", "100")}
        >
          NPM
        </h1>
        <h1
          onMouseOver={() => hover("--Node-font-weight-value", "900")}
          onMouseOut={() => hover("--Node-font-weight-value", "100")}
        >
          Node.js
        </h1>
        <h1
          onMouseOver={() => hover("--React-font-weight-value", "900")}
          onMouseOut={() => hover("--React-font-weight-value", "100")}
        >
          React.js
        </h1>
        <h1
          onMouseOver={() => hover("--Bootstrap-font-weight-value", "900")}
          onMouseOut={() => hover("--Bootstrap-font-weight-value", "100")}
        >
          Bootstrap
        </h1>
      </div>
      <div className="keyWords7">
        <h1
          onMouseOver={() => hover("--REDUX-font-weight-value", "900")}
          onMouseOut={() => hover("--REDUX-font-weight-value", "100")}
        >
          REDUX
        </h1>
        <h1
          onMouseOver={() => hover("-MongoDB-font-weight-value", "900")}
          onMouseOut={() => hover("--MongoDB-font-weight-value", "100")}
        >
          MongoDB
        </h1>
        <h1
          onMouseOver={() => hover("--PHP-font-weight-value", "900")}
          onMouseOut={() => hover("--PHP-font-weight-value", "100")}
        >
          PHP
        </h1>
        <h1
          onMouseOver={() => hover("--mySQL-font-weight-value", "900")}
          onMouseOut={() => hover("--mySQL-font-weight-value", "100")}
        >
          mySQL
        </h1>
      </div>
      <div className="keyWords8">
        <h1
          onMouseOver={() => hover("--Express-font-weight-value", "900")}
          onMouseOut={() => hover("--Express-font-weight-value", "100")}
        >
          Express.js
        </h1>
        <h1
          onMouseOver={() => hover("--NETLIFY-font-weight-value", "900")}
          onMouseOut={() => hover("--NETLIFY-font-weight-value", "100")}
        >
          NETLIFY
        </h1>
      </div>
      <div className="keyWords9">
        <h1
          onMouseOver={() => hover(" --HEROKU-font-weight-value", "900")}
          onMouseOut={() => hover(" --HEROKU-font-weight-value", "100")}
        >
          HEROKU
        </h1>
      </div>
    </div>
  );
}
export default AboutME;
