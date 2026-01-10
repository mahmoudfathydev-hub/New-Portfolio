import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gradientBackground from '../../assets/gradient.png'

type Skill = string | { language: string; level: string };

interface Tab {
    id: number;
    name: string;
    skills: Skill[];
    cardColor: string;
}

const Skills: React.FC = () => {
    const skillsList: Tab[] = [
        {
            id: 1,
            name: "Frontend-Core",
            cardColor: "from-blue-400/40 to-blue-600/40",
            skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
        },
        {
            id: 2,
            name: "Libraries & Frameworks",
            cardColor: "from-green-400/40 to-green-600/40",
            skills: [
                "ReactJS",
                "Tailwind CSS",
                "Redux Toolkit",
                "Material UI",
                "Sass",
                "Styled Components",
                "Spline",
                "Swiper",
                "AOS",
            ],
        },
        {
            id: 3,
            name: "Tools",
            cardColor: "from-purple-400/40 to-purple-600/40",
            skills: [
                "Git",
                "GitHub",
                "All AI Tools",
                "VS Code",
                "Thunder Client",
                "Figma (Dev-Mode)",
                "Netlify",
            ],
        },
        {
            id: 4,
            name: "Languages",
            cardColor: "from-red-400/40 to-red-600/40",
            skills: [
                { language: "Arabic", level: "Native" },
                { language: "English", level: "B1/B2 (Intermediate)" },
                { language: "French", level: "A2 (Elementary)" },
                { language: "German", level: "A1 (Beginner)" },
            ],
        },
    ];

    const [activeTab, setActiveTab] = useState<number>(skillsList[0].id);
    const activeTabData = skillsList.find(tab => tab.id === activeTab);

    return (
        <div className="px-[100px] py-[150px] mt-4">
            <div className="w-[80%] mx-auto border-t-2 mb-6 border-gray-700"></div>
            <img className='absolute top-[100%] left-0 opacity-60 -z-10' src={gradientBackground} alt="Gradient" />
            <div className='h-0 w-[40rem] absolute top-[95%] left-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[150deg] -z-50'></div>

            <div className="grid grid-cols-12 gap-10">
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className="col-span-12 md:col-span-3 flex flex-col gap-4">
                    {skillsList.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                w-full py-4 rounded-2xl font-medium
                                border border-white/20
                                transition-all duration-300
                                ${activeTab === tab.id
                                    ? "bg-gradient-to-r from-[#656565]/60 to-[#e99b63]/60 text-white shadow-xl scale-105"
                                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                                }
                            `}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
                <div data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500" className="col-span-12 md:col-span-9">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 group">
                        <AnimatePresence mode="wait">
                            {activeTabData?.skills.map((skill, index) => (
                                <motion.div
                                    key={typeof skill === "string" ? skill : skill.language}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{
                                        delay: index * 0.5,
                                        duration: 0.5,
                                    }}
                                    className={`
                                        relative p-6 rounded-3xl
                                        bg-gradient-to-br ${activeTabData.cardColor}
                                        border border-white/20
                                        text-white font-medium
                                        flex flex-col items-center justify-center
                                        shadow-2xl
                                        transition-all duration-300
                                        
                                        hover:scale-110 hover:z-10
                                    `}
                                >
                                    {typeof skill === "string" ? (
                                        <span>{skill}</span>
                                    ) : (
                                        <>
                                            <span className="font-bold text-lg">
                                                {skill.language}
                                            </span>
                                            <span className="text-sm text-gray-200">
                                                {skill.level}
                                            </span>
                                        </>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;
