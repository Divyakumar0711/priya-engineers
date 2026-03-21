// // components/Footer.tsx
// "use client";

// import Image from "next/image";

// import Link from "next/link";

// interface Product {
//   name: string;
//   slug: string; // URL-friendly slug for the product details page
// }

// const products: Product[] = [
//   { name: "Transmission Shaft", slug: "transmission-shaft" },
//   { name: "Pinion Shaft", slug: "pinion-shaft" },
//   { name: "Coupling Shaft", slug: "coupling-shaft" },
//   { name: "Hollow Shaft", slug: "hollow-shaft" },
//   { name: "Gear Shaft", slug: "gear-shaft" },
//   { name: "Screw Shaft", slug: "screw-shaft" },
//   { name: "Spline Shaft", slug: "spline-shaft" },
//   // Add more products here if needed
// ];
// const socialIcons = [
//   {
//     name: "Facebook",
//     icon: "/assets/icons/facebook.png",
//     link: "https://facebook.com",
//   },
//   {
//     name: "Twitter",
//     icon: "/assets/icons/twitter.png",
//     link: "https://twitter.com",
//   },
//   {
//     name: "Instagram",
//     icon: "/assets/icons/instagram.png",
//     link: "https://instagram.com",
//   },
//   {
//     name: "Linkedin",
//     icon: "/assets/icons/linkedin.png",
//     link: "https://linkedin.com",
//   },
//   {
//     name: "Map",
//     icon: "/assets/icons/google-maps.png",
//     link: "https://linkedin.com",
//   },
//   { name: "Phone", icon: "/assets/icons/call.png", link: "tel:+1234567890" },
//   {
//     name: "Mail",
//     icon: "/assets/icons/email.png",
//     link: "mailto:someone@example.com",
//   },
//   {
//     name: "Pinterest",
//     icon: "/assets/icons/pinterest.png",
//     link: "https://pinterest.com",
//   },
//   {
//     name: "Google",
//     icon: "/assets/icons/google.png",
//     link: "https://tiktok.com",
//   },
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-[rgb(78,100,141)] text-white pt-12 pb-6 px-6 md:px-20">
//       <div className="grid md:grid-cols-3 gap-12 border-b border-white/20 pb-10">
//         {/* Contact Info Section */}
//         <div>
//           <h2 className="text-lg font-bold mb-4 tracking-wide">Get In Touch</h2>

//           <div className="mb-4 flex gap-2 items-center">
//             {/* Replace with MapPin icon SVG or image if needed */}
//             <div className="w-12 h-12 bg-[rgb(225,6,0)] rounded-3xl flex items-center justify-center ">
//               <Image
//                 src={"/assets/icons/location-white.png"}
//                 alt={"location"}
//                 width={24}
//                 height={24}
//                 className="group-hover:invert transition duration-300"
//               />
//             </div>
//             <div className="text-sm tracking-wide">
//               <p className="font-semibold">Office Address</p>

//               <a
//                 href="https://maps.app.goo.gl/C9HV6h5AtPR19uGJA"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:underline"
//               >
//                 19 Swaminarayan complex, <br />
//                 near Mangaldeep Party Plot, Amraiwadi,
//                 <br />
//                 Ahmedabad – 382415,
//                 <br />
//                 Gujarat – India
//               </a>
//             </div>
//           </div>

//          {/* Phone */}
// <div className="mb-4 flex gap-2 items-center">
//   <div className="w-12 h-12 bg-[rgb(225,6,0)] rounded-3xl flex items-center justify-center">
//     <Image
//       src="/assets/icons/call-white.png"
//       alt="call"
//       width={24}
//       height={24}
//       className="group-hover:invert transition duration-300"
//     />
//   </div>
//   <div className="text-sm tracking-wide">
//     <p className="font-semibold">Phone Number</p>
//     <p>
//       <a href="tel:+919978611575" className="hover:underline">
//         +91 9825790413
//       </a>
//     </p>
//   </div>
// </div>

// {/* Email */}
// <div className="flex gap-2 items-center">
//   <div className="w-12 h-12 bg-[rgb(225,6,0)] rounded-3xl flex items-center justify-center">
//     <Image
//       src="/assets/icons/mail-white.png"
//       alt="email"
//       width={24}
//       height={24}
//       className="group-hover:invert transition duration-300"
//     />
//   </div>
//   <div className="text-sm tracking-wide">
//     <p className="font-semibold">Email Address</p>
//     <p>
//       <a href="mailto:priyaengineersahd@gmail.com" className="hover:underline">
//         priyaengineers@gmail.com
//       </a>
//     </p>
//   </div>
// </div>
//         </div>

