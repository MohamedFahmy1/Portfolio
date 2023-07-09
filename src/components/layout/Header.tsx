import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";
import "./Header1.scss";
import { useState } from "react";
import {
  faChartSimple,
  faCode,
  faHouseChimney,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const Header: React.FC<{
  scrollTop: number | 0;
  darkMode: (darkMode: boolean) => void;
}> = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const skillsClickHandler = () => {
    window.scrollTo({
      top: 670,
      behavior: "smooth",
    });
  };
  const projectsClickHandler = () => {
    window.scrollTo({
      top: 1750,
      behavior: "smooth",
    });
  };
  const contactClickHandler = () => {
    window.scrollTo({
      top: 2870,
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
                className={props.scrollTop < 660 ? "icon active" : "icon"}
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
                  props.scrollTop >= 660 && props.scrollTop < 1730
                    ? "icon active"
                    : "icon"
                }
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
                  props.scrollTop >= 1730 && props.scrollTop < 2850
                    ? "icon active"
                    : "icon"
                }
              >
                <div className="iconHolder">
                  <FontAwesomeIcon icon={faCode} className={"icon"} />
                  <span>Projects</span>
                </div>
              </button>
            </li>
            <li>
              <button
                className={props.scrollTop >= 2850 ? "icon active" : "icon"}
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
            Portf<span>olio</span>
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
                  props.scrollTop >= 1740 && props.scrollTop < 2790
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
                className={props.scrollTop >= 2790 ? "onView" : ""}
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
