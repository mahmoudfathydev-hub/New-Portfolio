import Navbar from "../components/Global/Navbar"
import Hero from "../components/Home/Hero"
import Skills from "../components/Home/Skills"
import Vedio from "../components/Home/Video"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Skills />
            <Vedio />
        </div>
    )
}

export default Home