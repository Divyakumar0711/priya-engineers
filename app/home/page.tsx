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
import SEO from "@/components/SEO";

const cinzelFont = Cinzel({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-cinzel",
});

function Home() {
  return (

    <>
     <SEO
        title="Industrial Shaft Manufacturer | Priya Engineers"
        description="Priya Engineers is a leading manufacturer of industrial shafts including hollow shafts, inner shafts, and screw shafts for machinery and automotive applications."
        url="https://www.priyaengineers.com"
        ogImage="https://www.priyaengineers.com/images/home-og.jpg"
        keywords="industrial shaft manufacturer, precision shaft India, custom shaft supplier"
      />
    <main>
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* Welcome Section */}

      <WelcomeSection  />

      {/* What We Do */}
      <ProductsSection />

      {/* Industries */}
      <IndustriesSection />

      {/* Testimonials */}

      <TestimonialsSection />

      {/* Contact */}
      <ContactSection />
    </div>
    </main>
    </>
  );
}

export default Home;
