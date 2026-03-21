// // components/HeroSection.tsx

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const slides = [
//   {
//     id: 1,
//     image:
//       "https://ptsmake.com/wp-content/uploads/2025/02/ptsmake2025-02-04T044741.429Z-.webp",
//   },
//   {
//     id: 2,
//     image:
//       "/assets/images/hero1.jpg",
//   },
//   {
//     id: 3,
//     image:
//       "/assets/images/shaft.png",
//   },
// ];

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
//       {/* Slides */}
//       <div className="relative h-full w-full">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <Image
//               src={slide.image}
//               alt={`Slide ${slide.id}`}
//               fill
//               className="object-cover object-center"
//               priority={index === 0}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows - Desktop only */}
//       <button
//         onClick={prevSlide}
//         className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-3 transition-all"
//       >
//         <ChevronLeft className="h-6 w-6 text-black" />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-3 transition-all"
//       >
//         <ChevronRight className="h-6 w-6 text-black" />
//       </button>

//       {/* Slide Indicators - Mobile only */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`h-2 w-2 rounded-full ${
//               currentSlide === index ? "bg-white" : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }


// components/HeroSection.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

// ─── Bucket name ─────────────────────────────────────────────────────────────
const BUCKET = "hero-slides";
// ─────────────────────────────────────────────────────────────────────────────

type HeroSlide = {
  id: number;
  heading: string;
  subheading: string;
  cta_label: string;
  cta_href: string;
  badge?: string;
  image_filename: string; // e.g. "slide1.jpg" — stored in hero-slides bucket root
  sort_order: number;
};

type SlideWithImage = HeroSlide & {
  imageUrl: string;
};

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export default function HeroSection() {
  const [slides, setSlides] = useState<SlideWithImage[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSlides() {
      try {
        // 1. Fetch slide data from hero_slides table
        const { data, error } = await supabase
          .from("hero_slides")
          .select(
            "id, heading, subheading, cta_label, cta_href, badge, image_filename, sort_order"
          )
          .order("sort_order", { ascending: true });

        if (error || !data || data.length === 0) {
          console.error("[HeroSection] DB error:", error);
          setLoading(false);
          return;
        }

        // 2. Resolve public image URL from hero-slides bucket
        const slidesWithImages: SlideWithImage[] = (data as HeroSlide[]).map(
          (slide) => {
            const { data: urlData } = supabase.storage
              .from(BUCKET)
              .getPublicUrl(slide.image_filename);

            const imageUrl = isValidUrl(urlData.publicUrl)
              ? urlData.publicUrl
              : "";

            return { ...slide, imageUrl };
          }
        );

        setSlides(slidesWithImages);
      } catch (err) {
        console.error("[HeroSection] Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchSlides();
  }, []);

  // Auto-advance
  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // ── Loading skeleton ────────────────────────────────────────────────────────
  if (loading) {
    return (
      <section className="relative h-75 sm:h-100 md:h-125 lg:h-150 bg-gray-200 animate-pulse" />
    );
  }

  // ── No slides fallback ──────────────────────────────────────────────────────
  if (slides.length === 0) {
    return (
      <section className="relative h-75 sm:h-100 md:h-125 lg:h-150 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
        No slides found. Add rows to the <strong className="mx-1">hero_slides</strong> table.
      </section>
    );
  }

  // ── Slider ──────────────────────────────────────────────────────────────────
  return (
    <section className="relative h-75 sm:h-100 md:h-125 lg:h-150 overflow-hidden">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Image */}
            {slide.imageUrl ? (
              <Image
                src={slide.imageUrl}
                alt={slide.heading}
                fill
                className="object-cover object-center"
                priority={index === 0}
                sizes="100vw"
              />
            ) : (
              <div className="w-full h-full bg-gray-800" />
            )}

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

            {/* Text Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="px-6 sm:px-12 lg:px-20 max-w-2xl">
                <div
                  className={`transition-all duration-700 delay-300 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {/* Badge */}
                  {slide.badge && (
                    <span className="inline-block bg-[rgb(225,6,0)] text-white text-xs sm:text-sm font-semibold uppercase tracking-widest px-3 py-1 rounded mb-3 sm:mb-4">
                      {slide.badge}
                    </span>
                  )}

                  {/* Heading */}
                  <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4 drop-shadow-lg">
                    {slide.heading}
                  </h2>

                  {/* Subheading — hidden on small screens */}
                  <p className="hidden sm:block text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6 drop-shadow max-w-lg">
                    {slide.subheading}
                  </p>

                  {/* CTA Button */}
                  <a
                    href={slide.cta_href}
                    className="inline-block bg-[rgb(225,6,0)] hover:bg-red-700 text-white font-semibold text-sm sm:text-base px-5 sm:px-7 py-2.5 sm:py-3 rounded transition-all duration-200 shadow-lg"
                  >
                    {slide.cta_label} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    
      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-[rgb(225,6,0)] w-6"
                : "bg-white/60 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
}