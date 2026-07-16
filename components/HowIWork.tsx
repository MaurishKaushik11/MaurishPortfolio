"use client";

import { motion } from "motion/react";
import { howIWork } from "@/lib/content";

export const HowIWork = () => {
  return (
    <section id="approach" className="section-pad section-space relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-accent">
            Approach
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-ink leading-[1.1]">
            How I scale, refine, and build workflows
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
            I take messy processes and turn them into clearer systems —
            prototyping fast, refining what works, and shipping workflows teams
            can actually run on.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 depth-stage">
          {howIWork.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-panel glass-panel-hover rounded-2xl p-7"
            >
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-accent">
                0{index + 1}
              </p>
              <h3 className="mt-3 font-display text-2xl text-ink tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
