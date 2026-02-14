import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectInfo from "./pages/ProjectInfo";
import Contact from "./pages/Contact";
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";
import ScrollToTop from "./components/Global/ScrollToTop";
import BackToTop from "./components/Global/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { getAssetPath } from "./utils/paths";

const gradientBackground = getAssetPath("images/gradient.png");

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
      <main>
        <ScrollToTop />
        <img
          className="absolute top-0 right-0 opacity-60 -z-10"
          src={gradientBackground}
          alt="Gradient"
        />
        <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectInfo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <BackToTop />
      </main>
  );
}