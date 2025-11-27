import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skill />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Project />
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
