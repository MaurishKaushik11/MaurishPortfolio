"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { marqueePm, marqueeTech } from "@/lib/content";

const SkillChip = ({
  name,
  emphasis = false,
}: {
  name: string;
  emphasis?: boolean;
}) => {
  return (
    <figure
      className={cn(
        "relative w-auto overflow-hidden border px-4 py-2.5",
        emphasis
          ? "border-[color-mix(in_oklab,var(--accent)_35%,transparent)] bg-accent/8 text-ink"
          : "border-[color-mix(in_oklab,var(--ink)_10%,transparent)] bg-surface/80 text-muted-foreground",
      )}
    >
      <figcaption
        className={cn(
          "whitespace-nowrap text-sm tracking-wide",
          emphasis ? "font-semibold" : "font-medium",
        )}
      >
        {name}
      </figcaption>
    </figure>
  );
};

export function MarqueeDemo() {
  const mid = Math.ceil(marqueePm.length / 2);
  const firstRow = marqueePm.slice(0, mid);
  const secondRow = marqueePm.slice(mid);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-2">
      <p className="mb-4 self-start text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground">
        Product management · tools · AI craft
      </p>
      <Marquee pauseOnHover className="[--duration:45s]">
        {firstRow.map((name) => (
          <SkillChip key={name} name={name} emphasis />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:50s]">
        {secondRow.map((name) => (
          <SkillChip key={name} name={name} emphasis />
        ))}
      </Marquee>

      <p className="mb-3 mt-8 self-start text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground">
        Technical fluency
      </p>
      <Marquee pauseOnHover className="[--duration:28s]">
        {marqueeTech.map((name) => (
          <SkillChip key={name} name={name} />
        ))}
      </Marquee>
    </div>
  );
}
