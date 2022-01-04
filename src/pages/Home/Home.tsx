import React from "react";
import "./home.css";
function Home() {
  function hover() {
    // document.body.style.--full-stack-font-H1-axis-weight
    console.log("hola");
  }
  return (
    <div className="menu">
      <div onMouseOver={hover} className="FullStackDeveloper">
        <h1 className="fullStack">FULLSTACK </h1>
        <h1 className="fullStack">DEVELOPER </h1>
      </div>
      <div className="motionGraphics">
        <h1>MOTION</h1>
        <h1>GRAPHICS </h1>
        <h1>DESIGNER </h1>
      </div>
      <div className="me">
        <h1>ABOUT ME </h1>
      </div>
      <div className="contact">
        <h1>CONTACT </h1>
      </div>
    </div>
  );
}
export default Home;
