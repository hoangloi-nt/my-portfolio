import About from "modules/About";
import Contact from "modules/Contact";
import Footer from "modules/Footer";
import Header from "modules/Header";
import Home from "modules/Home";
import Projects from "modules/Projects";
import Skills from "modules/Skills";

function App() {
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
