import Contact from "../components/Home/ContactSection"
import Hero from "../components/Home/Hero"
import Skills from "../components/Home/Skills"
import WhyMe from "../components/Home/WhyMe"

const Home = () => {
    return (
        <div>
            <Hero />
            <Skills />
            <WhyMe />
            <Contact />
        </div>
    )
}

export default Home