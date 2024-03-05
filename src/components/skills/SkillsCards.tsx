import ReactFlipCard from "reactjs-flip-card";
import "./SkillsCards.scss";
import html from "../../images/icons/html.avif";
import css from "../../images/icons/css-3.avif";
import js from "../../images/icons/js.avif";
import sass from "../../images/icons/sass.avif";
import react from "../../images/icons/React.avif";
import redux from "../../images/icons/redux-icon.avif";
import nextjs from "../../images/icons/nextjs.avif";
import git from "../../images/icons/github.avif";
import jest from "../../images/icons/jest.avif";
import figma from "../../images/icons/figma.avif";
import bootstrap from "../../images/icons/bootstrap.avif";
import typescript from "../../images/icons/typescript.avif";
import material from "../../images/icons/materialUI.avif";
import tailwind from "../../images/icons/tailwind.avif";
import shadcn from "../../images/icons/shadcnUI.avif";
import cypress from "../../images/icons/cypress.svg";
import reactRouter from "../../images/icons/react-router.svg";
import firebase from "../../images/icons/firebase.svg";
import framerMotion from "../../images/icons/framer.svg";
import axios from "../../images/icons/axios.avif";
import zod from "../../images/icons/zod.avif";
import react_hook from "../../images/icons/react-hook-form.avif";
import react_query from "../../images/icons/react-query.avif";
import recoil from "../../images/icons/recoil.svg";
import webpack from "../../images/icons/webpack.avif";

const SkillsCards: React.FC<{ scrollTop: number | 0 }> = (props) => {
  const styles = {
    card: { background: "#1584db", color: "white", borderRadius: 20 },
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
        frontComponent={<img src={typescript} alt="typescript icon" />}
        backComponent={<div>TypeScript</div>}
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
        frontComponent={<img src={recoil} alt="recoil icon" />}
        backComponent={<div>Recoil</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={material} alt="materialUI icon" />}
        backComponent={<div>Material UI</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={shadcn} alt="ShadcnUI icon" />}
        backComponent={<div>Shadcn UI</div>}
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
        frontComponent={<img src={reactRouter} alt="React Router icon" />}
        backComponent={<div>React Router v6</div>}
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
        frontComponent={<img src={tailwind} alt="tailwind icon" />}
        backComponent={<div>Tailwind</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={webpack} alt="webpack icon" />}
        backComponent={<div>Webpack</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={jest} alt="jest icon" />}
        backComponent={
          <div>
            Jest &
            <br />
            RTL
          </div>
        }
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={cypress} alt="cypress icon" />}
        backComponent={<div>Cypress</div>}
        frontCss="front"
        backCss="back"
      />

      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={react_query} alt="React Query icon" />}
        backComponent={<div>React Query</div>}
        frontCss="front"
        backCss="back"
      />

      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={axios} alt="axios icon" />}
        backComponent={<div>Axios</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={react_hook} alt="react hook form icon" />}
        backComponent={<div>React Hook Form</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={zod} alt="zod icon" />}
        backComponent={<div>ZOD</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={firebase} alt="Firebase icon" />}
        backComponent={<div>Firebase</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={framerMotion} alt="Framer Motion icon" />}
        backComponent={<div>Framer Motion</div>}
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
        frontComponent={<img src={figma} alt="figma icon" />}
        backComponent={<div>Figma</div>}
        frontCss="front"
        backCss="back"
      />
    </div>
  );
};

export default SkillsCards;
