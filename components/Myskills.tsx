"use client";

import { motion } from "motion/react";
import { capabilities, leadership, softSkills } from "@/lib/content";
import { MarqueeDemo } from "./MarqueeDemo";

export const Myskills = () => {
  return (
    <section id="skills" className="section-pad section-space bg-surface/60">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-muted-foreground">
            Capabilities
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-ink leading-[1.1]">
            Product skills first — light technical fluency after
          </h2>
          <p className="mt-5 text-muted-foreground text-base leading-relaxed max-w-2xl">
            The marquee is weighted toward AI product management, prototypes,
            and delivery tools — not a full-stack résumé dump.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <MarqueeDemo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
            <h3 className="font-display text-3xl text-ink">
              Product management
            </h3>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent">
              Core
            </p>
          </div>
          <ul className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {capabilities.product.map((item) => (
              <li
                key={item}
                className="border-b border-[color-mix(in_oklab,var(--ink)_8%,transparent)] py-3 text-[15px] text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[15px] text-muted-foreground leading-relaxed">
            <span className="font-semibold text-ink">Also strong in: </span>
            {softSkills.join(" · ")}
          </p>
        </motion.div>

        <div className="hairline my-14" />

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <h3 className="font-display text-2xl text-ink">Product tools</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Jira, Trello, design, and analytics for day-to-day delivery
            </p>
            <ul className="mt-5 space-y-0">
              {capabilities.tools.map((item) => (
                <li
                  key={item}
                  className="border-b border-[color-mix(in_oklab,var(--ink)_8%,transparent)] py-2.5 text-[15px] text-muted-foreground last:border-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <h3 className="font-display text-2xl text-ink">
              Technical fluency
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Enough depth to partner with engineering — not a stack flex
            </p>
            <ul className="mt-5 space-y-0">
              {capabilities.technical.map((item) => (
                <li
                  key={item}
                  className="border-b border-[color-mix(in_oklab,var(--ink)_8%,transparent)] py-2.5 text-[15px] text-muted-foreground last:border-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="hairline my-16" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-muted-foreground">
            Leadership
          </p>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {leadership.map((item) => (
              <div key={item.org}>
                <h3 className="font-display text-2xl text-ink">{item.org}</h3>
                <p className="mt-1 text-sm font-semibold text-accent">
                  {item.role}
                </p>
                <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
