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
import c from "../../images/icons/letter-c.avif";
import csharp from "../../images/icons/c-sharp.avif";
import figma from "../../images/icons/figma.avif";
import bootstrap from "../../images/icons/bootstrap.avif";
import typescript from "../../images/icons/typescript.avif";
import material from "../../images/icons/materialUI.avif";
import tailwind from "../../images/icons/tailwind.avif";
import shadcn from "../../images/icons/shadcnUI.avif";
import cheerio from "../../images/icons/cheerio.svg";
import puppeteer from "../../images/icons/puppeteer.avif";
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
        frontComponent={<img src={react_query} alt="React Query icon" />}
        backComponent={<div>React Query</div>}
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
        frontComponent={<img src={cheerio} alt="cheerio icon" />}
        backComponent={<div>Cheerio</div>}
        frontCss="front"
        backCss="back"
      />
      <ReactFlipCard
        frontStyle={styles.card}
        backStyle={styles.card}
        frontComponent={<img src={puppeteer} alt="puppeteer icon" />}
        backComponent={<div>Puppeteer</div>}
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
