import React from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faLocationDot,
  faSchool,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import FormEmail from "./FormEmail";
const Contact: React.FC<{ scrollTop: number | 0 }> = (props) => {
  return (
    <div className="contact" id="Contact">
      <div className="container">
        <h2 className="heading">
          <FontAwesomeIcon className="icon" icon={faMessage} />
          Contact
        </h2>
        <div className="contactContent">
          <div
            className={
              props.scrollTop > 4300 ? "left-content visible" : "left-content"
            }
          >
            <h3>Social Stats</h3>
            <div className="socialStats">
              <div className="box">
                <FontAwesomeIcon className="icon" icon={faLocationDot} bounce />
                <div className="info">
                  <h4>Address</h4>
                  <p>New Cairo, Cairo.</p>
                </div>
              </div>
              <div className="box">
                <FontAwesomeIcon className="icon" icon={faSchool} bounce />
                <div className="info">
                  <h4>Education</h4>
                  <p>
                    Faculty of Engineering <br />
                    Ain Shams University.
                  </p>
                </div>
              </div>
              <div className="box">
                <FontAwesomeIcon className="icon" icon={faPhone} bounce />
                <div className="info">
                  <h4>Phone Number</h4>
                  <a href="tel:+963933966085">+20 01121870088.</a>
                </div>
              </div>
              <div className="box">
                <FontAwesomeIcon className="icon" icon={faEnvelope} bounce />
                <div className="info">
                  <h4>Email</h4>
                  <a
                    href="mailto:mohamedfahmy.webdeveloper@gmail.com"
                    className="w sub-title"
                  >
                    mohamedfahmy.webdeveloper
                    <br />
                    @gmail.com.
                  </a>
                </div>
              </div>
              <div className="social-media">
                <a
                  href="https://github.com/mohamedFahmy1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon className="icon" icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-fahmy-580342220/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon className="icon" icon={faLinkedin} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100001739833921"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon className="icon" icon={faFacebook} />
                </a>
              </div>
            </div>
          </div>
          <div className={props.scrollTop > 4300 ? "right visible" : "right"}>
            <FormEmail scrollTop={props.scrollTop} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
