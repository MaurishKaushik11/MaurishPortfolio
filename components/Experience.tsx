"use client";

import { motion } from "motion/react";
import {
  achievements,
  certifications,
  education,
  experience,
  highlights,
} from "@/lib/content";

export const Experience = () => {
  return (
    <section id="experience" className="section-pad section-space relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-accent">
            Experience
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-ink leading-[1.1]">
            How I improved products — and sorted what was broken
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
            At SaaS Labs and TryKiya I focused on friction, clarity, and
            leverage — turning unclear problems into scaled, refined workflows.
          </p>
        </motion.div>

        <div className="mt-16 space-y-6 depth-stage">
          {experience.map((job, index) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 28, rotateX: 6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-panel glass-panel-hover grid gap-8 rounded-2xl p-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent">
                  {job.period}
                </p>
                <h3 className="mt-3 font-display text-3xl text-ink tracking-tight">
                  {job.role}
                </h3>
                <p className="mt-2 text-lg font-semibold text-gradient-green">
                  {job.company}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{job.focus}</p>
                <p className="mt-5 text-[15px] leading-relaxed text-ink/85">
                  {job.summary}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-4">
                  What I improved
                </p>
                <ul className="space-y-4">
                  {job.improvements.map((item) => (
                    <li
                      key={item}
                      className="relative pl-5 text-[15px] leading-relaxed text-muted-foreground"
                    >
                      <span className="absolute left-0 top-[0.55em] h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_#22c55e]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6"
            >
              <p className="font-display text-4xl md:text-5xl tracking-tight text-gradient-green">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-accent">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          <div className="glass-panel rounded-2xl p-7">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-accent">
              Education
            </p>
            <p className="mt-4 font-display text-2xl text-ink">
              {education.degree}
            </p>
            <p className="mt-1 text-muted-foreground">{education.school}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {education.period}
            </p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {education.detail}
            </p>
            <p className="mt-5 text-sm text-ink font-medium">
              {education.secondary.school}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {education.secondary.detail} · {education.secondary.period}
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-7">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-accent">
              Certifications & recognition
            </p>
            <ul className="mt-4 space-y-2.5">
              {certifications.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="absolute left-0 top-[0.55em] h-1 w-1 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-2.5">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 text-sm text-ink leading-relaxed"
                >
                  <span className="absolute left-0 top-[0.55em] h-1 w-1 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
