import React from "react";
import "./homeMenu.css";

function HomeMenu() {
  let fullStackClass = "fullStack";
  function hover(globalVariable: string, value: string) {
    let fontWeigth = document.body.style;
    fontWeigth.setProperty(globalVariable, value);
    // fullStackClass = "FullStackDeveloperAnimation";
  }
  return (
    <div className="menu">
      <div
        onMouseOver={() => hover("--full-stack-font-H1-axis-weight", "700")}
        onMouseOut={() => hover("--full-stack-font-H1-axis-weight", "100")}
        className="FullStackDeveloper"
      >
        <h1>FULLSTACK </h1>
        <h1>DEVELOPER </h1>
      </div>
      <div
        onMouseOver={() =>
          hover("--animation-design-font-H1-axis-weight", "900")
        }
        onMouseOut={() =>
          hover("--animation-design-font-H1-axis-weight", "100")
        }
        className="motionGraphics"
      >
        <h1>MOTION</h1>
        <h1>GRAPHIC</h1>
        <h1>DESIGNER </h1>
      </div>
      <div
        onMouseOver={() => hover("--me-stack-font-H1-axis-weight", "700")}
        onMouseOut={() => hover("--me-stack-font-H1-axis-weight", "100")}
        className="me"
      >
        <h1>ABOUT ME </h1>
      </div>
      <div
        onMouseOver={() => hover("--contact-stack-font-H1-axis-weight", "900")}
        onMouseOut={() => hover("--contact-stack-font-H1-axis-weight", "100")}
        className="contact"
      >
        <h1>CONTACT </h1>
      </div>
    </div>
  );
}
export default HomeMenu;
