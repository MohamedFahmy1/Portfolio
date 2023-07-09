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
                    "JavaScript Developer.",
                  ]}
                  loop={false}
                  cursor
                />
              </span>
            </h3>
            <p>
              Hello, I am an Ambitious <span>Front end Developer</span>,I adore
              this career and I have experience with languagues and libraries
              like <span>JavaScript </span>, <span>C# </span>, <span>Sass</span>
              , <span>TypeScript</span>.... and with frameworks like{" "}
              <span>React</span> & <span>Next.js</span> &{" "}
              <span>Bootstrap.</span>
            </p>
          </div>
          <SkillsCards scrollTop={props.scrollTop} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
