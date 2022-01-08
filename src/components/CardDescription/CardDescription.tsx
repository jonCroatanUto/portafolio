import React, { useState, useEffect } from "react";
import "./cardDescription.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getSelectedSkill } from "../../api";

function CardDescription(prop: { keywordID: string }) {
  const { keywordID } = prop;
  const [text, setText] = useState("");
  function voteForSkill() {}
  useEffect(() => {
    getSelectedSkill(keywordID).then((res) => {
      const { data } = res;
      const { skill } = data;
      setText(skill.description);
    });
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
