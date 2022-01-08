import React, { useState, useEffect } from "react";
import "./cardDescription.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getSelectedSkill } from "../../api";

function CardDescription(prop: { keywordID: string }) {
  const { keywordID } = prop;
  const [skillName, setSkillName] = useState("");
  const [description, setDescription] = useState("");
  function voteForSkill() {}
  useEffect(() => {
    getSelectedSkill(keywordID).then((res) => {
      const { data } = res;
      const { skill } = data;
      setDescription(skill.description);
      setSkillName(skill.skill);
    });
  }, []);
  return (
    <>
      <div className="cardDescription">
        <h2>{skillName}</h2>
        {description}
        <div className="likeDiv">
          <button className="likeButton" onClick={voteForSkill}>
            <FavoriteIcon />
          </button>
          <p>Are you agree? Did you like?</p>
        </div>
      </div>
    </>
  );
}
export default CardDescription;
