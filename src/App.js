import About from "modules/About";
import Contact from "modules/Contact";
import Footer from "modules/Footer";
import Header from "modules/Header";
import Home from "modules/Home";
import Projects from "modules/Projects";
import Skills from "modules/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="overflow-hidden dark:bg-dark">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
