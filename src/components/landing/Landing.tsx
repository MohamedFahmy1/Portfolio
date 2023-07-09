import styles from "./Landing.module.scss";
import TiltPhoto from "./TiltPhoto";
import LandingContent from "./LandingContent";
const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <LandingContent />
        <TiltPhoto />
      </div>
    </div>
  );
};

export default Landing;
