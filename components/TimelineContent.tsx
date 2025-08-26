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
      <h3
        key={idx}
        className="mb-2 text-xl font-normal text-neutral-800 md:text-lg dark:text-neutral-200"
      >
        {line}
      </h3>
    ))}
    <div className="grid grid-cols-2 gap-4 mt-4">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Timeline image ${idx + 1}`}
          className="h-40 w-full rounded-lg object-cover shadow md:h-44 lg:h-90"
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
            "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            "https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ]}
        />
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
};
