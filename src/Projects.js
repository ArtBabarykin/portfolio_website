import React from "react";
import Project from "./Project";
import { projects_data } from "./projects_data";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <h3 className="heading">My Latest Projects</h3>
      <div className="container">
        <div className="row">
          {projects_data.map((obj) => (
            <div className="col__3" key={obj.id}>
              <Project
                title={obj.title}
                img={obj.img}
                source={obj.source_code}
                url={obj.url}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
