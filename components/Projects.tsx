"use client";

import { useInView } from "react-intersection-observer";
import { motion, type Variants } from "framer-motion"; // ✅ Correct import with typing
import Card from "./Card";
import { TypeAnimation } from "react-type-animation";

export const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: "200px 0px",
  });

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 90 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        duration: 1,
        ease: "easeOut",
      },
    }),
  };

  const cards = [
    {
      title: "Financial Assistant System",
      image: "/portfolio.png",
      link: "https://github.com/MaurishKaushik11/Financial-Assistant-System",
      tags: ["AI", "Financial Analysis", "Investment", "Python"],
      description:
        "Engineered predictive algorithms using AI for in-depth financial analysis, encompassing income, expenses, debts, and assets. Delivered tailored investment recommendations and prudent investment guidelines based on comprehensive financial insights.",
    },
    {
      title: "DevSync – Real-Time Collaborative Code Editor",
      image: "/portfolio-2.png",
      link: "https://github.com/MaurishKaushik11/DevSync",
      tags: ["React", "Spring Boot", "WebSocket", "Redis", "PostgreSQL", "Docker"],
      description:
        "Developed a real-time collaborative code editor with an intuitive UI using React and Spring Boot, enabling multi-user live editing. Integrated WebSocket, Redis, and PostgreSQL for seamless sync, and containerized the application for efficient user experience.",
    },
    {
      title: "Netflix Clone",
      image: "/portfolio.png",
      link: "https://github.com/MaurishKaushik11/Netflix-Clone",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      description:
        "Built a Netflix clone with HTML, CSS, and JavaScript featuring movie and TV show catalog, responsive design, and trailer functionality. Demonstrates modern web development skills and UI/UX design principles.",
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

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-6xl">
        {cards.map((project, index) => (
          <motion.div
            key={project.title}
            custom={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            className="w-full"
          >
            <Card
              title={project.title}
              image={project.image}
              link={project.link}
              tags={project.tags}
              description={project.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
