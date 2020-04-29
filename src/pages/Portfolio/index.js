import React from "react";
import ProjectCard from "../../components/ProjectCard";
import data from "../../data/data";
import "./style.css";

function Portfolio(){
  return (
    <main>
      <div className="container main-view">
        <div className="row portfolio">
          <div className="col">
            <h1>Portfolio</h1>
          </div>
          <div>
            {data.map((project) => {
              return <ProjectCard {...project} key={project.id}/>;
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;