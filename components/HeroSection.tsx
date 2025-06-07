// components/HeroSection.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1524514587686-e2909d726e9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1627807452502-0c8329fc710b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1582043568773-a7a2b57239f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
   <section className="relative h-[600px] overflow-hidden">
  {/* Slides */}
  <div className="relative h-full">
    {slides.map((slide, index) => (
      <div
        key={slide.id}
        className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={slide.image}
          alt={`Slide ${slide.id}`}
          fill
          className="object-cover object-center"
          priority={index === 0}
        />
      </div>
    ))}
  </div>

  {/* Navigation Arrows - Only for Desktop */}
  <button
    onClick={prevSlide}
    className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
  >
    <ChevronLeft className="h-6 w-6 text-black" />
  </button>

  <button
    onClick={nextSlide}
    className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
  >
    <ChevronRight className="h-6 w-6 text-black" />
  </button>

  {/* Slide Indicators - Only for Mobile */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 md:hidden">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`h-2 w-2 rounded-full ${
          currentSlide === index ? "bg-white" : "bg-white/50"
        }`}
      ></button>
    ))}
  </div>
</section>

  );
}
