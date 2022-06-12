import React from "react";
import "./TechCard.css";

function TechCard({ title, icon, text }) {
  return (
    <div className="techCard__box">
      <div className="techCard__icon">{icon}</div>
      <h2 className="techCard__text">{title}</h2>
      <p className="techCard__text">{text}</p>
    </div>
  );
}

export default TechCard;
