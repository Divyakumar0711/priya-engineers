"use client";

import Image from "next/image";
import { Cinzel } from "next/font/google";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

// ─── Font ─────────────────────────────────────────────────────────────────────
const cinzelFont = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "500+", label: "Projects Delivered", color: "text-[rgb(225,6,0)]" },
  { value: "100+", label: "Industry Clients", color: "text-[rgb(78,100,141)]" },
  { value: "15+", label: "Product Variants", color: "text-[rgb(225,6,0)]" },
];

const WHY_US = [
  "ISO-grade CNC turning & cylindrical grinding under one roof",
  "Material certificates available — alloy steel, EN8, EN24, SS grades",
  "Reverse engineering from worn or broken sample parts accepted",
  "Pan-India dispatch with packaging suited for long-distance transport",
  "Single point of contact from order to delivery — no subcontracting",
  "Repeat order consistency guaranteed — same dimensions every batch",
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function WelcomeSection() {
  const [products, setProducts] = useState<{ title: string; slug: string }[]>(
    [],
  );

  useEffect(() => {
    async function fetchTitles() {
      const { data } = await supabase
        .from("products")
        .select("title, slug")
        .order("title", { ascending: true });

      if (data)
        setProducts(data.map((p) => ({ title: p.title, slug: p.slug })));
    }
    fetchTitles();
  }, []);

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
                    <p
                      className={`text-2xl sm:text-3xl font-bold ${stat.color} ${cinzelFont.className}`}
                    >
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
                <p className="text-base sm:text-lg text-black mb-4 leading-relaxed">
                  Priya Engineers manufactures and supplies transmission shafts,
                  screw shafts, gear shafts, spline shafts, hollow shafts, and
                  custom machinery parts for automotive OEMs, heavy industry,
                  and machinery manufacturers across India. With over 25 years
                  of experience, we deliver precision-engineered components
                  built to your drawing, sample, or specification.
                </p>

                <p className="text-base sm:text-lg text-black mb-4 leading-relaxed">
                  Our CNC turning centers and cylindrical grinding machines
                  achieve tolerances as tight as ±0.01mm across alloy steel, EN
                  series, and stainless steel grades. Every shaft — whether a
                  worm shaft, pump shaft, motor shaft, or pinion shaft —
                  undergoes strict in-house quality inspection before dispatch,
                  from single prototypes to bulk orders of 500+ pieces.
                </p>

                {/* What We Manufacture */}
                <div className="mb-4">
                  <p className="text-sm font-bold text-[rgb(78,100,141)] uppercase tracking-widest mb-2">
                    What We Manufacture
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-[rgb(225,6,0)] transition-colors duration-200 group"
                      >
                        <span className="text-[rgb(225,6,0)] font-bold text-xs group-hover:translate-x-0.5 transition-transform duration-200">
                          ▶
                        </span>
                        {product.title}
                      </Link>
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
                        <span className="mt-0.5 text-[rgb(225,6,0)] font-bold">
                          ✓
                        </span>
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
