import { motion } from "framer-motion";
import {
  FaTrophy,
  FaFire,
  FaMedal,
  FaStar,
  FaCode,
  FaGamepad,
} from "react-icons/fa";

const CodeWars = () => {
  const stats = [
    {
      icon: FaGamepad,
      title: "Rank",
      value: "3 kyu",
      description: "Advanced Level",
      color: "from-blue-400/40 to-blue-600/40",
    },
    {
      icon: FaTrophy,
      title: "Honor",
      value: "800",
      description: "Points Earned",
      color: "from-yellow-400/40 to-yellow-600/40",
    },
    {
      icon: FaFire,
      title: "Daily Practice",
      value: "Every Day",
      description: "Problem Solving",
      color: "from-red-400/40 to-red-600/40",
    },
    {
      icon: FaMedal,
      title: "Achievements",
      value: "265",
      description: "Unlocked",
      color: "from-purple-400/40 to-purple-600/40",
    },
  ];

  const achievements = [
    "Algorithm Optimization Skills",
    "Problem-Solving Mindset",
    "Clean Code Practices",
    "Performance-Oriented Solutions",
    "Modern JavaScript Mastery",
    "Functional Programming Skills",
    "Data Structures & Algorithms",
  ];

  return (
    <div className="px-4 sm:px-8 md:px-24 lg:px-[100px] py-12 md:py-[150px] mt-4 relative overflow-hidden">
      {/* Divider */}
      <div className="w-full md:w-[80%] mx-auto border-t-2 mb-6 border-gray-700"></div>

      {/* Section Title */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          CodeWars{" "}
          <span className="text-[#e99b63] [text-shadow:_0_0_10px_rgba(233,155,99,0.3)]">
            Achievements
          </span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Daily coding challenges to sharpen problem-solving skills and maintain
          technical excellence
        </p>
        <a
          href="https://www.codewars.com/users/mahmoudfathydev-hub"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-[#e99b63] hover:text-[#d6854d] transition-colors"
        >
          <FaCode />
          <span className="font-medium">View CodeWars Profile</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#e99b63]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(233,155,99,0.15)]"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#e99b63] transition-colors">
                {stat.value}
              </h3>
              <h4 className="text-lg font-semibold text-gray-300 mb-2">
                {stat.title}
              </h4>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </motion.div>
          );
        })}
      </div>
      <div className="mb-16" data-aos="fade-up">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Coding <span className="text-[#e99b63]">Excellence</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-[#e99b63]/30 transition-all"
            >
              <FaStar className="text-[#e99b63] text-lg" />
              <span className="text-white/90">{achievement}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-center" data-aos="fade-up">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-4">
            Next Goal: <span className="text-[#e99b63]">2 kyu Rank</span>
          </h3>
          <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
            <div
              className="bg-gradient-to-r from-[#656565] to-[#e99b63] h-4 rounded-full transition-all duration-500"
              style={{ width: "2.5%" }}
            >
              <span className="text-xs text-white font-medium flex items-center justify-center h-full">
                2.5%
              </span>
            </div>
          </div>
          <p className="text-gray-300">
            Currently 3 kyu • 48 Completed Kata • Leaderboard #57,626 • Honor
            Percentile: Top 7.713%
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeWars;
