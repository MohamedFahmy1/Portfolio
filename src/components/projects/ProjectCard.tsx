import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectCard.scss";
export interface projectsData {
  name: string;
  description: string;
  technologies: string[];
  demo: string;
  code: string;
  image: string;
  className?: string;
}
const ProjectCard: React.FC<projectsData> = ({
  name,
  description,
  technologies,
  demo,
  code,
  image,
  className,
}) => {
  return (
    <div className="card">
      <a
        href={`http://${demo}`}
        target="_blank"
        rel="noreferrer"
        className="image"
      >
        <img
          src={require(`../../images/${image}`)}
          style={{ maxWidth: "100%" }}
          alt="project"
          className={className}
        />
      </a>
      <div className="description">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="techs">
          {technologies.map((tech) => (
            <span>{tech}</span>
          ))}
        </div>
        <div className="links">
          <a
            href={`http://${code}`}
            target="_blank"
            rel="noreferrer"
            className="code"
          >
            <span>Code</span>
            <FontAwesomeIcon icon={faGithub} className="git" />
          </a>
          <a
            href={`http://${demo}`}
            target="_blank"
            rel="noreferrer"
            className="demo"
          >
            <span>Live Demo</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
