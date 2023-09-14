import React from "react";
import "./Skills.scss";
import "./SkillsEffects.scss";
import { faListOl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typewriter } from "react-simple-typewriter";
import SkillsCards from "./SkillsCards";

const Skills: React.FC<{ scrollTop: number | 0 }> = (props) => {
  return (
    <div className="skills" id="Skills">
      <div className="container">
        <h2 className="heading">
          <FontAwesomeIcon className="icon" icon={faListOl} />
          <span>Skills</span>
        </h2>
        <div className="effect-wrap">
          <div className="effect effect-1"></div>
          <div className="effect effect-7"></div>
          <div className="effect effect-4"></div>
        </div>
        <div className="content">
          <div
            className={
              props.scrollTop >= 480 ? "textContent visible" : "textContent"
            }
          >
            <h3>
              I am a{" "}
              <span>
                <Typewriter
                  words={[
                    "Front-end Developer.",
                    "React Developer.",
                    "JavaScript Developer",
                  ]}
                  loop={false}
                  cursor
                />
              </span>
            </h3>
            <p>
              Hi, My name is Mohamed an Ambitious{" "}
              <span>Front end Developer</span>, I adore this career and always
              looking to learn new technologies, I specialize in{" "}
              <span>React</span> ,<span>Next.js</span> and made many projects
              for more than a year with the latest technologies on the field and
              I am looking for opportunities that would help me grow
              professionally while being resourceful for the organization.
            </p>
          </div>
          <SkillsCards scrollTop={props.scrollTop} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
