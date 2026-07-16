"use client";

import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { site } from "@/lib/content";

export const Contact = () => {
  const channels = [
    {
      href: site.links.linkedin,
      icon: <IconBrandLinkedin className="h-4 w-4" />,
      label: "LinkedIn",
      detail: "Work & recommendations",
    },
    {
      href: `mailto:${site.email}`,
      icon: <IconMail className="h-4 w-4" />,
      label: "Email",
      detail: site.email,
    },
    {
      href: `tel:${site.phone}`,
      icon: <IconPhone className="h-4 w-4" />,
      label: "Phone",
      detail: site.phoneDisplay,
    },
    {
      href: site.links.github,
      icon: <IconBrandGithub className="h-4 w-4" />,
      label: "GitHub",
      detail: "@MaurishKaushik11",
    },
    {
      href: site.links.x,
      icon: <IconBrandX className="h-4 w-4" />,
      label: "X",
      detail: "@maurishkaushik",
    },
  ];

  const hubPreview = [
    "Resume",
    "LinkedIn",
    "GitHub",
    "X",
    "Email",
    "More",
  ];

  return (
    <section id="contact" className="section-pad section-space pb-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-accent">
              Connect
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-ink leading-[1.05]">
              One hub for everything. Or reach me directly.
            </h2>
            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Open to roles where scaling systems, refining workflows, and
            shipping product matter. Tap the hub for all links in one place —
            resume, socials, and more — or use a channel below if you already
            know how you want to connect.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="btn-secondary"
              >
                Email Maurish
              </a>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Resume PDF
              </a>
            </div>
          </motion.div>

          {/* Linktree hub — interactive primary connect surface */}
          <motion.a
            href={site.links.linktree}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            whileHover={{ y: -4 }}
            className="link-hub group relative block overflow-hidden rounded-2xl p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <div className="relative overflow-hidden rounded-[0.9rem] bg-[#03140a]/80 px-6 py-7 text-emerald-50 sm:px-8 sm:py-9">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,#22c55e88,transparent_70%)] opacity-50 transition duration-500 group-hover:opacity-80 group-hover:scale-110"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[#14532d] blur-2xl opacity-70 transition duration-500 group-hover:opacity-90"
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-accent">
                      Link hub
                    </p>
                    <p className="mt-3 font-display text-3xl sm:text-4xl tracking-tight text-emerald-50">
                      All my links
                    </p>
                    <p className="mt-2 text-sm text-emerald-200/70 leading-relaxed max-w-xs">
                      Resume, LinkedIn, GitHub, socials — one tap, always up to
                      date.
                    </p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/15 text-accent transition duration-300 group-hover:bg-accent group-hover:text-black group-hover:rotate-12">
                    <IconArrowUpRight className="h-5 w-5" />
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {hubPreview.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-emerald-500/30 bg-[#052e16] px-3 py-1 text-xs font-medium tracking-wide text-emerald-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-emerald-500/25 pt-5">
                  <span className="text-sm font-medium text-emerald-300/80">
                    linktr.ee/maurishkaushik
                  </span>
                  <span className="text-sm font-semibold text-accent transition group-hover:text-emerald-200">
                    Open hub →
                  </span>
                </div>
              </div>
            </div>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-2">
            Direct channels
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group glass-panel glass-panel-hover flex items-start gap-3 rounded-xl px-4 py-4 transition"
              >
                <span className="mt-0.5 text-accent">
                  {link.icon}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink group-hover:text-accent">
                    {link.label}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {link.detail}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        <div className="hairline mt-16 mb-6" />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name} · {site.role}
        </p>
      </div>
    </section>
  );
};
