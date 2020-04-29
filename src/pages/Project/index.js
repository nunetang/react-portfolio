import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./style.css";
import data from "../../data/data";

function Project(props){

  const { id } = useParams();

  const [projectData, setProjectData] = useState({
    id: "",
    title: "",
    github: "",
    deployed: "",
    description: "",
    images: [],
    tech: []  });

  useEffect(() => {
    const project = data.filter(e=> {
      return e.id === id;
    });
    setProjectData(project[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container main-view project flow-text">
      <div className="col s12 center">
        <h1>{projectData.title}</h1>
      </div>
      <div className="col s12 center">
        <img src={projectData.images[0]} alt={projectData.images[0]}></img>
      </div>
      <div className="row">
        <p>{projectData.description}</p>
      </div>
      <div className="row project-links">
        {projectData.deployed !== "" ? 
          <a className="project-link" 
            href={projectData.deployed} 
            alt={projectData.deployed} 
            target="_blank" 
            rel="noopener noreferrer">
            Deployed Application
          </a> : ""}
        <a className="project-link" 
          href={projectData.github} 
          alt={projectData.github} 
          target="_blank" 
          rel="noopener noreferrer">
          Github Repository
        </a>
      </div>
      <div className="row">
      <ul>
          {projectData.tech.map((t,i) => {
            return(
              <li key={i}>
                {t}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

}

export default Project;