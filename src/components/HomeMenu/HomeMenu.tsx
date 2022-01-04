import React, { useState } from "react";
import "./homeMenu.css";

function HomeMenu() {
  const [menuClassName, setMenuClassName] = useState("menu");
  const [isHide, setIsHide] = useState(true);
  const globalCSSvariables = document.body.style;

  function hover(globalVariable: string, value: string) {
    globalCSSvariables.setProperty(globalVariable, value);
  }
  function navBarMenu() {
    globalCSSvariables.setProperty("--full-stack-font-H1-font-size", "70px");
    globalCSSvariables.setProperty(
      "--animation-design-font-H1-font-size",
      "25px"
    );
    globalCSSvariables.setProperty("--contact-stack-font-H1-font-size", "45px");
    globalCSSvariables.setProperty("--me-stack-font-H1-font-size", "45px");
    setIsHide(false);
    setMenuClassName("navBarMenu");
  }
  function backMainMenu() {
    globalCSSvariables.setProperty("--full-stack-font-H1-font-size", "200px");
    globalCSSvariables.setProperty(
      "--animation-design-font-H1-font-size",
      "50px"
    );
    globalCSSvariables.setProperty("--contact-stack-font-H1-font-size", "90px");
    globalCSSvariables.setProperty("--me-stack-font-H1-font-size", "90px");
    setIsHide(true);
    setMenuClassName("menu");
  }
  return (
    <div className={menuClassName}>
      <div
        onClick={() => navBarMenu()}
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
      <div
        onClick={backMainMenu}
        style={{ display: isHide === true ? "none" : "block" }}
        className="menuBack"
      >
        <h1>back</h1>
      </div>
    </div>
  );
}
export default HomeMenu;
