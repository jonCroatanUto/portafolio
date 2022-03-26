import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./NavBarMenu.css";
import { useNavigate } from "react-router-dom";

function NavBarMenu() {
  const [menuClassName, setMenuClassName] = useState("menu");
  const [isHide, setIsHide] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") navBarMenu(location.pathname);
  }, []);
  const globalCSSvariables = document.body.style;
  const navegate = useNavigate();

  function hover(globalVariable: string, value: string) {
    globalCSSvariables.setProperty(globalVariable, value);
  }

  function navBarMenu(page: string) {
    globalCSSvariables.setProperty("--full-stack-font-H1-font-size", "35px");
    globalCSSvariables.setProperty(
      "--animation-design-font-H1-font-size",
      "25px"
    );
    globalCSSvariables.setProperty("--contact-stack-font-H1-font-size", "22px");
    globalCSSvariables.setProperty("--me-stack-font-H1-font-size", "22px");
    setIsHide(false);
    setMenuClassName("navBarMenu");
    navegate(page);
  }

  function backMainMenu() {
    globalCSSvariables.setProperty("--full-stack-font-H1-font-size", "100px");
    globalCSSvariables.setProperty(
      "--animation-design-font-H1-font-size",
      "50px"
    );
    globalCSSvariables.setProperty("--contact-stack-font-H1-font-size", "45px");
    globalCSSvariables.setProperty("--me-stack-font-H1-font-size", "45px");
    setIsHide(true);
    setMenuClassName("menu");
    navegate("/");
  }
  return (
    <div className={menuClassName}>
      <div
        onClick={() => navBarMenu("/fullStack")}
        onMouseOver={() => hover("--full-stack-font-H1-axis-weight", "700")}
        onMouseOut={() => hover("--full-stack-font-H1-axis-weight", "100")}
        className="FullStackDeveloper "
      >
        <h1>FULLSTACK </h1>
        <h1>DEVELOPER </h1>
      </div>
      <div
        onClick={() => navBarMenu("/animationDesign")}
        onMouseOver={() =>
          hover("--animation-design-font-H1-axis-weight", "900")
        }
        onMouseOut={() =>
          hover("--animation-design-font-H1-axis-weight", "100")
        }
        className="motionGraphics "
      >
        <h1>MOTION</h1>
        <h1>GRAPHIC</h1>
        <h1>DESIGNER </h1>
      </div>
      <div
        onClick={() => navBarMenu("/aboutME")}
        onMouseOver={() => hover("--me-stack-font-H1-axis-weight", "700")}
        onMouseOut={() => hover("--me-stack-font-H1-axis-weight", "100")}
        className="me"
      >
        <h1>ABOUT ME </h1>
      </div>
      <div
        onClick={() => navBarMenu("/contact")}
        onMouseOver={() => hover("--contact-stack-font-H1-axis-weight", "900")}
        onMouseOut={() => hover("--contact-stack-font-H1-axis-weight", "100")}
        className="contact "
      >
        <h1>CONTACT </h1>
      </div>
      <div
        onClick={backMainMenu}
        style={{ display: isHide === true ? "none" : "block" }}
        className="menuBack "
      >
        <h1>back</h1>
      </div>
    </div>
  );
}
export default NavBarMenu;
