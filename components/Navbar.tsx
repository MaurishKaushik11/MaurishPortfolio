"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconCode,
  IconHome,
  IconLink,
  IconSparkles,
  IconMessageCircle,
} from "@tabler/icons-react";
import { site } from "@/lib/content";

export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-emerald-300" />,
      href: "#hero",
      onClick: () => scrollToSection("hero"),
    },
    {
      title: "Approach",
      icon: <IconSparkles className="h-full w-full text-emerald-300" />,
      href: "#approach",
      onClick: () => scrollToSection("approach"),
    },
    {
      title: "Experience",
      icon: <IconBriefcase className="h-full w-full text-emerald-300" />,
      href: "#experience",
      onClick: () => scrollToSection("experience"),
    },
    {
      title: "Work",
      icon: <IconCode className="h-full w-full text-emerald-300" />,
      href: "#work",
      onClick: () => scrollToSection("work"),
    },
    {
      title: "Connect",
      icon: <IconMessageCircle className="h-full w-full text-emerald-300" />,
      href: "#contact",
      onClick: () => scrollToSection("contact"),
    },
    {
      title: "Linktree",
      icon: <IconLink className="h-full w-full text-emerald-300" />,
      href: site.links.linktree,
      onClick: () => window.open(site.links.linktree, "_blank"),
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-emerald-300" />,
      href: site.links.linkedin,
      onClick: () => window.open(site.links.linkedin, "_blank"),
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-emerald-300" />,
      href: site.links.github,
      onClick: () => window.open(site.links.github, "_blank"),
    },
  ];

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center md:bottom-auto md:top-6">
      <div className="pointer-events-auto">
        <FloatingDock
          desktopClassName="translate-y-0 border-emerald-500/60 shadow-[0_0_40px_rgba(34,197,94,0.25)]"
          mobileClassName="translate-y-0"
          items={links}
        />
      </div>
    </div>
  );
}
