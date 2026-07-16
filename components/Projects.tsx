"use client";

import { motion } from "motion/react";
import { work } from "@/lib/content";

export const Projects = () => {
  return (
    <section id="work" className="section-pad section-space">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-muted-foreground">
            Selected work
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-ink leading-[1.1]">
            A tight set of AI-minded product builds
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            Three pieces only — each framed as problem, approach, and outcome.
            No filler clones.
          </p>
        </motion.div>

        <div className="mt-16">
          {work.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="grid gap-8 border-t border-[color-mix(in_oklab,var(--ink)_10%,transparent)] py-12 lg:grid-cols-[0.85fr_1.15fr]"
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-muted-foreground">
                  {item.period}
                </p>
                <h3 className="mt-3 font-display text-3xl text-ink tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-accent font-medium tracking-wide">
                  {item.tags.join("  ·  ")}
                </p>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex text-sm font-semibold text-ink underline decoration-[color-mix(in_oklab,var(--accent)_45%,transparent)] underline-offset-4 transition hover:text-accent"
                  >
                    View repository
                  </a>
                ) : null}
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                    Problem
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink">
                    {item.problem}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                    Approach
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {item.approach}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                    Outcome
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed font-medium text-ink">
                    {item.outcome}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
