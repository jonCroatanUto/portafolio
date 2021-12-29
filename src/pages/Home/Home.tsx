import React, { useState } from "react";
import "./homeStyle.css";

function Home() {
  let bodyStyles = document.body.style;

  function setFontWeight(e: any) {
    bodyStyles.setProperty("--global-font-H1-axis-weight", e.target.value);
  }
  return (
    <>
      <h1>this is my portfolio</h1>
      <input
        type="range"
        defaultValue={450}
        onChange={setFontWeight}
        min="100"
        max="900"
      />
      <h2>this is my portfolio</h2>
      <div className="draws"></div>
    </>
  );
}
export default Home;
