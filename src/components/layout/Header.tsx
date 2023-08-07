import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";
import "./Header1.scss";
import "./DarkModeHeader.scss";
import { useState } from "react";
import {
  faChartSimple,
  faCode,
  faHouseChimney,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import logoWhite from "../../images/white-removebg-preview.avif";
import logoCol from "../../images/colored-removebg-preview.avif";
import logoBlack from "../../images/black-removebg-preview.avif";
const Header: React.FC<{
  scrollTop: number | 0;
  darkMode: (darkMode: boolean) => void;
}> = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const skillsClickHandler = () => {
    window.scrollTo({
      top: 680,
      behavior: "smooth",
    });
  };
  const projectsClickHandler = () => {
    window.scrollTo({
      top: 1770,
      behavior: "smooth",
    });
  };
  const contactClickHandler = () => {
    window.scrollTo({
      top: 4300,
      behavior: "smooth",
    });
  };
  const skillsClickHandlermob = () => {
    window.scrollTo({
      top: 780,
      behavior: "smooth",
    });
  };
  const projectsClickHandlermob = () => {
    window.scrollTo({
      top: 2600,
      behavior: "smooth",
    });
  };
  const contactClickHandlermob = () => {
    window.scrollTo({
      top: 6700,
      behavior: "smooth",
    });
  };
  const homeClickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const darkModeHandler = () => {
    setDarkMode((prevstate) => !prevstate);
    props.darkMode(darkMode);
  };
  return (
    <header className={props.scrollTop >= 10 ? "sticky" : ""}>
      <div className="container">
        <div className="mobileMenu">
          <ul>
            <li>
              <button
                className={props.scrollTop < 780 ? "icon active" : "icon"}
                onClick={homeClickHandler}
              >
                <div className="iconHolder">
                  <FontAwesomeIcon icon={faHouseChimney} className={"icon"} />
                  <span>Home</span>
                </div>
              </button>
            </li>
            <li>
              <button
                className={
                  props.scrollTop >= 780 && props.scrollTop < 2600
                    ? "icon active"
                    : "icon"
                }
                onClick={skillsClickHandlermob}
              >
                <div className="iconHolder">
                  <FontAwesomeIcon icon={faChartSimple} className={"icon"} />
                  <span>Skills</span>
                </div>
              </button>
            </li>
            <li>
              <button
                className={
                  props.scrollTop >= 2600 && props.scrollTop < 6700
                    ? "icon active"
                    : "icon"
                }
                onClick={projectsClickHandlermob}
              >
                <div className="iconHolder">
                  <FontAwesomeIcon icon={faCode} className={"icon"} />
                  <span>Projects</span>
                </div>
              </button>
            </li>
            <li>
              <button
                className={props.scrollTop >= 6700 ? "icon active" : "icon"}
                onClick={contactClickHandlermob}
              >
                <div className="iconHolder">
                  <FontAwesomeIcon icon={faPhone} className={"icon"} />
                  <span>Contact</span>
                </div>
              </button>
            </li>
          </ul>
        </div>
        <div className="logo">
          <div className="text">
            <img
              src={
                props.scrollTop <= 10
                  ? logoCol
                  : darkMode
                  ? logoBlack
                  : logoWhite
              }
              alt="logo"
            />
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <button
                className={
                  props.scrollTop >= 20 && props.scrollTop < 660 ? "onView" : ""
                }
                onClick={homeClickHandler}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={
                  props.scrollTop >= 660 && props.scrollTop < 1740
                    ? "onView"
                    : ""
                }
                onClick={skillsClickHandler}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                className={
                  props.scrollTop >= 1740 && props.scrollTop < 4300
                    ? "onView"
                    : ""
                }
                onClick={projectsClickHandler}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className={props.scrollTop >= 4300 ? "onView" : ""}
                onClick={contactClickHandler}
              >
                Contact
              </button>
            </li>
          </ul>
          <div
            className={
              darkMode ? "nightMode-container night" : "nightMode-container"
            }
            onClick={darkModeHandler}
          >
            <div className="circle">
              <div className="hole"></div>
              <div className="hole"></div>
            </div>
            <div className="cloud one"></div>
            <div className="cloud two"></div>
            <div className="cloud three"></div>
            <div className="cloud four"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
