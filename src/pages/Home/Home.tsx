import React, { useState } from "react";
import "./homeStyle.css";
function Home() {
  const [pos, setPos] = useState({ posX: "500px", posY: "300px" });
  function move(e: any) {
    let posX = e.nativeEvent.offsetX - 300;
    let posY = e.nativeEvent.offsetY - 300;
    setPos({
      posX: `${posX.toString()}px`,
      posY: `${posY.toString()}px`,
    });
  }
  return (
    <>
      <h1>this is Home</h1>
      <div onMouseMove={move} className="getmousePos"></div>
      <div style={{ left: pos.posX, top: pos.posY }} className="boxColor"></div>
    </>
  );
}
export default Home;
