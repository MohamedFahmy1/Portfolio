import ReactFlipCard from "reactjs-flip-card";
import "./SkillsCards.scss";
import html from "../../images/icons/html.png";
import css from "../../images/icons/css-3.png";
import js from "../../images/icons/js.png";
import sass from "../../images/icons/sass.png";
import react from "../../images/icons/React.png";
import redux from "../../images/icons/redux-icon.png";
import router from "../../images/icons/react-router.png";
import nextjs from "../../images/icons/nextjs.png";
import git from "../../images/icons/github.png";
import jest from "../../images/icons/jest.png";
import c from "../../images/icons/letter-c.png";
import csharp from "../../images/icons/c-sharp.png";
import photoshop from "../../images/icons/photoshop.png";
import bootstrap from "../../images/icons/bootstrap.png";
import npm from "../../images/icons/npm.png";
import typescript from "../../images/icons/typescript.png";
const SkillsCards: React.FC<{ scrollTop: number | 0 }> = (props) => {
  const styles = {
    card: { background: "#7373ff", color: "white", borderRadius: 20 },
  };
  return (
    <div
      className={
        props.scrollTop >= 480 ? "cardsContainer visible" : "cardsContainer"
      }
    >
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={html} alt="html icon" />}
        backComponent={<div>HTML</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={css} alt="css icon" />}
        backComponent={<div>CSS</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={js} alt="js icon" />}
        backComponent={<div>JavaScript</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={sass} alt="sass icon" />}
        backComponent={<div>Sass</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={react} alt="react icon" />}
        backComponent={<div>React</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={redux} alt="redux icon" />}
        backComponent={<div>Redux</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={router} alt="router icon" />}
        backComponent={<div>React Router</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={nextjs} alt="nextjs icon" />}
        backComponent={<div>Next.js</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={bootstrap} alt="bootstrap icon" />}
        backComponent={<div>Bootstrap</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={jest} alt="jest icon" />}
        backComponent={<div>Jest</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={c} alt="c icon" />}
        backComponent={<div>C</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={csharp} alt="csharp icon" />}
        backComponent={<div>C#</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={git} alt="git icon" />}
        backComponent={<div>Git/Github</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={npm} alt="npm icon" />}
        backComponent={<div>NPM</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={typescript} alt="typescript icon" />}
        backComponent={<div>TypeScript</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={photoshop} alt="photoshop icon" />}
        backComponent={<div>Photoshop</div>}
        frontCss="front"
        backCss="back"
      />
    </div>
  );
};

export default SkillsCards;
