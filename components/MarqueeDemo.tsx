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
        "relative w-auto overflow-hidden rounded-full border px-4 py-2.5 backdrop-blur",
        emphasis
          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-100 shadow-[0_0_20px_rgba(34,197,94,0.15)]"
          : "border-emerald-500/20 bg-emerald-950/40 text-emerald-200/80",
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

function MarqueeTrack({
  children,
  reverse = false,
  duration = "45s",
}: {
  children: React.ReactNode;
  reverse?: boolean;
  duration?: string;
}) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent"
      />
      <Marquee
        pauseOnHover
        reverse={reverse}
        className={`[--duration:${duration}]`}
      >
        {children}
      </Marquee>
    </div>
  );
}

export function MarqueeDemo() {
  const mid = Math.ceil(marqueePm.length / 2);
  const firstRow = marqueePm.slice(0, mid);
  const secondRow = marqueePm.slice(mid);

  return (
    <div className="relative flex w-full flex-col items-stretch justify-center py-2">
      <p className="mb-4 pl-1 text-[11px] font-semibold tracking-[0.22em] uppercase text-accent">
        Product craft · tools · workflows
      </p>
      <MarqueeTrack duration="45s">
        {firstRow.map((name) => (
          <SkillChip key={name} name={name} emphasis />
        ))}
      </MarqueeTrack>
      <div className="mt-2">
        <MarqueeTrack reverse duration="50s">
          {secondRow.map((name) => (
            <SkillChip key={name} name={name} emphasis />
          ))}
        </MarqueeTrack>
      </div>

      <p className="mb-3 mt-8 pl-1 text-[11px] font-semibold tracking-[0.22em] uppercase text-accent">
        Technical fluency
      </p>
      <MarqueeTrack duration="28s">
        {marqueeTech.map((name) => (
          <SkillChip key={name} name={name} />
        ))}
      </MarqueeTrack>
    </div>
  );
}
