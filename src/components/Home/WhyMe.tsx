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
        <div className='flex flex-row items-center justify-between'>
            {/* Why Me Text Section */}
            <section className="relative w-full h-[60vh] md:h-[60vh] sm:h-[60vh] flex justify-center items-center flex-row px-4 sm:px-8 lg:px-16">
                <img className='absolute top-0 right-0 opacity-60 -z-10' src={bgimg} alt="Gradient" />
                <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10'></div>
                <FloatingShapes />
                <div className="absolute inset-0 flex justify-center items-center px-4 sm:px-8">
                    <div className="w-full flex flex-col justify-center items-center relative z-10">
                        <div className="px-4 py-6 rounded-xl transition-all duration-500 ease-linear hover:scale-105 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-gray-50 hover:cursor-pointer flex flex-col items-center w-full max-w-md">
                            <button className="relative w-full sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full mb-6 sm:mb-10 flex items-center justify-center">
                                <h2 className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-2 text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-wide uppercase">
                                    Why Me?
                                </h2>
                            </button>
                            <Swiper
                                autoplay={{ delay: 4500, disableOnInteraction: false }}
                                slidesPerView={1}
                                spaceBetween={20}
                                loop={true}
                                modules={[Autoplay]}
                                className="mySwiper w-full"
                            >
                                {prons.map((item) => (
                                    <SwiperSlide
                                        key={item.id}
                                        className="text-lg sm:text-xl md:text-2xl leading-relaxed font-medium text-white/90 text-center"
                                    >
                                        {item.title}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            {/* Images Swiper Section */}
            <section className="relative w-full h-[60vh] md:h-[60vh] sm:h-[60vh] flex justify-center items-center px-4 sm:px-8 lg:px-16">
                <img className='absolute top-0 right-0 opacity-60 -z-10' src={bgimg} alt="Gradient" />
                <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10'></div>
                <FloatingShapes />
                <div className="absolute inset-0 flex justify-center items-center px-4 sm:px-8">
                    <div className="w-full flex justify-center items-center relative z-10">
                        <Swiper
                            autoplay={{ delay: 4500, disableOnInteraction: false }}
                            slidesPerView={1}
                            spaceBetween={20}
                            loop={true}
                            modules={[Autoplay]}
                            className="mySwiper w-full max-w-md"
                        >
                            {images.map((image) => (
                                <SwiperSlide
                                    key={image.id}
                                    className="relative cursor-pointer overflow-hidden rounded-lg hover:scale-105 transition-all duration-500 ease-linear shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                                >
                                    <img src={image.img} alt="" className="w-full h-auto object-cover hover:scale-105 transition-all duration-500 ease-linear" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default WhyMe;
