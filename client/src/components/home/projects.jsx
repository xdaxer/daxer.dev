import React from "react";
import { useState } from "react";
import ProjectModal from "./projectModal";
const projects = [
  {
    name: "Polymind",
    githubUrl: "https://github.com/xdaxer/portfolio",
    url: "https://polymind.daxer.dev",
    icon: "/projects/polymind.svg",
    Techs: ["react", "express", "mongodb", "nodejs"],
    status: "Completed",
    progress: 100,
    started: "October 2025",
    type: "Full-Stack Web App",
    team: "Solo Project",

    description:
      "Polymind is a full-stack AI platform that lets users send one prompt to multiple AI models (GPT, Gemini, DeepSeek, Perplexity) and compare results side-by-side in a single interface.",

    fullDescription:
      "Polymind is designed as a multi-model AI workspace for both comparison and creation. The user starts with a single prompt input, then the system sends the same request to multiple AI models in parallel and renders each response in its own card. While results are loading, each card shows a dedicated loading state, making the comparison flow clear and responsive. Once responses arrive, users can either copy a result or continue the conversation by selecting the best answer path. After a path is selected, that response becomes the active context and the conversation continues from it. Beyond text comparison, Polymind also supports AI-powered image, video, and music generation, as well as a Prompt Wizard that helps users refine prompts for better output quality.",
    keyFeatures: [
      "Multi-model prompt execution in parallel",
      "Side-by-side AI response comparison",
      "AI image, video, and music generation",
      "Prompt Wizard for prompt enhancement",
    ],

    challenges: [
      "Handling parallel requests and response timing across multiple AI providers",
      "Designing a responsive comparison UI that stays readable on different screen sizes",
      "Maintaining conversation context and selected-answer flow across models",
    ],

    keyLearnings: [
      "Advanced async state management for parallel AI workflows",
      "Integrating and normalizing multiple AI provider APIs",
      "Designing UX for comparison-heavy and interactive AI interfaces",
    ],

    allFeatures: [
      "Send one prompt to multiple AI models simultaneously",
      "Compare model outputs side-by-side in a single screen",
      "Continue the conversation from a selected answer path",
      "Copy any response instantly",
      "Generate AI images, videos, and music",
      "Improve prompts with Prompt Wizard",
      "Store chat history and preserve selected model flow",
    ],
  },
  
];
function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  
  return (
    <div className="w-full flex flex-col gap-1 lg:h-70 overflow-y-auto contact-scroll rounded-2xl text-black p-5 border border-white/10 bg-black/15 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
      <p className=" text-lg font-semibold text-white">Projects</p>

      <ProjectModal
        open={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />

      {projects.map((project) => (
        <div
          key={project.name}
          onClick={() => openModal(project)}
          className="cursor-pointer min-h-15 rounded-md bg-white/5 hover:bg-white/10 flex items-center px-3 gap-3 transition-colors"
        >
          <div className="flex items-center bg-white/9 p-2 rounded-md">
            <img
              src={project.icon}
              className="h-6 select-none"
              alt={project.name}
            />
          </div>
          <p className="text-white">{project.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
