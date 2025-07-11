"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "React JS",
    img: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
  },
  {
    name: "Vue JS",
    img: "https://img.icons8.com/?size=100&id=tbleCw0ch6QC&format=png&color=000000",
  },
  {
    name: "Javascript",
    img: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
  },
  {
    name: "Typescript",
    img: "https://img.icons8.com/?size=100&id=wpZmKzk11AzJ&format=png&color=000000",
  },
  {
    name: "Prisma",
    img: "https://img.icons8.com/?size=100&id=aqb9SdV9P8oC&format=png&color=000000",
  },
  {
    name: "Mongo DB",
    img: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
  },
  {
    name: "HTML",
    img: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  },
  {
    name: "CSS",
    img: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
  },
  {
    name: "Tailwind CSS",
    img: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
  },
  {
    name: "Python",
    img: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  },
  {
    name: "Java",
    img: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
  },
  {
    name: "Express JS",
    img: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
  },
  {
    name: "Git",
    img: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
  },
  {
    name: "Github",
    img: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
  },
  {
    name: "Next JS",
    img: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
}: {
  img: string;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-auto cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-lg font-bold leading-tight text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex max-h-auto p-6 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </div>
  );
}