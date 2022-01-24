import { useContext } from "react";
import Intro from "./components/intro/intro";
import About from "./components/about/About";
import Contact from "./components/contact/contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { Skills } from "./components/skills/Skills";
import Portfolio from "./components/portfolio/portfolio";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};
export default App;
