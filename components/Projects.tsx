"use client";

import { useInView } from "react-intersection-observer";
import { motion, type Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

export const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: "200px 0px",
  });

  const slideVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const projects = [
    {
      title: "Financial Assistant System",
      link: "https://github.com/MaurishKaushik11/Financial-Assistant-System",
      tags: ["AI", "Financial Analysis", "Investment", "Python"],
      description:
        "Engineered predictive algorithms using AI for in-depth financial analysis, encompassing income, expenses, debts, and assets. Delivered tailored investment recommendations and prudent investment guidelines based on comprehensive financial insights.",
    },
    {
      title: "DevSync – Real-Time Collaborative Code Editor",
      link: "https://github.com/MaurishKaushik11/DevSync",
      tags: ["React", "Spring Boot", "WebSocket", "Redis", "PostgreSQL", "Docker"],
      description:
        "Developed a real-time collaborative code editor with an intuitive UI using React and Spring Boot, enabling multi-user live editing. Integrated WebSocket, Redis, and PostgreSQL for seamless sync, and containerized the application for efficient user experience.",
    },
    {
      title: "Pipeline Editor DAG",
      link: "https://github.com/MaurishKaushik11/Pipeline-editor-DAG",
      tags: ["Python", "Data Pipeline", "DAG", "Workflow"],
      description:
        "A Python-based pipeline editor for creating and managing Directed Acyclic Graphs (DAGs). Enables visual workflow design and data processing pipeline management.",
    },
    {
      title: "RBAC UI",
      link: "https://github.com/MaurishKaushik11/RBAC-UI",
      tags: ["JavaScript", "RBAC", "User Management", "Security"],
      description:
        "Role-Based Access Control (RBAC) user interface for managing user permissions and roles. Provides secure access control and user management functionality.",
    },
    {
      title: "FAQ Project",
      link: "https://github.com/MaurishKaushik11/MaurishPandat-my_faq_project",
      tags: ["Web Development", "FAQ", "User Interface"],
      description:
        "A frequently asked questions (FAQ) project with an intuitive user interface for organizing and displaying common questions and answers.",
    },
    {
      title: "Netflix Clone",
      link: "https://github.com/MaurishKaushik11/Netflix-Clone",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Streaming"],
      description:
        "A complete Netflix clone built with HTML, CSS, and JavaScript. Features movie and TV show catalog, responsive design, trailer functionality, and modern streaming platform UI.",
    },
    {
      title: "CV Resume Builder",
      link: "https://github.com/MaurishKaushik11/CV-Resume-Builder",
      tags: ["React", "Resume Builder", "PDF Generation", "UI/UX"],
      description:
        "A modern CV and resume builder application that allows users to create professional resumes with customizable templates, real-time preview, and PDF export functionality.",
    },
  ];

  return (
    <div
      className="flex flex-col w-full items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 pt-10 md:pt-5"
      ref={ref}
    >
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <TypeAnimation
          sequence={["My Projects", 3000]}
          wrapper="h1"
          cursor={false}
          repeat={Infinity}
          className="text-3xl sm:text-4xl font-bold text-purple-500"
        />
      </div>

      {/* Sliding Projects */}
      <div className="w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            custom={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideVariants}
            className="mb-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 transition-colors"
                    >
                      <IconBrandGithub className="h-5 w-5 text-purple-400" />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-colors"
                    >
                      <IconExternalLink className="h-5 w-5 text-blue-400" />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
