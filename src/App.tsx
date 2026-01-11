const gradientBackground = "/images/gradient.png";
import Home from './pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Global/Navbar';
import Footer from './components/Global/Footer';
import Project from './pages/Project';
import ProjectInfo from './pages/ProjectInfo';
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, [])
  return (
    <>
      <main>
        <img className='absolute top-0 right-0 opacity-60 -z-10' src={gradientBackground} alt="Gradient" />
        <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10'></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/project/:id" element={<ProjectInfo />} />
        </Routes>
        <Footer />
      </main>
    </>
  )
}
