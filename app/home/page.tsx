"use client";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
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
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* Welcome Section - Like Priya engineers "25 Year Experience" */}
      <section className="py-20 lg:py-0 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-16 items-center">
            <div className="relative flex flex-col items-center space-y-4">
              <Image
                src="/assets/images/25_years_logo.png"
                alt="25_logo.png"
                width={500}
                height={500}
                className="w-60 sm:w-72 md:w-[400px] lg:w-[500px] h-auto"
              />
              <div className="mb-4">
                <h2
                  className={`lg:text-4xl font-bold text-gray-900 tracking-wider text-center ${cinzelFont.className}`}
                >
                  <span className="text-red-600">YEARS</span>{" "}
                  <span className="text-black">OF</span>{" "}
                  <span className="text-blue-600">EXCELLENCE</span>
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="flex items-center">
              <ContainerScroll
                titleComponent={
                  <>
                    <h1 className="text-2xl font-semibold text-black dark:text-white">
                      Welcome to <br />
                      <span
                        className={`text-3xl md:text-[6rem] font-bold mt-1 leading-none text-red-600 ${cinzelFont.className}`}
                      >
                        PRIYA
                      </span>
                      <br />
                      <span
                        className={`text-3xl md:text-[6rem] font-bold mt-1 leading-none text-blue-600 ${cinzelFont.className}`}
                      >
                        ENGINEERS
                      </span>
                    </h1>
                  </>
                }
              >
                <div
                  className="max-h-full overflow-y-auto px-3 text-left scrollbar-hide"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <p className="text-lg text-black mb-6 leading-relaxed">
                    Our engineers are committed to deliver optimal performance,
                    durability, and efficiency. Priya Engineers understand the
                    significant role these components work in the smooth
                    function of machinery and industrial procedures, which is
                    why Priya Engineers keep the latest technologies and strict
                    quality control measures in our manufacturing process.
                  </p>

                  <p className="text-lg text-black mb-8 leading-relaxed">
                    With a dedicated team of engineers manufacturing engineers
                    and advanced manufacturing facilities, Priya Engineers
                    confirm that engineers manufacturers products with highest
                    standards of excellence and consistency.
                  </p>

                  <p className="text-lg text-black mb-8 leading-relaxed">
                    With a dedicated team of engineers manufacturing engineers
                    and advanced manufacturing facilities, Priya Engineers
                    confirm that engineers manufacturers products with highest
                    standards of excellence and consistency.
                  </p>

                  <p className="text-lg text-black mb-8 leading-relaxed">
                    With a dedicated team of engineers manufacturing engineers
                    and advanced manufacturing facilities, Priya Engineers
                    confirm that engineers manufacturers products with highest
                    standards of excellence and consistency.
                  </p>
                </div>
              </ContainerScroll>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - 4 Main Products */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center py-20">
            <h3
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
               text-white text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem]
               font-black select-none pointer-events-none tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase"
            >
              Products
            </h3>

            <h1 className="relative mt-8 lg:mt-18 text-2xl lg:text-6xl font-bold text-blue-600 z-10">
              What We Deliver
            </h1>
          </div>
          <Card />
          <div className="flex justify-center mt-12">
            <button className="bg-blue-600 text-white text-lg px-10 py-4 rounded-full hover:bg-red-600 transition">
              More Products
            </button>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center py-20">
            <h3
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
               text-gray-100 text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem]
               font-black select-none pointer-events-none tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase"
            >
              Industires
            </h3>

            <h1 className="relative mt-8 lg:mt-18 text-2xl lg:text-6xl font-bold text-blue-600 z-10">
              Who We Serve
            </h1>
          </div>

          <LayoutGrid />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center py-20 ">
            <h3
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
               text-white text-[2.1rem]  md:text-[7rem] lg:text-[10rem]
               font-black select-none pointer-events-none tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase"
            >
              Testimonials
            </h3>

            <h1 className="relative mt-8 lg:mt-18 text-2xl lg:text-6xl font-bold text-blue-600 z-10">
              What our clients say
            </h1>
          </div>

          <div
            className="mt-[2
          0rem] p-30 rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
          >
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center py-20">
            <h3
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
               text-gray-100 text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem]
               font-black select-none pointer-events-none tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase"
            >
              Contact
            </h3>

            <h1 className="relative mt-8 lg:mt-18 text-2xl lg:text-6xl font-bold text-blue-600 z-10">
              Get in Touch With Us
            </h1>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-black font-medium mb-2 ">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-black font-medium mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Your message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}

export default Home;
