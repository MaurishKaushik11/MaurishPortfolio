"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Myskills } from "@/components/Myskills";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <HowIWork />
        <Experience />
        <Projects />
        <Myskills />
        <Contact />
      </main>
    </div>
  );
}
