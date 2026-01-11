import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import HTML from "../../assets/Html.png"
import CSS from "../../assets/Css.png"
import BackgroundLightLines from '../UI/BackgroundLightLines';
const MyJourney = () => {
    const journeyCards = [
        {
            title: "First Step",
            content: (
                <>
                    My journey into programming began in <span className="text-[#e99b63] font-medium">2018</span> by chance.
                    That sparked my <span className="text-[#e99b63] font-medium">curiosity</span>, and I started exploring
                    programming on my own, even without access to a <span className="text-[#e99b63] font-medium">computer</span> at the time.
                </>
            ),
        },
        {
            title: "Official Learning",
            content: (
                <>
                    I officially began learning in <span className="text-[#e99b63] font-medium">2024</span> after finishing
                    <span className="text-[#e99b63] font-medium"> high school</span>. I enrolled in the
                    <span className="text-[#e99b63] font-medium"> Satr platform </span>
                    in Saudi Arabia, affiliated with the
                    <span className="text-[#e99b63] font-medium"> Ministry of Communications </span>
                    and the
                    <span className="text-[#e99b63] font-medium">
                        Saudi Federation for Cybersecurity, Programming, and Drones
                    </span>.
                </>
            ),
        },
        {
            title: "Practical Skills",
            content: (
                <>
                    In <span className="text-[#e99b63] font-medium">2025</span>, I learned
                    <span className="text-[#e99b63] font-medium"> JavaScript </span>
                    and <span className="text-[#e99b63] font-medium">React</span>.
                    I use <span className="text-[#e99b63] font-medium">Stack Overflow</span>,
                    <span className="text-[#e99b63] font-medium"> W3Schools</span>, and AI tools like
                    <span className="text-[#e99b63] font-medium"> ChatGPT</span>.
                    This journey taught me that <span className="text-[#e99b63] font-medium">consistency</span>
                    and <span className="text-[#e99b63] font-medium">curiosity</span> are key.
                </>
            ),
        },
    ];
    return (
        <main className="Journey flex flex-col items-center justify-center py-20 border-t border-white/40">
            <div className="container">
                <Swiper
                    spaceBetween={30}
                    centeredSlides
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="w-full max-w-2xl z-10"
                >
                    <BackgroundLightLines count={3} direction="left" rotate={0} />
                    {journeyCards.map((card) => (
                        <SwiperSlide
                            key={card.title}
                            className="flex justify-center opacity-40 transition-opacity duration-500
                        [&.swiper-slide-active]:opacity-100 z-10"
                        >
                            <div
                                className="w-full p-8 rounded-2xl
                            bg-white/5 backdrop-blur-md
                            border border-white/10
                            shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]
                            transition-all duration-500
                            swiper-slide-active:scale-105"
                            >
                                <h2 className="text-3xl font-semibold mb-6 tracking-tight text-white">
                                    {card.title}
                                </h2>
                                <p className="text-lg leading-relaxed text-white/80">
                                    {card.content}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <section className="mt-24 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
                    {[HTML, CSS].map((img, index) => (
                        <a key={index} href={img} download={`skill-${index + 1}.png`} className="group relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] xl:w-[520px] xl:h-[520px] flex items-center justify-center rounded-[3rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_40px_140px_-40px_rgba(0,0,0,0.75)] transition-all duration-700 hover:scale-[1.05] hover:border-[#e99b63]/60 cursor-pointer">
                            <div className="absolute inset-0 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_160px_#e99b63]" />
                            <BackgroundLightLines count={8} direction="left" rotate={45} />
                            <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 bg-[#e99b63] text-black font-bold uppercase text-sm font-sans px-3 py-1 rounded-md transition-opacity duration-300 pointer-events-none">
                                Click to download
                            </div>
                            <img src={img} alt="tech" className="relative w-[160px] sm:w-[250px] md:w-[260px] lg:w-[400px] xl:w-[420px] drop-shadow-[0_30px_50px_rgba(0,0,0,0.7)] transition-transform duration-700 group-hover:-translate-y-3 pointer-events-none" />
                        </a>
                    ))}
                </section>
            </div>
        </main>
    );
};
export default MyJourney;
