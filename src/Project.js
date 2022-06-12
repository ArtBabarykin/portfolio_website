import React from "react";
import "./Project.css";

function Project({ title, img, source, url }) {
  return (
    <div id="project">
      <img src={img} alt="project_screenshot" />
      <div className="project__meta">
        <h4 className="project__title">{title}</h4>
        <div className="project__buttonGroup">
          <a target="_blank" href={source} className="project__btn">
            Source Code
          </a>
          <a target="_blank" href={url} className="project__btn">
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
