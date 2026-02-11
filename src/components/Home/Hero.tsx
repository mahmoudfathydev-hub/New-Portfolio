import { IoDiamondOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <main
      className="
        flex
        flex-col-reverse
        gap-[20px]
        lg:flex-row
        lg:gap-0
        items-center
        justify-between
        overflow-hidden
        lg:mt-4
    "
    >
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-[50rem] ml-5 lg:ml-20 z-10 mt-14 lg:mt-20"
      >
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-2 text-white font-medium">
            <IoDiamondOutline className="text-lg" />
            INTRODUCING
          </div>
        </div>

        <h6 className="text-xl md:text-4xl sm:text-2xl lg:text-3xl font-semibold tracking-wider my-8 text-[#656565]">
          Hi, I am
          <span className="ml-2 text-white">Mahmoud Fathy</span>
        </h6>

        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[35rem]">
          As a Front-end Developer, I craft interactive, responsive, and
          visually stunning websites using React, Vite, and modern web
          technologies.
        </p>

        <div className="flex items-center gap-4 mt-10">
          <a
            href="/images/MYCV.pdf"
            download="Mahmoud_Fathy_CV.pdf"
            className="flex items-center gap-2 border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 text-sm sm:text-lg font-semibold rounded-full tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] hover:border-[#e99b63]/50"
          >
            <FaCode />
            Download CV
          </a>

          <Link
            to="/contact"
            className="flex items-center gap-2 border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 text-sm sm:text-lg font-semibold rounded-full tracking-wider bg-gray-300 text-black transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white"
          >
            <GoPerson />
            Contact
          </Link>
        </div>
      </div>

      {/* 3D MODEL SECTION */}
      <Spline
        className="
            w-full
            h-[300px]
            sm:h-[400px]
            lg:h-auto
            lg:w-auto
        "
        scene="https://prod.spline.design/7rQtL9C0CGUz-lqB/scene.splinecode"
      />
    </main>
  );
};

export default Hero;
