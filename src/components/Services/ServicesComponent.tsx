import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { getAssetPath } from '../../utils/paths';
import FloatingBubbles from "../UI/FloatingBubble";
const icon = getAssetPath("images/Icon.png");
const icon2 = getAssetPath("images/Icon2.png");
const icon3 = getAssetPath("images/Icon3.png");
const icon4 = getAssetPath("images/Icon4.png");
const icon5 = getAssetPath("images/Icon5.png");
const icon6 = getAssetPath("images/Icon6.png");
const ServicesComponent = () => {
    const cards = [
        {
            id: 1,
            title: "Responsive Web Design",
            desc: "Fluid layouts that feel at home on any screen size and device. I ensure a seamless experience from mobile to ultra-wide displays.",
            icon,
        },
        {
            id: 2,
            title: "React Development",
            desc: "Building scalable, component-driven architectures for modern web apps using React and sophisticated state management.",
            icon: icon2,
        },
        {
            id: 3,
            title: "UI/UX Implementation",
            desc: "Translating complex designs into pixel-perfect, interactive code while maintaining strict fidelity to the original design vision.",
            icon: icon3,
        },
        {
            id: 4,
            title: "Performance Optimization",
            desc: "Lightning-fast load times and smooth, 60fps interactions achieved through meticulous code splitting and asset management.",
            icon: icon4,
        },
        {
            id: 5,
            title: "Accessibility (a11y)",
            desc: "Inclusive web experiences following WCAG guidelines to ensure your product is usable and welcoming for everyone.",
            icon: icon5,
        },
        {
            id: 6,
            title: "API Integration",
            desc: "Seamlessly connecting frontend interfaces with robust RESTful or GraphQL backend services for dynamic data handling.",
            icon: icon6,
        },
    ];
    return (
        <main className="max-w-7xl mx-auto px-6 py-20 text-white">
            <FloatingBubbles count={6} color="#e99b63" />
            <section className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 mb-20">
                <div className="flex gap-6 max-w-2xl">
                    <div className="w-1 bg-[#e99b63] rounded-full mt-2" />
                    <div>
                        <h6 className="text-xs uppercase tracking-widest text-[#e99b63] mb-3">
                            Expertise & Capabilities
                        </h6>
                        <h2 className="text-6xl font-bold mb-4">Services</h2>
                        <h4 className="text-gray-400 leading-relaxed">
                            Crafting digital experiences by bringing technical precision and
                            aesthetic excellence to every pixel. I specialize in building
                            high-performance frontend solutions.
                        </h4>
                    </div>
                </div>
                <Link
                    to="/projects"
                    className="inline-flex items-center font-medium gap-2 px-6 py-3 border border-[#e99b63] text-[#e99b63] rounded-full hover:bg-[#e99b63] hover:text-black transition-all duration-200 ease-out"
                >
                    View Portfolio <FaChevronRight />
                </Link>
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
                <FloatingBubbles count={6} color="#e99b63" />
                {cards.map((card) => (
                    <div
                        data-aos="zoom-in-up"
                        key={card.id}
                        className="group bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-[#e99b63]/50 hover:-translate-y-2 transition duration-300"
                    >
                        <FloatingBubbles count={6} color="#e99b63" />
                        <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-[#e99b63]/10">
                            <img src={card.icon} alt="" className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-[#e99b63] transition">
                            {card.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {card.desc}
                        </p>
                    </div>
                ))}
            </section>
            <section className="text-center max-w-3xl mx-auto py-14 px-24 rounded-3xl bg-gradient-to-bl from-black via-[#1a1a1a] to-[#e99b63]/30">
                
                <h2 className="text-4xl font-bold mb-6">
                    Ready to start your <br /> next project?
                </h2>
                <p className="text-gray-400 mb-10">
                    Let's build something amazing together. Reach out for a consultation
                    and let's turn your vision into a digital reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/contact"
                        className="px-8 py-3 rounded-full bg-[#e99b63] text-black font-medium hover:opacity-90 transition"
                    >
                        Get in Touch
                    </Link>
                    <Link
                        to="/contact"
                        className="px-8 py-3 rounded-full border border-[#e99b63] text-[#e99b63] hover:bg-[#e99b63] hover:text-black transition"
                    >
                        Hire Me
                    </Link>
                    
                </div>
            </section>
        </main>
    );
};
export default ServicesComponent;
