import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <div className="copyWrite">
            <p>© 2023 - All Right Reserved</p>
            <p>
              Designed By:{" "}
              <a
                href="https://github.com/mohamedFahmy1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mohamed Fahmy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
