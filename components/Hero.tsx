import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { motion } from "motion/react";

export const Hero = () => {
  const words = [
    {
      text: "Full",
      className: "text-white",
    },
    {
      text: "Stack",
      className: "text-white",
    },
    {
      text: "Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full xl:h-screen  lg:h-[650px] px-6 md:px-20 pt-10 md:pt-10 gap-5 md:gap-10">
      
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="flex flex-col items-start justify-start space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi I&apos;m{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              MAURISH KAUSHIK.
            </span>
          </h1>

          <p className="text-gray-500 text-base md:text-lg lg:text-xl max-w-xl hidden md:block">
            Computer Science undergrad passionate about building impactful tech. Experienced in web development, AI, and collaborative projects. Always eager to learn and innovate.
          </p>

          <div className="w-full flex flex-col items-center md:items-start space-y-4">
            <div className="sm:justify-center items-center md:justify-start">
              <TypewriterEffect words={words} />
            </div>

            <div className="flex justify-center md:justify-start">
              <a
                href="/MAURISH KAUSHIK_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="MAURISH KAUSHIK_RESUME.pdf"
                className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
              >
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                  <span>Download Resume</span>
                  <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Profile Image */}
      <div className="relative group hidden md:block  ">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Image
            className="relative w-72 h-72  md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain shadow-xl overflow-hidden aspect-square"
            src="/maurish_profile.png"
            alt="profile"
            width={288}
            height={288}
          />
        </motion.div>
      </div>

    </div>
  );
};
