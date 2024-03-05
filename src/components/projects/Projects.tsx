import "./Projects.scss";
import Wave from "react-wavify";
import ProjectsSection from "./ProjectsSection";

const Projects: React.FC<{ darkModeEnabled: boolean }> = (props) => {
  const waveColor = !props.darkModeEnabled ? "#333333" : "#ffffff";
  return (
    <div className="projectsContainer">
      <div className="projects">
        <div className="img">
          <Wave
            fill={waveColor}
            paused={false}
            options={{
              height: 300,
              amplitude: 80,
              speed: 0.15,
              points: 5,
            }}
          />
        </div>
        <ProjectsSection />
      </div>
      <div className="img2">
        <Wave
          fill={waveColor}
          paused={false}
          options={{
            height: 300,
            amplitude: 80,
            speed: 0.15,
            points: 5,
          }}
        />
      </div>
    </div>
  );
};

export default Projects;
