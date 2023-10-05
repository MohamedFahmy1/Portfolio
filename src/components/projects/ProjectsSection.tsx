import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import "./ProjectsSection.scss";
import ProjectCard from "./ProjectCard";
let projectsData = [
  {
    name: "OnGrill",
    description:
      "OnGrill is a Multi Page Food Restaurant Website made with Next.js App Router with an amazing animations and clean design and customers also can order food online with a food cart made with Redux.",
    technologies: ["React.js", "Next.js", "Redux", "TypeScript", "Sass"],
    demo: "ongrill.vercel.app",
    code: "github.com/MohamedFahmy1/Ongrill",
    image: "ongrill.avif",
  },
  {
    name: "Playtube",
    description:
      "Playtube is a Multi Page youtube clone Website made with Next.js App Router and Dynamic pages system, with the help of Youtube API you can watch and search for your favorite videos and channels on my site",
    technologies: ["React.js", "Next.js", "Material UI", "TypeScript"],
    demo: "playtube-coral.vercel.app",
    code: "github.com/MohamedFahmy1/Playtube",
    image: "playtube.avif",
    className: "playtube",
  },
  {
    name: "Cryptonite",
    description:
      "Cryptonite is a crypto app that allows users to search for information about various cryptocurrencies in real-time fetched json data from coingecko api in the server with getServerSideProps function.",
    technologies: ["React.js", "Next.js", "TypeScript", "Sass"],
    demo: "cryptonite-six.vercel.app",
    code: "github.com/MohamedFahmy1/Cryptonite",
    image: "cryptonite.avif",
  },
  {
    name: "Weather App",
    description:
      "A Weather website for finding weather in any country or city with other cool statics using user location or seraching for it, fetched data from WeatherApi.com and used context to manage data globally.",
    technologies: ["React.js", "Next.js", "TypeScript", "Sass"],
    demo: "weather-app-mu-olive.vercel.app",
    code: "github.com/MohamedFahmy1/weather-app",
    image: "weather.avif",
    className: "weather",
  },
  {
    name: "Dr.Corneaud Dental Clinic",
    description:
      "A dental clinic multi page website made with react router with simple and clean design where you can book appointment.",
    technologies: ["React.js", "React Router", "TypeScript", "Sass"],
    demo: "dentalclinic-six.vercel.app",
    code: "github.com/MohamedFahmy1/Dental-Clinic",
    image: "dental.avif",
    className: "dental",
  },
  {
    name: "Mceem",
    description:
      "Mceem is a digital agency providing many services and projects for clients with cool settings box made with Vanilla JavaScript providing solid ux and smooth navigation bullets.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    demo: "mohamedfahmy1.github.io/Mceem-Template",
    code: "github.com/MohamedFahmy1/mceem-template",
    image: "mceem.avif",
    className: "mceem",
  },
];
const ProjectsSection = () => {
  return (
    <div className="projectsSection">
      <div className="effect-wrap">
        <div className="effect effect-1"></div>
        <div className="effect effect-7"></div>
        <div className="effect effect-4"></div>
      </div>
      <div className="container">
        <h2 className="heading">
          <FontAwesomeIcon className="icon" icon={faListCheck} />
          Projects
        </h2>
        <div className={"content"}>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.image}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              demo={project.demo}
              code={project.code}
              image={project.image}
              className={project.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
