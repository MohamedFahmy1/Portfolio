import styles from "./LandingContent.module.scss";
import { Typewriter } from "react-simple-typewriter";

const LandingContent = () => {
  return (
    <div className={styles.content}>
      <p>Hello, my name is</p>
      <h1>Mohamed Fahmy</h1>
      <h2>
        And I'm a{" "}
        <Typewriter
          words={["Front-end", "Developer", "React.js", "Developer"]}
          loop={false}
          cursor
        />
      </h2>
      <div className={styles.buttons}>
        <a
          href={require("../../images/mohamedfahmy.pdf")}
          target="_blank"
          rel="noreferrer"
          download
        >
          <button className={styles.button}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default LandingContent;
