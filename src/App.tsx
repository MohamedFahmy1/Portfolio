import Landing from "./components/landing/Landing";
import Header from "./components/layout/Header";
import { useState, useEffect } from "react";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";
function App() {
  const [scrollTop, setScrollTop] = useState<0 | number>(0);
  const [darkMode, setdarkMode] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const darkModeHandler = (darkModeStatus: boolean) => {
    setdarkMode((prevState) => (prevState = darkModeStatus));
  };
  return (
    <div className={!darkMode ? "darkModeEnabled" : ""}>
      <Header scrollTop={scrollTop} darkMode={darkModeHandler} />
      <Landing />
      <Skills scrollTop={scrollTop} />
      <Projects darkModeEnabled={darkMode} />
      <Contact scrollTop={scrollTop} />
      <Footer />
    </div>
  );
}

export default App;
