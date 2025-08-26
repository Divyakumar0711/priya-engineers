"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const TimelineSection = ({
  text,
  images,
}: {
  text: string[];
  images: string[];
}) => (
  <div>
    {text.map((line, idx) => (
      <h1
        key={idx}
        className="mb-2 text-lg sm:text-lg md:text-xl font-normal text-neutral-800 dark:text-neutral-200 leading-snug"
      >
        {line}
      </h1>
    ))}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {images.map((src, idx) => (
        <Image
          key={idx}
          src={src}
          alt={`Timeline image ${idx + 1}`}
          width={500}
          height={300}
          className="w-full h-48 sm:h-56 md:h-60 lg:h-72 rounded-lg object-cover shadow"
        />
      ))}
    </div>
  </div>
);

export const TimelineContent = () => {
  const data = [
    {
      title: "2015 - till",
      content: (
        <TimelineSection
          text={[
            "Expanded production capacity across India.",
            "Launched advanced gear systems for heavy industries.",
          ]}
          images={[
            "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop",
          ]}
        />
      ),
    },
    {
      title: "2005 - 2015",
      content: (
        <TimelineSection
          text={[
            "Expanded production capacity across India.",
            "Launched advanced gear systems for heavy industries.",
          ]}
          images={[
            "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop",
          ]}
        />
      ),
    },
    {
      title: "1995 - 2005",
      content: (
        <TimelineSection
          text={[
            "Expanded production capacity across India.",
            "Launched advanced gear systems for heavy industries.",
          ]}
          images={[
            "https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=1170&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=1170&auto=format&fit=crop",
          ]}
        />
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip px-4 sm:px-6 md:px-8">
      <Timeline data={data} />
    </div>
  );
};
