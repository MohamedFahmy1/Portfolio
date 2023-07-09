import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import "./ProjectsSection.scss";
const ProjectsSection = () => {
  return (
    <div className="projectsSection">
      <div className="container">
        <h2 className="heading">
          <FontAwesomeIcon className="icon" icon={faListCheck} />
          Projects
        </h2>
      </div>
      <div className="effect-wrap">
        <div className="effect effect-1"></div>
        <div className="effect effect-7"></div>
        <div className="effect effect-4"></div>
      </div>
    </div>
  );
};

export default ProjectsSection;
