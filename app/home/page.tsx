"use client";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cinzel } from "next/font/google";
import TestimonialsSection from "@/components/Testimonialssection ";
import WelcomeSection from "@/components/WelcomeSection";
import ProductsSection from "@/components/ProductSection";
import IndustriesSection from "@/components/Industriessection ";
import ContactSection from "@/components/Contactsection";

const cinzelFont = Cinzel({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-cinzel",
});

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* Welcome Section */}

      <WelcomeSection />

      {/* What We Do */}
      <ProductsSection />

      {/* Industries */}
      <IndustriesSection />

      {/* Testimonials */}

      <TestimonialsSection />

      {/* Contact */}
      {/* <section className="py-10 sm:py-16 lg:py-20 bg-white">
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
      </section> */}
      <ContactSection />
    </div>
  );
}

export default Home;
