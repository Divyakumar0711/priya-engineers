"use client";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Card from "@/components/ui/card";
import { Cinzel } from "next/font/google";
import LayoutGrid from "@/components/ui/layout-grid";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const cinzelFont = Cinzel({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const testimonials = [
  {
    quote: "It was the best of times, it was the worst of times...",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote: "To be, or not to be...",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* Welcome Section */}
      <section className="pt-10 sm:pt-16 lg:pt-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="relative flex flex-col items-center space-y-4">
              <Image
                src="/assets/images/25_years_logo.png"
                alt="25_logo.png"
                width={500}
                height={500}
                className="w-80 md:w-[400px] lg:w-[500px]"
              />
              <div>
                <h2
                  className={`lg:text-4xl text-3xl font-bold text-gray-900 tracking-wider text-center ${cinzelFont.className}`}
                >
                  <span className="text-[rgb(225,6,0)]">YEARS</span>{" "}
                  <span className="text-black">OF</span>{" "}
                  <span className="text-[rgb(78,100,141)]">EXCELLENCE</span>
                </h2>
              </div>
            </div>

            <div className="flex items-center">
              <ContainerScroll
                titleComponent={
                  <div className="mb-5">
                    <h1 className="text-2xl font-semibold text-black dark:text-white tracking-wide">
                      Welcome to <br />
                      <span
                        className={`text-3xl md:text-[6rem] font-bold mt-1 leading-none text-[rgb(225,6,0)] ${cinzelFont.className}`}
                      >
                        PRIYA
                      </span>
                      <br />
                      <span
                        className={`text-3xl md:text-[6rem] font-bold mt-1 leading-none text-[rgb(78,100,141)] ${cinzelFont.className}`}
                      >
                        ENGINEERS
                      </span>
                    </h1>
                  </div>
                }
              >
                <div className="max-h-full overflow-y-auto px-2 sm:px-3 text-left scrollbar-hide tracking-wide">
                  <p className="text-base sm:text-lg text-black mb-4 sm:mb-6 leading-relaxed">
                    Our engineers are committed to deliver optimal performance,
                    durability, and efficiency.
                  </p>
                  <p className="text-base sm:text-lg text-black mb-4 sm:mb-6 leading-relaxed">
                    With advanced manufacturing facilities and strict quality
                    control measures, we ensure excellence and consistency.
                  </p>
                </div>
              </ContainerScroll>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-10 sm:py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center py-10 sm:py-16 lg:py-20 tracking-wide">
            <h3
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[2.5rem] md:text-[7rem] lg:text-[10rem] font-black select-none pointer-events-none tracking-[0.2em] uppercase ${cinzelFont.className}`}
            >
              Products
            </h3>

            <h1
              className={`relative mt-6 sm:mt-8 lg:mt-18 text-2xl lg:text-6xl font-bold text-[rgb(78,100,141)] z-10 `}
            >
              What We Deliver
            </h1>
          </div>

          <Card />

          <div className="flex justify-center mt-6 sm:mt-12">
            <Link
              href="/products"
              className="bg-[rgb(78,100,141)] text-white text-lg px-6 sm:px-10 py-2 sm:py-4 rounded-full hover:bg-[rgb(225,6,0)] transition"
            >
              More Products
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center py-10 sm:py-16 lg:py-20">
            <h3
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 text-[2.5rem] md:text-[7rem] lg:text-[10rem] font-black select-none pointer-events-none tracking-[0.2em] uppercase ${cinzelFont.className}`}
            >
              Industries
            </h3>

            <h1 className="relative mt-6 sm:mt-8 lg:mt-18 text-2xl lg:text-6xl font-bold text-[rgb(78,100,141)] z-10 tracking-wide">
              Who We Serve
            </h1>
          </div>

          <LayoutGrid />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 sm:py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center py-10 sm:py-16 lg:py-20">
            <h3
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[2rem] md:text-[7rem] lg:text-[10rem] font-black select-none pointer-events-none tracking-[0.2em] uppercase ${cinzelFont.className}`}
            >
              Testimonials
            </h3>

            <h1 className="relative mt-6 sm:mt-8 lg:mt-18 text-2xl lg:text-6xl font-bold text-[rgb(78,100,141)] z-10 tracking-wide">
              What our clients say
            </h1>
          </div>

          <div className="mt-8 sm:mt-12 p-2 sm:p-10 rounded-md flex flex-col items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center py-10 sm:py-16 lg:py-20">
            <h3
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 text-[3.5rem] md:text-[7rem] lg:text-[10rem] font-black select-none pointer-events-none tracking-[0.2em] uppercase ${cinzelFont.className}`}
            >
              Contact
            </h3>

            <h1 className="relative mt-6 sm:mt-8 lg:mt-18 text-2xl lg:text-6xl font-bold text-[rgb(78,100,141)] z-10">
              Get in Touch With Us
            </h1>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-black text-lg font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full p-4 text-lg text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label className="block text-black text-lg font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-4 text-lg text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div>
              <label className="block text-black text-lg font-medium mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full p-4 text-lg text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[rgb(78,100,141)] text-white font-medium px-10 py-4 rounded-3xl hover:bg-[rgb(225,6,0)] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
