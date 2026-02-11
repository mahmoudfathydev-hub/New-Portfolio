import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import projectsData from "../../Data/ProjectsData.json";
import { getAssetPath } from "../../utils/paths";
import { useLoading } from "../../contexts/LoadingContext";

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

const ProjectInfoCom = () => {
  const { id } = useParams<{ id: string }>();
  const { hideLoading } = useLoading();
  const data = projectsData as ProjectsData;
  const projectData = data.projects.find((p) => p.id === Number(id));

  useEffect(() => {
    // Hide loading spinner when component mounts
    hideLoading();
  }, [hideLoading]);

  // Transform paths to include base path
  const project = projectData
    ? {
        ...projectData,
        images: projectData.images.map((img) => ({
          ...img,
          img: getAssetPath(img.img.replace(/^\//, "")),
        })),
        video: projectData.video
          ? getAssetPath(projectData.video.replace(/^\//, ""))
          : undefined,
      }
    : null;

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl text-white">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="project-info-container min-h-screen py-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16" data-aos="fade-down">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          {project.name}
        </h1>
        <p className="text-xl text-white/80 leading-relaxed max-w-4xl">
          {project.desc}
        </p>
      </div>
      <div className="flex gap-6 mb-16" data-aos="fade-right">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:border-[#e99b63]/50 hover:bg-white/10 transition-all text-white"
          >
            <FaGithub className="text-2xl" />
            <span className="font-medium">Source Code</span>
          </a>
        )}
        {(project.netlify || project.vercel) && (
          <a
            href={project.netlify || project.vercel}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-[#e99b63] hover:bg-[#d6854d] rounded-full transition-all text-black font-bold"
          >
            <FaExternalLinkAlt className="text-xl" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
      {project.images && project.images.length > 0 && (
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white mb-8">
            Project <span className="text-[#e99b63]">Gallery</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image) => (
              <div
                key={image.id}
                className="group relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(233,155,99,0.15)] hover:shadow-[0_0_50px_rgba(233,155,99,0.3)] transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.img)}
              >
                <img
                  src={image.img}
                  alt={`${project.name} screenshot ${image.id}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">
                    Click to enlarge
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 left-6 text-white hover:text-[#e99b63] transition-colors z-[10000] bg-black/50 rounded-full p-2 hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <FaTimes className="text-3xl" />
          </button>
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Video */}
      {project.video && (
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white mb-8">
            Project <span className="text-[#e99b63]">Demo</span>
          </h2>
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(233,155,99,0.2)]">
            <video
              ref={(el) => {
                if (el) {
                  el.muted = true;
                  el.volume = 0;
                }
              }}
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-auto"
              poster={project.images[0]?.img}
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Goal */}
      <div className="mb-16" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-white mb-6">
          Project <span className="text-[#e99b63]">Goal</span>
        </h2>
        <p className="text-lg text-white/80 leading-relaxed bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          {project.goal}
        </p>
      </div>

      {/* Features */}
      <div className="mb-16" data-aos="fade-left">
        <h2 className="text-3xl font-bold text-white mb-6">
          Key <span className="text-[#e99b63]">Features</span>
        </h2>
        <ul className="space-y-4">
          {project.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-4 text-white/80 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-[#e99b63]/30 transition-all"
            >
              <span className="text-[#e99b63] text-xl mt-1">✓</span>
              <span className="flex-1">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tools & Libraries */}
      <div className="mb-16" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-white mb-6">
          Tools & <span className="text-[#e99b63]">Libraries</span>
        </h2>
        <div className="flex flex-wrap gap-3">
          {project.tools_and_libraries.map((tool, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/90 hover:border-[#e99b63]/50 hover:text-[#e99b63] transition-all"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Architecture */}
      <div className="mb-16" data-aos="fade-left">
        <h2 className="text-3xl font-bold text-white mb-6">
          <span className="text-[#e99b63]">Architecture</span> & Structure
        </h2>
        <ul className="space-y-3">
          {project.architecture.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4 text-white/80 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4"
            >
              <span className="text-[#e99b63] font-bold">•</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Design System */}
      <div className="mb-16" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-white mb-6">
          Design <span className="text-[#e99b63]">System</span>
        </h2>
        <ul className="space-y-3">
          {project.design_system.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4 text-white/80 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4"
            >
              <span className="text-[#e99b63] font-bold">•</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Status */}
      <div className="mb-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-white mb-6">
          Project <span className="text-[#e99b63]">Status</span>
        </h2>
        <ul className="space-y-3">
          {project.status.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4 text-white/80 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4"
            >
              <span className="text-[#e99b63] text-xl">◆</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectInfoCom;
