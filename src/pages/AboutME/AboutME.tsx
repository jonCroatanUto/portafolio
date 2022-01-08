import React, { useState, useEffect } from "react";
import "./aboutme.css";
import CardDescription from "../../components/CardDescription";
import { getAllSkills } from "../../api";

function AboutME() {
  const [display, setDisplay] = useState(false);
  const [keyword, setKeyWord] = useState("");
  useEffect(() => {
    getAllSkills().then((res) => console.log(res));
  }, []);

  const globalCSSvariables = document.body.style;
  function displayDescription(e: any) {
    setKeyWord(e.target.textContent);

    if (!display) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }
  function closeDescription() {
    setDisplay(false);
  }
  return (
    <>
      <div className="keyWordsBox">
        <div className="keyWords1">
          <h1
            onClick={(e) => displayDescription(e)}
            className="growth fontVariatonHover"
          >
            Growth
          </h1>
        </div>
        <div className="keyWords2">
          <h1
            onClick={(e) => displayDescription(e)}
            className="resarcher fontVariatonHover"
          >
            Researcher
          </h1>
          <h1
            onClick={(e) => displayDescription(e)}
            className="teamBuilding fontVariatonHover"
          >
            Team-building
          </h1>
        </div>
        <div className="keyWords3">
          <h1 className="comunication fontVariatonHover">Comunication</h1>
        </div>
        <div className="keyWords4">
          <h1
            onClick={(e) => displayDescription(e)}
            className="creativity fontVariatonHover"
          >
            Creativity
          </h1>
          <h1
            onClick={(e) => displayDescription(e)}
            className="selfLearning fontVariatonHover"
          >
            Self-learning
          </h1>
          <h1
            onClick={(e) => displayDescription(e)}
            className="activeListening fontVariatonHover"
          >
            Active-listening
          </h1>
        </div>
        <div className="keyWords5">
          <h1
            onClick={(e) => displayDescription(e)}
            className="SCRUM fontVariatonHover"
          >
            SCRUM
          </h1>
          <h1
            onClick={(e) => displayDescription(e)}
            className="github fontVariatonHover"
          >
            Github
          </h1>
          <h1
            onClick={(e) => displayDescription(e)}
            className="githubProjects fontVariatonHover"
          >
            Github projects
          </h1>
        </div>
        <div className="keyWords6">
          <h1
            onClick={(e) => displayDescription(e)}
            className="NPM fontVariatonHover"
          >
            NPM
          </h1>
          <h1
            onClick={(e) => displayDescription(e)}
            className="nodeJs fontVariatonHover"
          >
            Node.js
          </h1>
          <h1
            onClick={(e) => displayDescription(e)}
            className="reactJs fontVariatonHover"
          >
            React.js
          </h1>
          <h1
            onClick={(e) => displayDescription(e)}
            className="bootstrap fontVariatonHover"
          >
            Bootstrap
          </h1>
        </div>
        <div className="keyWords7">
          <h1
            onClick={(e) => displayDescription(e)}
            className="redux fontVariatonHover"
          >
            REDUX
          </h1>
          <h1
            onClick={(e) => displayDescription(e)}
            className="mongoDB fontVariatonHover"
          >
            MongoDB
          </h1>
          <h1
            onClick={(e) => displayDescription(e)}
            className="PHP fontVariatonHover"
          >
            PHP
          </h1>
          <h1
            onClick={(e) => displayDescription(e)}
            className="mySQL fontVariatonHover"
          >
            mySQL
          </h1>
        </div>
        <div className="keyWords8">
          <h1
            onClick={(e) => displayDescription(e)}
            className="expressJs fontVariatonHover"
          >
            Express.js
          </h1>
          <h1
            onClick={(e) => displayDescription(e)}
            className="netlify fontVariatonHover"
          >
            NETLIFY
          </h1>
        </div>
        <div className="keyWords9">
          <h1
            onClick={(e) => displayDescription(e)}
            className="heroku fontVariatonHover"
          >
            HEROKU
          </h1>
        </div>
      </div>
      {display ? (
        <>
          <div className="closerDiv" onClick={closeDescription}></div>
          <CardDescription keyword={keyword} />
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}
export default AboutME;
