"use client";

import { motion } from "motion/react";
import { howIWork } from "@/lib/content";

export const HowIWork = () => {
  return (
    <section id="approach" className="section-pad section-space">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-muted-foreground">
            Approach
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-ink leading-[1.1]">
            How I work as an AI product manager
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
            I sit at the intersection of product judgment and AI leverage —
            prototyping fast, scoping LLM features carefully, and running
            delivery with the tools teams already trust.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-0 sm:grid-cols-2">
          {howIWork.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="border-t border-[color-mix(in_oklab,var(--ink)_10%,transparent)] py-8 sm:odd:pr-10 sm:even:pl-10 sm:odd:border-r sm:odd:border-[color-mix(in_oklab,var(--ink)_10%,transparent)]"
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
