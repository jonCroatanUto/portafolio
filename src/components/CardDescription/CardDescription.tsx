import React, { useState, useEffect } from "react";
import "./cardDescription.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

function CardDescription(prop: { keyword: string }) {
  const { keyword } = prop;
  const [text, setText] = useState("");
  function voteForSkill() {}
  useEffect(() => {
    switch (keyword) {
      case "Growth":
        setText(
          "I always grow in the face of a challenge. Because that  I learn a lot in short time periods, never surrender until I find an answer"
        );
        break;
      case "Researcher":
        setText(
          "As I said in 'growth', never surrender until found the answer. For that reason I search everywhere in order to solve problems by my self or to learn new technologies."
        );
        break;
      case "Team-building":
        setText(
          " I always get good feedback from the partners I work with, as they say that I bring good team feelings, have good technology problem solving and always want to help others, sharing what I learn searching problem solutions"
        );
        break;
      case "Comunication":
        setText(
          "I consider myself a good listener. I usually understand the perspective of the other and respond by being sensitive to it, also keeping my opinion in mind and shearing that in an assertive way. "
        );
        break;
      case "Creativity":
        setText(
          "I have an art & design background so , for me it is important to try to find results that make a difference in an aesthetic way, but also in an efficient and practical way."
        );
        break;
      case "Self-learning":
        setText(
          "As a researcher I alway  s like to found answers by myself, that made me learn a lot searching and trying, trial and error methodology. Also I have an obsessive curiosity, always want to know how everything works"
        );
        break;
      case "Active-listening":
        setText(
          "Is the most effective way to learn, as well as to build something more big than you.In a team it's fundamental to understand the perspective of the others different ways to work, also aport yours in order to contrast and grow up. "
        );
        break;
      case "SCRUM":
        setText(
          "I mainly follow this methodology in the projects I have worked on. I feel more participatory and stimulating than in one with too harsh a hierarchy. Active synchronization of problems with customer priorities makes the entire project more efficient in its demands."
        );
        break;
      case "Github":
        setText(
          "Github is an enormous platform to save a share projects, I don't know best way to work with teams remotely, as well as find other developers projects to learn from "
        );
        break;
      case "Github projects":
        setText(
          "It is a task manager, where you can link pull request to tasks. It is perfect to organize topics and not lose the reference of the point in which the project is located, also assign issues to different developers"
        );
        break;
      case "NPM":
        setText("I like to NPM");
        break;
      case "Node.js":
        setText(
          "I use to develop backends that mostly work with mongoDB database. "
        );
        break;
      case "React.js":
        setText(
          "Allways develop my frontEnd with this javascript framework ,specially because you can reuse a lot of code not just in the same project , also in others.  "
        );
        break;
      case "Bootstrap":
        setText(
          "It's really efficient way to create fabulous designs saving a lot of time and tons of code. It have spinners, different inputs types, icons, and more.."
        );
        break;
      case "REDUX":
        setText(
          "I just use to big applications. When it's necessary to manege a lot of data, as different users for example."
        );
        break;
      case "MongoDB":
        setText(
          "I usually work with this database connected to a node server using 'mongoose'. The combination of MongoDB, Express, React and Node is known as the MERN stack and the one I usually work with "
        );
        break;
      case " PHP":
        setText(
          "I have more experience working in javascript , but I also develop some projects with it, also with Laravel framework"
        );
        break;
      case "mySQL":
        setText(
          "A relational database. I work in a projects with it , and I hope to learn more about it in a future"
        );
        break;
      case "Express.js":
        setText(
          "A grate framework underlying Node.js. Allows to create routes, port connection, apply middleware..."
        );
        break;
      case "NETLIFY":
        setText("I use to deploy frontends");
        break;
      case "HEROKU":
        setText("I use to deploy backends");
        break;
    }
  }, []);
  return (
    <div className="cardDescription">
      {text}
      <button onClick={voteForSkill}>
        <FavoriteIcon />
      </button>
    </div>
  );
}
export default CardDescription;
