"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { experience, site } from "@/lib/content";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden section-pad pt-32 pb-20 md:pt-40 md:pb-28 min-h-[92vh] flex flex-col justify-end">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[8%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_68%)] opacity-50 animate-[drift_20s_ease-in-out_infinite]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-7 text-[11px] font-semibold tracking-[0.28em] uppercase text-muted-foreground"
          >
            {site.role} · {site.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-[clamp(2.75rem,7.5vw,5.75rem)] leading-[0.94] tracking-[-0.03em] text-ink"
          >
            {site.name}
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
              All my links
              <span aria-hidden className="text-accent">
                →
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-14 pt-8 border-t border-[color-mix(in_oklab,var(--ink)_10%,transparent)]"
          >
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-4">
              Experience
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {experience.map((job) => (
                <div key={job.company}>
                  <p className="text-sm font-semibold text-ink tracking-wide">
                    {job.company}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {job.role}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative justify-self-center lg:justify-self-end w-full max-w-[360px]"
        >
          <div className="absolute -inset-3 -z-10 bg-accent/8" />
          <div className="overflow-hidden bg-surface border border-[color-mix(in_oklab,var(--ink)_8%,transparent)]">
            <Image
              src="/profile-2.jpeg"
              alt="Maurish Kaushik"
              width={720}
              height={900}
              priority
              className="h-[420px] w-full object-cover object-top md:h-[480px]"
            />
          </div>
          <p className="mt-3 text-xs tracking-wide text-muted-foreground">
            AI Product Manager · Prototypes · Roadmaps · Delivery
          </p>
        </motion.div>
      </div>
    </section>
  );
};
