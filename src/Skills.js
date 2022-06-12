import React from "react";
import TechCard from "./TechCard";
import { skills_data } from "./skills_data";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills">
      <h3 className="heading">My Tech Skills</h3>
      <div className="container">
        <div className="row">
          {skills_data.map((obj) => (
            <div className="col__3" key={obj.id}>
              <TechCard title={obj.title} icon={obj.icon} text={obj.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
