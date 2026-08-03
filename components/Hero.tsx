"use client";

import { motion } from "motion/react";
import { Spotlight } from "./ui/Spotlight";
import { site } from "@/lib/content";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden section-pad pt-28 pb-24 md:pt-36 md:pb-32 min-h-[92vh] flex flex-col justify-center">
      <div aria-hidden className="absolute inset-0 grid-fade opacity-70" />
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#22c55e"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[5%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,#22c55e66,transparent_68%)] opacity-50 animate-[drift_18s_ease-in-out_infinite] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-8%] bottom-[10%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,#14532d88,transparent_70%)] opacity-60 animate-[pulse-glow_5s_ease-in-out_infinite]"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-7 text-[11px] font-semibold tracking-[0.28em] uppercase text-accent"
        >
          {site.role} · {site.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.05 }}
          className="font-display text-[clamp(2.75rem,7.5vw,5.75rem)] leading-[0.94] tracking-[-0.03em] text-ink"
        >
          Hi I&apos;m{" "}
          <span className="text-gradient-green">{site.name}.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="mt-7 max-w-xl font-display text-xl md:text-2xl leading-snug text-ink/90"
        >
          {site.headline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="mt-5 max-w-lg text-[15px] md:text-base leading-relaxed text-muted-foreground"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href="#experience" className="btn-primary">
            View experience
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Resume
          </a>
          <a
            href={site.links.linktree}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-1.5"
          >
            All my links →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
