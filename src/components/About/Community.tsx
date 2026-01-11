import { FaTiktok } from "react-icons/fa";
import BackgroundLightLines from "../UI/BackgroundLightLines";

const Community = () => {
    return (
        <main className="Community relative flex flex-col items-center justify-center py-20 border-t border-white/40 overflow-hidden">
            <BackgroundLightLines count={4}  rotate={25}/>
            <div
                className="head"
                data-aos="fade-down"
                data-aos-duration="1000"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white tracking-tight">
                    Community & <span className="text-[#e99b63]">Content</span>
                </h2>
            </div>

            <div className="content max-w-4xl px-6 space-y-8 text-lg md:text-xl leading-loose text-white/80 text-center font-light">
                <p data-aos="fade-up" data-aos-delay="100">
                    I actively share my learning journey and front-end projects on <span className="text-[#e99b63] font-medium font-mono hover:[text-shadow:_0_0_30px_rgba(233,155,99,0.8)]">TikTok</span>, where I create short-form content focused on clean code, <span className="text-[#e99b63] font-medium hover:[text-shadow:_0_0_30px_rgba(233,155,99,0.8)]">UI development</span>, and practical <span className="text-[#e99b63] font-medium hover:[text-shadow:_0_0_30px_rgba(233,155,99,0.8)]">front-end techniques</span>.
                </p>
                <p data-aos="fade-up" data-aos-delay="200">
                    My content has reached over <span className="text-[#e99b63] font-bold text-2xl hover:[text-shadow:_0_0_30px_rgba(233,155,99,0.8)]">82,000</span> views, with my most-watched video gaining more than <span className="text-[#e99b63] font-bold text-2xl hover:[text-shadow:_0_0_30px_rgba(233,155,99,0.8)]">25,000</span> views in just a few minutes—demonstrating strong audience engagement and interest in <span className="text-[#e99b63] font-medium hover:[text-shadow:_0_0_30px_rgba(233,155,99,0.8)]">real-world coding processes</span>.
                </p>
                <p data-aos="fade-up" data-aos-delay="300">
                    Through content creation, I aim to document my progress, <span className="text-[#e99b63] font-medium hover:[text-shadow:_0_0_30px_rgba(233,155,99,0.8)]">inspire other beginners</span>, and contribute to the <span className="text-[#e99b63] font-medium hover:[text-shadow:_0_0_30px_rgba(233,155,99,0.8)]">developer community</span> by sharing practical insights and hands-on examples.
                </p>
            </div>

            <div
                className="btn mt-16"
                data-aos="zoom-in"
                data-aos-delay="400"
            >
                <a
                    href="https://www.tiktok.com/@eng_ma7moud_fat7y?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#e99b63] hover:bg-[#d6854d] text-black font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(233,155,99,0.3)] hover:shadow-[0_0_50px_rgba(233,155,99,0.5)]"
                >
                    <FaTiktok className="text-2xl" />
                    <span>VIEW MY ACCOUNT</span>
                </a>
            </div>
        </main>
    )
}

export default Community