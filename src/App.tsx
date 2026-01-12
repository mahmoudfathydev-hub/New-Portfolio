import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import ProjectInfo from './pages/ProjectInfo'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Navbar from './components/Global/Navbar'
import Footer from './components/Global/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const gradientBackground = "./images/gradient.png";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, [])

  return (
    <Router>
      <main>
        <img
          className='absolute top-0 right-0 opacity-60 -z-10'
          src={gradientBackground}
          alt="Gradient"
        />
        <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10'></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/project/:id" element={<ProjectInfo />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}
