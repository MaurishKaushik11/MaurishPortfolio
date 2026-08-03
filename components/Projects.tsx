"use client";

import { motion } from "motion/react";
import { work } from "@/lib/content";

export const Projects = () => {
  return (
    <section id="work" className="section-pad section-space relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-accent">
            Selected work
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-ink leading-[1.1]">
            A tight set of AI-minded product builds
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            Three pieces only — each framed as problem, approach, and outcome.
          </p>
        </motion.div>

        <div className="mt-14 space-y-6 depth-stage">
          {work.map((item, index) => {
            const isFeatured = "featured" in item && item.featured;
            return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28, rotateX: 6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className={`glass-panel glass-panel-hover grid gap-8 rounded-2xl p-8 lg:grid-cols-[0.85fr_1.15fr] ${
                isFeatured
                  ? "ring-1 ring-accent/35 lg:p-10"
                  : ""
              }`}
            >
              <div>
                {isFeatured && (
                  <p className="mb-3 inline-flex items-center rounded-full bg-accent/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                    Flagship product
                  </p>
                )}
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-muted-foreground">
                  {item.period}
                </p>
                <h3
                  className={`mt-3 font-display tracking-tight text-ink ${
                    isFeatured ? "text-4xl md:text-[2.75rem]" : "text-3xl"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-accent font-medium tracking-wide">
                  {item.tags.join("  ·  ")}
                </p>
                <div className="mt-6 flex flex-wrap gap-5">
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-sm font-semibold text-accent underline decoration-accent/50 underline-offset-4 transition hover:text-ink"
                  >
                    View live product →
                  </a>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-sm font-semibold text-ink underline decoration-accent/50 underline-offset-4 transition hover:text-accent"
                  >
                    Repository →
                  </a>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent">
                    Problem
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink">
                    {item.problem}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent">
                    Approach
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {item.approach}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent">
                    Outcome
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed font-medium text-ink">
                    {item.outcome}
                  </p>
                </div>
              </div>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
