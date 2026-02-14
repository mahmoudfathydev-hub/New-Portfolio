import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import projectsData from "../../Data/ProjectsData.json";
import { getAssetPath } from "../../utils/paths";
interface ProjectImage {
  id: number;
  img: string;
}
interface Project {
  id: number;
  name: string;
  desc: string;
  features: string[];
  tools_and_libraries: string[];
  architecture: string[];
  design_system: string[];
  status: string[];
  goal: string;
  images: ProjectImage[];
  video?: string;
  github?: string;
  netlify?: string;
  vercel?: string;
}
interface ProjectsData {
  projects: Project[];
}
export default function ProjectsSection() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const data = projectsData as ProjectsData;
  const projects = data.projects.map((project) => ({
    ...project,
    images: project.images.map((img) => ({
      ...img,
      img: getAssetPath(img.img.replace(/^\//, "")),
    })),
  }));

  const handleProjectClick = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  const hasMoreProjects = projects.length > 6;

  // Sort projects by ID in descending order (newest first)
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);
  const sortedDisplayProjects = showAll
    ? sortedProjects
    : sortedProjects.slice(0, 6);

  return (
    <div
      id="project"
      className="flex flex-col items-center justify-center projects-section py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="section-title text-center mb-16" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          My{" "}
          <span className="text-[#e99b63] [text-shadow:_0_0_10px_rgba(233,155,99,0.3)]">
            Projects
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 w-full">
        {sortedDisplayProjects.map((project, index) => {
          const firstImage = project.images[0]?.img;
          return (
            <motion.div
              key={project.id}
              className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-[#e99b63]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(233,155,99,0.15)] flex flex-col"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="project-image-wrapper h-56 overflow-hidden relative">
                {firstImage && (
                  <img
                    src={firstImage}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      console.error("Image failed to load:", firstImage);
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
              </div>
              <div className="project-info p-6 flex flex-col flex-grow">
                <h2
                  data-aos="fade-left"
                  className="flex items-center justify-center text-2xl font-bold text-white mb-3 group-hover:text-[#e99b63] transition-colors"
                >
                  {project.name}
                </h2>
                <p
                  data-aos="fade-right"
                  className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-3"
                >
                  {project.desc}
                </p>
                <div
                  className="project-links flex items-center justify-center mt-auto  gap-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 hover:text-[#e99b63] text-2xl transition-colors"
                      title="View Code"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {(project.netlify || project.vercel) && (
                    <a
                      href={project.netlify || project.vercel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white  flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 hover:text-[#e99b63] text-2xl transition-colors"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Show More/Less Button */}
      {hasMoreProjects && (
        <div className="mt-12 flex justify-center w-fit">
          <button
            onClick={() => setShowAll(!showAll)}
            className="relative w-auto min-w-[300px] h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full px-6 transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-2 text-white font-medium">
              <FaArrowDown
                className={`text-lg transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              />
              {showAll ? "Show Less" : "Show All Projects"}
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