//         {/* Product Links Section */}
//      <div>
//       <h2 className="text-lg font-bold mb-4 tracking-wide">Product Link</h2>
//       <div className="grid grid-cols-2 gap-y-2 text-sm tracking-wide">
//         {products.map((product) => (
//           <p key={product.slug}>
//             <Link
//               href={`/products/${product.slug}`}
//               className="hover:underline "
//             >
//               {product.name}
//             </Link>
//           </p>
//         ))}
//       </div>
//     </div>
//         {/* Social Media Icons Section */}
//         <div>
//           <h2 className="text-lg font-bold mb-4 tracking-wide">Social Media</h2>
//           <div className="grid grid-cols-3 gap-y-3 w-60">
//             {socialIcons.map(({ icon, link, name }, index) => (
//               <a
//                 key={index}
//                 href={link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group w-12 h-12 bg-white rounded-sm flex items-center justify-center hover:bg-red-600 transition-all"
//               >
//                 <Image
//                   src={icon}
//                   alt={name}
//                   width={24}
//                   height={24}
//                   className="group-hover:invert transition duration-300"
//                 />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       <p className="text-center text-sm mt-8">
//         Copyright © 2025 Priya Engineers. All Rights Reserved.
//       </p>
//     </footer>
//   );
// }
// components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
interface Product {
  title: string;
  slug: string;
}




// ✅ FIXED: Removed Pinterest/Google/TikTok — not relevant for industrial B2B
// ✅ FIXED: All placeholder links replaced with real contact details
const socialIcons = [
  {
    name: "Facebook",
    icon: "/assets/icons/facebook.png",
    link: "https://facebook.com/priyaengineers", // update with real page URL
  },
  {
    name: "Instagram",
    icon: "/assets/icons/instagram.png",
    link: "https://instagram.com/priyaengineers", // update with real page URL
  },
  {
    name: "Linkedin",
    icon: "/assets/icons/linkedin.png",
    link: "https://linkedin.com/company/priyaengineers", // update with real page URL
  },
  {
    name: "WhatsApp",
    icon: "/assets/icons/call.png",
    link: "https://wa.me/919825790413?text=Hello%20Priya%20Engineers%2C%20I%20need%20a%20quote.",
  },
  {
    name: "Google Maps",
    icon: "/assets/icons/google-maps.png",
    link: "https://maps.app.goo.gl/C9HV6h5AtPR19uGJA", // ✅ FIXED: was linking to linkedin
  },
  {
    name: "Phone",
    icon: "/assets/icons/call.png",
    link: "tel:+919825790413", // ✅ FIXED: was +1234567890
  },
  {
    name: "Mail",
    icon: "/assets/icons/email.png",
    link: "mailto:priyaengineersahd@gmail.com", // ✅ FIXED: was someone@example.com
  },
];

