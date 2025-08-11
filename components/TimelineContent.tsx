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
        className="mb-2 text-lg font-normal text-neutral-800 md:text-lg dark:text-neutral-200"
      >
        {line}
      </h3>
    ))}
    <div className="grid grid-cols-2 gap-4 mt-4">
      {images.map((src, idx) => (
        <Image
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
            "https://plus.unsplash.com/premium_photo-1681426673022-db3d911ea11a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1664392271317-132e491d2e7c?q=80&w=1050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            "https://plus.unsplash.com/premium_photo-1681426673022-db3d911ea11a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1664392271317-132e491d2e7c?q=80&w=1050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            "https://plus.unsplash.com/premium_photo-1681426673022-db3d911ea11a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1664392271317-132e491d2e7c?q=80&w=1050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
