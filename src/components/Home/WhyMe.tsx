import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import FloatingShapes from '../UI/FloatingShapes';
import { getAssetPath } from '../../utils/paths';
const bgimg = getAssetPath("images/gradient.png");
const HomeEZY = getAssetPath("images/HomeEZY.png");
const HomeEZY2 = getAssetPath("images/HomeEZY2.png");
const LoginEZY = getAssetPath("images/LoginEZY.png");
const AboutEZY = getAssetPath("images/AboutEZY.png");
const WhyMe = () => {
    const prons = [
        { id: 1, title: "High-Performance Execution with an Uncompromising Focus on Quality" },
        { id: 2, title: "AI-Driven Workflow with a Constant Curiosity for Learning and Innovation" },
        { id: 3, title: "A Growth-Focused Developer Fueled by Ambition, Practical Experience, and Continuous Improvement" },
    ];
    const images = [
        { id: 1, img: HomeEZY },
        { id: 2, img: HomeEZY2 },
        { id: 3, img: LoginEZY },
        { id: 4, img: AboutEZY },
    ];
    return (
        <section className="relative w-full overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-24 px-4 sm:px-8 lg:px-16">

                {/* ================= Text Section ================= */}
                <div className="relative w-full lg:w-1/2 min-h-[60vh] flex justify-center items-center">

                    {/* Background */}
                    <img
                        className="absolute top-0 right-0 opacity-60 -z-10"
                        src={bgimg}
                        alt="Gradient"
                    />
                    <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%]
                                    shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10" />

                    <FloatingShapes />

                    {/* Content */}
                    <div className="relative z-10 w-full max-w-md flex flex-col items-center">
                        <div className="px-4 py-6 rounded-xl transition-all duration-500
                                        backdrop-blur-md border border-gray-50
                                        hover:scale-105 flex flex-col items-center w-full">

                            <button className="relative w-48 h-10 bg-gradient-to-r
                                                from-[#656565] to-[#e99b63]
                                                rounded-full mb-8 shadow-lg">
                                <h2 className="absolute inset-[3px] bg-black rounded-full
                                               flex items-center justify-center
                                               text-white text-2xl font-bold uppercase">
                                    Why Me?
                                </h2>
                            </button>

                            <Swiper
                                autoplay={{ delay: 4500, disableOnInteraction: false }}
                                slidesPerView={1}
                                loop
                                modules={[Autoplay]}
                                className="w-full"
                            >
                                {prons.map(item => (
                                    <SwiperSlide
                                        key={item.id}
                                        className="text-xl text-white/90 text-center"
                                    >
                                        {item.title}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                {/* ================= Images Section ================= */}
                <div className="relative w-full lg:w-1/2 min-h-[60vh] flex justify-center items-center">

                    {/* Background */}
                    <img
                        className="absolute top-0 right-0 opacity-60 -z-10"
                        src={bgimg}
                        alt="Gradient"
                    />
                    <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%]
                                    shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10" />


                    {/* Swiper */}
                    <Swiper
                        autoplay={{ delay: 4500, disableOnInteraction: false }}
                        slidesPerView={1}
                        loop
                        modules={[Autoplay]}
                        className="relative z-10 w-full max-w-md"
                    >
                        {images.map(image => (
                            <SwiperSlide
                                key={image.id}
                                className="overflow-hidden rounded-lg shadow-lg
                                           transition-all duration-500 hover:scale-105"
                            >
                                <img
                                    src={image.img}
                                    alt=""
                                    className="w-full h-auto object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
};export default WhyMe;
