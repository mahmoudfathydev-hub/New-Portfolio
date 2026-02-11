import { motion } from "framer-motion";
import { FaCode, FaPalette, FaMobileAlt, FaRocket, FaChartLine, FaShieldAlt } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description: "Building responsive, interactive web applications with modern frameworks like React, Next.js, and Vue.js.",
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description: "Creating beautiful, user-friendly interfaces with attention to detail and modern design principles.",
    },
    {
      icon: FaMobileAlt,
      title: "Responsive Design",
      description: "Ensuring your website looks perfect on all devices, from mobile phones to desktop computers.",
    },
    {
      icon: FaRocket,
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, SEO, and best user experience.",
    },
    {
      icon: FaChartLine,
      title: "Web Analytics",
      description: "Setting up analytics and tracking to monitor website performance and user behavior.",
    },
    {
      icon: FaShieldAlt,
      title: "Security Best Practices",
      description: "Implementing security measures to protect your web application and user data.",
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-24 lg:px-[100px] py-12 md:py-[150px] mt-4 relative overflow-hidden">
      {/* Divider */}
      <div className="w-full md:w-[80%] mx-auto border-t-2 mb-6 border-gray-700"></div>

      {/* Section Title */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          My <span className="text-[#e99b63] [text-shadow:_0_0_10px_rgba(233,155,99,0.3)]">Services</span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          I offer comprehensive web development services to help bring your ideas to life.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-[#e99b63]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(233,155,99,0.15)]"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#656565]/60 to-[#e99b63]/60 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="text-2xl text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#e99b63] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
