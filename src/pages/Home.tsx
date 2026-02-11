import Contact from "../components/Home/ContactSection";
import Hero from "../components/Home/Hero";
import Skills from "../components/Home/Skills";
import ProjectsSection from "../components/Projects/ProjectsSection";
import Services from "../components/Home/Services";
import CodeWars from "../components/Home/CodeWars";

const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <ProjectsSection />
      <Services />
      <CodeWars />
      <Contact />
    </div>
  );
};

export default Home;
