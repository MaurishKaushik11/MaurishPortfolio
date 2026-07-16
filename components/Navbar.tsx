"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

const navItems = [
  { label: "Approach", href: "#approach" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Connect", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[color-mix(in_oklab,var(--ink)_8%,transparent)] bg-[color-mix(in_oklab,var(--background)_90%,transparent)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between section-pad py-4">
        <a href="#hero" className="font-display text-lg tracking-tight text-ink">
          Maurish Kaushik
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[13px] font-medium tracking-wide text-muted-foreground transition hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.links.linktree}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-[color-mix(in_oklab,var(--ink)_14%,transparent)] bg-surface/70 px-3.5 py-1.5 text-[13px] font-semibold text-ink backdrop-blur transition hover:border-accent hover:text-accent"
        >
          Links
          <span aria-hidden className="text-accent text-xs">
            ↗
          </span>
        </a>
      </nav>
    </header>
  );
}
