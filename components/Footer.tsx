// components/Footer.tsx
"use client";

import Image from "next/image";

import Link from "next/link";

interface Product {
  name: string;
  slug: string; // URL-friendly slug for the product details page
}

const products: Product[] = [
  { name: "Transmission Shaft", slug: "transmission-shaft" },
  { name: "Pinion Shaft", slug: "pinion-shaft" },
  { name: "Coupling Shaft", slug: "coupling-shaft" },
  { name: "Hollow Shaft", slug: "hollow-shaft" },
  { name: "Gear Shaft", slug: "gear-shaft" },
  { name: "Screw Shaft", slug: "screw-shaft" },
  { name: "Spline Shaft", slug: "spline-shaft" },
  // Add more products here if needed
];
const socialIcons = [
  {
    name: "Facebook",
    icon: "/assets/icons/facebook.png",
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: "/assets/icons/twitter.png",
    link: "https://twitter.com",
  },
  {
    name: "Instagram",
    icon: "/assets/icons/instagram.png",
    link: "https://instagram.com",
  },
  {
    name: "Linkedin",
    icon: "/assets/icons/linkedin.png",
    link: "https://linkedin.com",
  },
  {
    name: "Map",
    icon: "/assets/icons/google-maps.png",
    link: "https://linkedin.com",
  },
  { name: "Phone", icon: "/assets/icons/call.png", link: "tel:+1234567890" },
  {
    name: "Mail",
    icon: "/assets/icons/email.png",
    link: "mailto:someone@example.com",
  },
  {
    name: "Pinterest",
    icon: "/assets/icons/pinterest.png",
    link: "https://pinterest.com",
  },
  {
    name: "Google",
    icon: "/assets/icons/google.png",
    link: "https://tiktok.com",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[rgb(78,100,141)] text-white pt-12 pb-6 px-6 md:px-20">
      <div className="grid md:grid-cols-3 gap-12 border-b border-white/20 pb-10">
        {/* Contact Info Section */}
        <div>
          <h2 className="text-lg font-bold mb-4 tracking-wide">Get In Touch</h2>

          <div className="mb-4 flex gap-2 items-center">
            {/* Replace with MapPin icon SVG or image if needed */}
            <div className="w-12 h-12 bg-[rgb(225,6,0)] rounded-3xl flex items-center justify-center ">
              <Image
                src={"/assets/icons/location-white.png"}
                alt={"location"}
                width={24}
                height={24}
                className="group-hover:invert transition duration-300"
              />
            </div>
            <div className="text-sm tracking-wide">
              <p className="font-semibold">Office Address</p>

              <a
                href="https://maps.app.goo.gl/C9HV6h5AtPR19uGJA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                19 Swaminarayan complex, <br />
                near Mangaldeep Party Plot, Amraiwadi,
                <br />
                Ahmedabad – 382415,
                <br />
                Gujarat – India
              </a>
            </div>
          </div>

         {/* Phone */}
<div className="mb-4 flex gap-2 items-center">
  <div className="w-12 h-12 bg-[rgb(225,6,0)] rounded-3xl flex items-center justify-center">
    <Image
      src="/assets/icons/call-white.png"
      alt="call"
      width={24}
      height={24}
      className="group-hover:invert transition duration-300"
    />
  </div>
  <div className="text-sm tracking-wide">
    <p className="font-semibold">Phone Number</p>
    <p>
      <a href="tel:+919978611575" className="hover:underline">
        +91 9825790413
      </a>
    </p>
  </div>
</div>

{/* Email */}
<div className="flex gap-2 items-center">
  <div className="w-12 h-12 bg-[rgb(225,6,0)] rounded-3xl flex items-center justify-center">
    <Image
      src="/assets/icons/mail-white.png"
      alt="email"
      width={24}
      height={24}
      className="group-hover:invert transition duration-300"
    />
  </div>
  <div className="text-sm tracking-wide">
    <p className="font-semibold">Email Address</p>
    <p>
      <a href="mailto:priyaengineersahd@gmail.com" className="hover:underline">
        priyaengineers@gmail.com
      </a>
    </p>
  </div>
</div>
        </div>

        {/* Product Links Section */}
     <div>
      <h2 className="text-lg font-bold mb-4 tracking-wide">Product Link</h2>
      <div className="grid grid-cols-2 gap-y-2 text-sm tracking-wide">
        {products.map((product) => (
          <p key={product.slug}>
            <Link
              href={`/products/${product.slug}`}
              className="hover:underline "
            >
              {product.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
        {/* Social Media Icons Section */}
        <div>
          <h2 className="text-lg font-bold mb-4 tracking-wide">Social Media</h2>
          <div className="grid grid-cols-3 gap-y-3 w-60">
            {socialIcons.map(({ icon, link, name }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white rounded-sm flex items-center justify-center hover:bg-red-600 transition-all"
              >
                <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  className="group-hover:invert transition duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-8">
        Copyright © 2025 Priya Engineers. All Rights Reserved.
      </p>
    </footer>
  );
}