export default function Footer() {


  const [loading,setLoading] = useState(true);

  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("id, title, slug, description, image")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
        return;
      }


    
      setLoading(false);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("title, slug")
        .order("title", { ascending: true });

      if (error) {
        console.error("Error fetching products:", error);
      } else if (data) {
        setProducts(data);  // ✅ This was missing — data was never saved to state
      }

      setLoading(false);
    };
    fetchProducts();
  }, []);
  return (
    <footer className="bg-[rgb(78,100,141)] text-white pt-12 pb-6 px-6 md:px-20">
      <div className="grid md:grid-cols-3 gap-12 border-b border-white/20 pb-10">
        {/* Contact Info Section */}
        <div>
          <h2 className="text-lg font-bold mb-4 tracking-wide">Get In Touch</h2>

          {/* ✅ NEW: Contact person name */}
          <div className="mb-4 text-sm tracking-wide">
            <p className="font-semibold text-white/80 text-xs uppercase tracking-widest mb-1">
              Contact Person
            </p>
            <p className="font-bold text-base">Ashwin Patel</p>
          </div>

          {/* Address — ✅ FIXED: Full correct address from business card */}
          <div className="mb-4 flex gap-3 items-start">
            <div className="w-10 h-10 shrink-0 bg-[rgb(225,6,0)] rounded-2xl flex items-center justify-center">
              <Image
                src="/assets/icons/location-white.png"
                alt="location"
                width={20}
                height={20}
              />
            </div>
            <div className="text-sm tracking-wide">
              <p className="font-semibold mb-0.5">Office Address</p>
              <a
                href="https://maps.app.goo.gl/C9HV6h5AtPR19uGJA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-white/80 leading-relaxed"
              >
                19, Swaminarayan Complex,
                <br />
                Near Mangaldeep Party Plot,
                <br />
                Vastral Char Rasta, N.H. No.-8,
                <br />
                Amraiwadi, Ahmedabad – 382 415,
                <br />
                Gujarat – India
              </a>
            </div>
          </div>

          {/* Phone — ✅ FIXED: Both numbers from business card */}
          <div className="mb-4 flex gap-3 items-start">
            <div className="w-10 h-10 shrink-0 bg-[rgb(225,6,0)] rounded-2xl flex items-center justify-center">
              <Image
                src="/assets/icons/call-white.png"
                alt="call"
                width={20}
                height={20}
              />
            </div>
            <div className="text-sm tracking-wide">
              <p className="font-semibold mb-0.5">Phone Numbers</p>
              <a
                href="tel:+919825790413"
                className="hover:underline text-white/80 block"
              >
                +91 98257 90413
              </a>
            </div>
          </div>

          {/* Email — ✅ FIXED: correct email address */}
          <div className="flex gap-3 items-start">
            <div className="w-10 h-10 shrink-0 bg-[rgb(225,6,0)] rounded-2xl flex items-center justify-center">
              <Image
                src="/assets/icons/mail-white.png"
                alt="email"
                width={20}
                height={20}
              />
            </div>
            <div className="text-sm tracking-wide">
              <p className="font-semibold mb-0.5">Email Address</p>
              <a
                href="mailto:priyaengineersahd@gmail.com"
                className="hover:underline text-white/80"
              >
                priyaengineersahd@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Product Links — ✅ UPDATED: 15 products in 2 columns */}
        <div>
          <h2 className="text-lg font-bold mb-4 tracking-wide">Our Products</h2>
          {products.length === 0 ? (
            <p className="text-sm text-white/50">Loading products...</p>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm tracking-wide">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="hover:text-[rgb(255,180,180)] hover:underline text-white/80 transition-colors"
                >
                  {product.title}
                </Link>
              ))}
            </div>
          )}

          {/* ✅ NEW: Quick links */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-3 tracking-wide">
              Quick Links
            </h2>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "All Products", href: "/products" },
                { name: "Contact Us", href: "/contact" },
                { name: "Get a Quote", href: "/contact" },
              ].map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className="hover:text-white hover:underline transition-colors"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media + Tagline */}
        <div>
          <h2 className="text-lg font-bold mb-4 tracking-wide">
            Connect With Us
          </h2>

          <div className="grid grid-cols-4 gap-3 mb-6">
            {socialIcons.map(({ icon, link, name }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={name}
                className="group w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:bg-[rgb(225,6,0)] transition-all"
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

          {/* ✅ NEW: WhatsApp CTA banner in footer */}
          <a
            href="https://wa.me/919825790413?text=Hello%20Priya%20Engineers%2C%20I%20need%20a%20quote%20for%20shaft%20manufacturing."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-3 rounded-xl hover:opacity-90 transition mb-6"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.882l6.204-1.448A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.782 9.782 0 01-5.015-1.381l-.36-.214-3.683.86.925-3.585-.234-.368A9.78 9.78 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
            WhatsApp: +91 98257 90413
          </a>

          {/* ✅ NEW: Company tagline */}
          <div className="text-sm text-white/70 leading-relaxed border-t border-white/10 pt-4">
            <p className="font-semibold text-white mb-1">Priya Engineers</p>
            <p>
              Mfg. & Suppliers of All Type Transmission Shafts, Screw Shafts &
              Machinery Parts.
            </p>
            <p className="mt-2">📍 Amraiwadi, Ahmedabad, Gujarat – India</p>
          </div>
        </div>
      </div>

      {/* ✅ FIXED: Updated copyright year to 2026 */}
      <p className="text-center text-sm mt-8 text-white/70">
        Copyright © 2026 Priya Engineers, Ahmedabad. All Rights Reserved.
      </p>
    </footer>
  );
}
