"use client";

import Image from "next/image";
import { Cinzel } from "next/font/google";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import React from "react";

// ─── Font ─────────────────────────────────────────────────────────────────────
const cinzelFont = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "500+", label: "Projects Delivered", color: "text-[rgb(225,6,0)]" },
  { value: "100+", label: "Industry Clients",   color: "text-[rgb(78,100,141)]" },
  { value: "15+",  label: "Product Variants",   color: "text-[rgb(225,6,0)]" },
];

const PRODUCTS = [
  "Transmission Shafts",
  "Screw Shafts",
  "Gear Shafts",
  "Spline Shafts",
  "Pinion Shafts",
  "Coupling Shafts",
  "Hollow Shafts",
  "Step Shafts",
  "Worm Shafts",
  "Keyway Shafts",
  "Flanged Shafts",
  "Rotor Shafts",
  "Pump Shafts",
  "Motor Shafts",
  "Customised Machinery Parts",
];

const WHY_US = [
  "Custom manufacturing from drawing, sample, or specification",
  "Alloy steel, EN series & stainless steel grades available",
  "Tolerances as tight as ±0.01mm with CNC precision",
  "Bulk & prototype orders accepted — fast turnaround",
  "25+ years of trusted supply to Gujarat industries",
  "Direct manufacturer — no middlemen, competitive pricing",
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function WelcomeSection() {
  return (
    <section className="pt-10 sm:pt-16 lg:pt-20 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* ── Left: Logo + heading + stats ── */}
          <div className="relative flex flex-col items-center space-y-4">
            <Image
              src="https://emzgcybufgvtwoogwczj.supabase.co/storage/v1/object/public/images/25_years_logo.png"
              alt="25 Years of Excellence - Priya Engineers"
              width={500}
              height={500}
              className="w-80 md:w-100 lg:w-125"
            />

            <h2
              className={`lg:text-4xl text-3xl font-bold text-gray-900 tracking-wider text-center ${cinzelFont.className}`}
            >
              <span className="text-[rgb(225,6,0)]">YEARS</span>{" "}
              <span className="text-black">OF</span>{" "}
              <span className="text-[rgb(78,100,141)]">EXCELLENCE</span>
            </h2>

            {/* Stats row */}
            <div className="flex gap-6 sm:gap-10 mt-4 text-center">
              {STATS.map((stat, i) => (
                <React.Fragment key={stat.label}>
                  {i > 0 && <div className="border-l border-gray-200" />}
                  <div>
                    <p className={`text-2xl sm:text-3xl font-bold ${stat.color} ${cinzelFont.className}`}>
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ── Right: Container scroll ── */}
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

                {/* About paragraphs */}
                <p className="text-base sm:text-lg text-black mb-4 leading-relaxed">
                  Founded in Ahmedabad, Priya Engineers is a trusted manufacturer and
                  supplier of All Type Transmission Shafts, Screw Shafts &amp; Machinery
                  Parts — serving automotive OEMs, heavy industry, and machinery makers
                  across India for over 25 years.
                </p>

                <p className="text-base sm:text-lg text-black mb-4 leading-relaxed">
                  Our Amraiwadi facility on N.H. No.-8 runs CNC turning centers and
                  cylindrical grinding machines, backed by strict in-house quality
                  inspection — giving you consistent dimensions, on-time delivery, and
                  full traceability on every order.
                </p>

                {/* What We Manufacture */}
                <div className="mb-4">
                  <p className="text-sm font-bold text-[rgb(78,100,141)] uppercase tracking-widest mb-2">
                    What We Manufacture
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {PRODUCTS.map((product) => (
                      <div
                        key={product}
                        className="flex items-center gap-1.5 text-sm text-gray-700"
                      >
                        <span className="text-[rgb(225,6,0)] font-bold text-xs">▶</span>
                        {product}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-4">
                  <p className="text-sm font-bold text-[rgb(78,100,141)] uppercase tracking-widest mb-2">
                    Why Choose Priya Engineers
                  </p>
                  <ul className="space-y-2">
                    {WHY_US.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm sm:text-base text-gray-700"
                      >
                        <span className="mt-0.5 text-[rgb(225,6,0)] font-bold">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA buttons */}
                <div className="flex gap-3 mt-2 pb-2">
                  <a
                    href="/products"
                    className="bg-[rgb(78,100,141)] text-white text-sm font-semibold px-4 py-2 rounded hover:opacity-90 transition"
                  >
                    View All Products
                  </a>
                  <a
                    href="/contact"
                    className="bg-[rgb(225,6,0)] text-white text-sm font-semibold px-4 py-2 rounded hover:opacity-90 transition"
                  >
                    Get a Quote
                  </a>
                </div>

              </div>
            </ContainerScroll>
          </div>

        </div>
      </div>
    </section>
  );
}