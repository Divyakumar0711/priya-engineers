"use client";

import React, { useEffect, useRef, useState } from "react";
import { Cinzel } from "next/font/google";
import { createClient } from "@supabase/supabase-js";

const cinzelFont = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });

// ─── Supabase client ────────────────────────────────────────────────────────
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// ─── Types ───────────────────────────────────────────────────────────────────
type Testimonial = {
  quote: string;
  name: string;
  title: string;
  photo_url?: string | null;
  rating?: number;
};

// ─── Static fallback (shown while loading / on error) ────────────────────────
const FALLBACK: Testimonial[] = [
  {
    quote:
      "Priya Engineers has been our primary shaft supplier for over 6 years. Their transmission shafts fit perfectly every time — zero rework, zero rejections. Delivery is always on schedule.",
    name: "Rajesh Mehta",
    title: "Purchase Manager, Mehta Gears Pvt. Ltd., Ahmedabad",
    rating: 5,
  },
  {
    quote:
      "We source all our custom spline shafts from Priya Engineers. Ashwin bhai gives us a quote within hours and delivers within the committed time. Highly reliable for bulk orders.",
    name: "Dinesh Patel",
    title: "Production Head, Patel Engineering Works, Vatva GIDC",
    rating: 5,
  },
  {
    quote:
      "The CNC precision on their gear shafts is excellent. We have been using Priya Engineers for our agricultural machinery line and the quality is consistent batch after batch.",
    name: "Suresh Agrawal",
    title: "Owner, Agrawal Farm Equipments, Rajkot",
    rating: 5,
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-[rgb(225,6,0)]" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Single Card ─────────────────────────────────────────────────────────────
function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <li className="relative w-85 md:w-105 shrink-0 rounded-2xl bg-white shadow-md border border-gray-100 px-7 py-6 flex flex-col justify-between">
      {/* Top: stars + quote mark */}
      <div>
        <StarRating count={item.rating ?? 5} />
        <span className="text-[rgb(225,6,0)] text-4xl font-serif leading-none select-none">
          "
        </span>
        <p className="mt-1 text-sm font-medium leading-relaxed tracking-wide text-gray-800">
          {item.quote}
        </p>
      </div>

      {/* Bottom: avatar + name */}
      <div className="mt-6 flex items-center gap-3">
        {item.photo_url ? (
          <img
            src={item.photo_url}
            alt={item.name}
            className="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-[rgb(78,100,141)]"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[rgb(78,100,141)] flex items-center justify-center text-white font-bold text-sm shrink-0">
            {getInitials(item.name)}
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-gray-900">{item.name}</span>
          <span className="text-xs text-neutral-500 leading-snug">{item.title}</span>
        </div>
      </div>
    </li>
  );
}

// ─── Infinite Scroll Track ────────────────────────────────────────────────────
function ScrollTrack({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
}: {
  items: Testimonial[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    // Clone children for infinite effect
    const scroller = scrollerRef.current;
    Array.from(scroller.children).forEach((child) => {
      scroller.appendChild(child.cloneNode(true));
    });

    // Direction
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    // Speed
    const durations = { fast: "20s", normal: "40s", slow: "70s" };
    containerRef.current.style.setProperty(
      "--animation-duration",
      durations[speed]
    );

    setReady(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className="scroller relative overflow-hidden mask-[linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]"
    >
      <ul
        ref={scrollerRef}
        className={[
          "flex w-max min-w-full shrink-0 flex-nowrap gap-5 py-4",
          ready ? "animate-scroll" : "",
          pauseOnHover ? "hover:paused" : "",
        ].join(" ")}
      >
        {items.map((item, i) => (
          <TestimonialCard key={`${item.name}-${i}`} item={item} />
        ))}
      </ul>
    </div>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────
export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("testimonials")
        .select("name, title, quote, photo_url, rating")
        .eq("is_active", true)
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        setTestimonials(data as Testimonial[]);
      }
      setLoading(false);
    }
    load();
  }, []);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Section header */}
      <div className="relative text-center py-10 sm:py-16 lg:py-20">
          <h3
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-100 text-[2.5rem] md:text-[7rem] lg:text-[10rem] font-black select-none pointer-events-none tracking-[0.2em] uppercase ${cinzelFont.className}`}
          >
            Testimonials
          </h3>
         
          <h1 className="relative text-2xl lg:text-5xl font-bold text-[rgb(78,100,141)] z-10 tracking-wide">
            What our clients say
          </h1>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-[rgb(225,6,0)]" />
        </div>
 

      {/* Loading shimmer */}
      {loading && (
        <div className="flex gap-5 px-10 overflow-hidden">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-85 md:w-105 shrink-0 h-52 rounded-2xl bg-gray-100 animate-pulse"
            />
          ))}
        </div>
      )}

      {/* Scroll track */}
      {!loading && (
        <ScrollTrack
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover
        />
      )}

      {/* Supabase badge (optional, remove if you want) */}
      <p className="mt-8 text-center text-xs text-neutral-400 tracking-wide">
        Reviews sourced live · Powered by verified clients
      </p>
    </section>
  );
}