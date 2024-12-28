import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import "./ProjectsSection.scss";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../../utils/projects";

const ProjectsSection = () => {
  return (
    <div className="projectsSection">
      <div className="effect-wrap">
        <div className="effect effect-1"></div>
        <div className="effect effect-7"></div>
        <div className="effect effect-4"></div>
      </div>
      <div className="container">
        <h2 className="heading">
          <FontAwesomeIcon className="icon" icon={faListCheck} />
          Projects
        </h2>
        <div className={"content"}>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.image}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              demo={project.demo}
              code={project.code}
              image={project.image}
              className={project.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
