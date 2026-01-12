import { getAssetPath } from '../../utils/paths';
const AboutImg = getAssetPath("images/AboutImg.png");
const CV = getAssetPath("images/Mahmoud_Fathy_CV.pdf");

const HeroAbout = () => {
  return (
    <main className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-12gap-y-40md:gap-x-20xl:max-w-screen-xl">
      <div
        data-aos="fade-down-right"
        className="img flex-1 flex justify-center md:justify-end"
      >
        <img
          src={AboutImg}
          alt="AboutImg"
          className="w-64 md:w-80 lg:w-96 rounded-xl shadow-xl transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div data-aos="fade-up-left" className="text flex-1 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white relative group">
          Who Am I?
          <span className="absolute left-0 -bottom-3 h-1 w-0 bg-[#e99b63] transition-all duration-500 group-hover:w-[250px]"></span>
        </h2>

        <p className="text-lg text-white">
          I’m{" "}
          <span className="font-bold text-[#e99b63]">
            Mahmoud Mohammed Fathy
          </span>
          <br />
          <span className="font-medium text-[#e99b63]">
            A Front-End Developer in the making
          </span>
        </p>

        <p className="text-white leading-relaxed">
          I’m a first-year Geography student with a strong passion for web
          development. While my academic path is different, my focus is clear —{" "}
          <span className="text-[#e99b63] font-semibold">building modern</span>,{" "}
          <span className="text-[#e99b63] font-semibold">interactive</span>, and
          user-focused web experiences using{" "}
          <span className="text-[#e99b63] font-semibold">React</span> and modern
          tools.
        </p>

        <p className="text-white leading-relaxed">
          I believe <span className="text-[#e99b63] font-semibold">skills</span>{" "}
          are built through{" "}
          <span className="text-[#e99b63] font-semibold">practice</span>,{" "}
          <span className="text-[#e99b63] font-semibold">curiosity</span>, and{" "}
          <span className="text-[#e99b63] font-semibold">consistency</span> —
          not just titles.
        </p>
        <button className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_20px_rgba(255,255,255,0.4)] rounded-full hover:scale-110 transition-all ease-in-out duration-700">
          <a
            className="absolute inset-[3px] bg-black hover:bg-gray-950 transition-all duration-300 ease-linear rounded-full flex items-center justify-center gap-2 text-white font-medium"
            href={CV}
            download="resume"
          >
            Download CV
          </a>
        </button>
      </div>
    </main>
  );
};

export default HeroAbout;
