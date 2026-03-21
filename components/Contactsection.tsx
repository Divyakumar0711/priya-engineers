// "use client";

// import React, { useEffect, useState } from "react";
// import { Cinzel } from "next/font/google";
// import { supabase } from "@/lib/supabaseClient";

// // ─── Font ─────────────────────────────────────────────────────────────────────
// const cinzelFont = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });

// // ─── Main Component ───────────────────────────────────────────────────────────
// export default function ContactSection() {
//   const [products, setProducts] = useState<string[]>([]);
//   const [submitted, setSubmitted] = useState(false);

//   // ── Fetch product titles from Supabase ──
//   useEffect(() => {
//     async function fetchProducts() {
//       const { data, error } = await supabase
//         .from("products")
//         .select("title")
//         .order("title", { ascending: true });

//       if (!error && data) {
//         setProducts(data.map((p) => p.title));
//       }
//     }
//     fetchProducts();
//   }, []);

//   function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     // TODO: wire up your form submission (EmailJS, API route, Supabase insert, etc.)
//     setSubmitted(true);
//   }

//   return (
//     <section className="py-10 sm:py-16 lg:py-20 bg-white">
//       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* ── Section Header ── */}
//         <div className="relative text-center py-10 sm:py-16 lg:py-20">
//           <h3
//             className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 text-[3.5rem] md:text-[7rem] lg:text-[10rem] font-black select-none pointer-events-none tracking-[0.2em] uppercase ${cinzelFont.className}`}
//           >
//             Contact
//           </h3>
//           <h1 className="relative mt-6 sm:mt-8 lg:mt-18 text-2xl lg:text-6xl font-bold text-[rgb(78,100,141)] z-10">
//             Get in Touch With Us
//           </h1>
//           <p className="relative z-10 mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
//             Looking for precision shafts or custom machinery parts? Send us
//             your requirement and we'll get back to you within 24 hours with a
//             quote.
//           </p>
//         </div>

//         {/* ── Success State ── */}
//         {submitted ? (
//           <div className="text-center py-16">
//             <div className="text-5xl mb-4">✅</div>
//             <h2 className="text-2xl font-bold text-[rgb(78,100,141)] mb-2">Enquiry Sent!</h2>
//             <p className="text-gray-500 text-sm">
//               Thank you for reaching out. We'll get back to you within 24 hours.
//             </p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-5">

//             {/* Name + Phone */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-black text-sm font-semibold mb-1.5">
//                   Full Name <span className="text-[rgb(225,6,0)]">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   placeholder="Rajesh Mehta"
//                   className="w-full p-3 text-base text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(78,100,141)]"
//                 />
//               </div>
//               <div>
//                 <label className="block text-black text-sm font-semibold mb-1.5">
//                   Phone Number <span className="text-[rgb(225,6,0)]">*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   required
//                   placeholder="+91 98XXX XXXXX"
//                   className="w-full p-3 text-base text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(78,100,141)]"
//                 />
//               </div>
//             </div>

//             {/* Email + Company */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-black text-sm font-semibold mb-1.5">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="you@company.com"
//                   className="w-full p-3 text-base text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(78,100,141)]"
//                 />
//               </div>
//               <div>
//                 <label className="block text-black text-sm font-semibold mb-1.5">
//                   Company / Organisation
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Your Company Name"
//                   className="w-full p-3 text-base text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(78,100,141)]"
//                 />
//               </div>
//             </div>

//             {/* ── Product dropdown — live from Supabase ── */}
//             <div>
//               <label className="block text-black text-sm font-semibold mb-1.5">
//                 Product / Service Required
//               </label>
//               <select
//                 className="w-full p-3 text-base text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(78,100,141)] bg-white"
//                 disabled={products.length === 0}
//               >
//                 <option value="">
//                   {products.length === 0 ? "Loading products..." : "— Select a product —"}
//                 </option>
//                 {products.map((title) => (
//                   <option key={title} value={title}>
//                     {title}
//                   </option>
//                 ))}
//                 <option value="Other / Not Sure">Other / Not Sure</option>
//               </select>
//             </div>

//             {/* Quantity — static */}
//             <div>
//               <label className="block text-black text-sm font-semibold mb-1.5">
//                 Approximate Quantity Required
//               </label>
//               <select className="w-full p-3 text-base text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(78,100,141)] bg-white">
//                 <option value="">— Select quantity range —</option>
//                 <option>1–10 pieces (Prototype / Sample)</option>
//                 <option>10–50 pieces</option>
//                 <option>50–200 pieces</option>
//                 <option>200–500 pieces</option>
//                 <option>500+ pieces (Bulk Order)</option>
//               </select>
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-black text-sm font-semibold mb-1.5">
//                 Your Message / Requirement
//               </label>
//               <textarea
//                 rows={4}
//                 placeholder="Describe your requirement — material grade, dimensions, application, drawing reference, etc."
//                 className="w-full p-3 text-base text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(78,100,141)]"
//               />
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3">
//               <button
//                 type="submit"
//                 className="flex-1 bg-[rgb(78,100,141)] text-white font-semibold px-8 py-3.5 rounded-3xl hover:bg-[rgb(225,6,0)] transition duration-300"
//               >
//                 Send Enquiry
//               </button>
//               <a
//                 href="https://wa.me/919825790413?text=Hello%20Priya%20Engineers%2C%20I%20need%20a%20quote%20for%20shaft%20manufacturing."
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-3.5 rounded-3xl hover:opacity-90 transition duration-300"
//               >
//                 <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
//                   <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.882l6.204-1.448A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.782 9.782 0 01-5.015-1.381l-.36-.214-3.683.86.925-3.585-.234-.368A9.78 9.78 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
//                 </svg>
//                 WhatsApp Us
//               </a>
//             </div>

//           </form>
//         )}

//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Cinzel } from "next/font/google";
import { supabase } from "@/lib/supabaseClient";

// ─── Font ─────────────────────────────────────────────────────────────────────
const cinzelFont = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });

// ─── Types ────────────────────────────────────────────────────────────────────
type FormState = {
  name: string;
  phone: string;
  email: string;
  company: string;
  product: string;
  quantity: string;
  message: string;
};

const EMPTY: FormState = {
  name: "",
  phone: "",
  email: "",
  company: "",
  product: "",
  quantity: "",
  message: "",
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ContactSection() {
  const [products, setProducts] = useState<string[]>([]);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // ── Fetch product titles from Supabase ──
  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from("products")
        .select("title")
        .order("title", { ascending: true });

      if (!error && data) {
        setProducts(data.map((p) => p.title));
      }
    }
    fetchProducts();
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(EMPTY);
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full p-3 text-base text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(78,100,141)]";
  const labelClass = "block text-black text-sm font-semibold mb-1.5";

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="relative text-center py-10 sm:py-16 lg:py-20">
          <h3
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 text-[3.5rem] md:text-[7rem] lg:text-[10rem] font-black select-none pointer-events-none tracking-[0.2em] uppercase ${cinzelFont.className}`}
          >
            Contact
          </h3>
          <h1 className="relative mt-6 sm:mt-8 lg:mt-18 text-2xl lg:text-6xl font-bold text-[rgb(78,100,141)] z-10">
            Get in Touch With Us
          </h1>
          <p className="relative z-10 mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Looking for precision shafts or custom machinery parts? Send us
            your requirement and we'll get back to you within 24 hours with a
            quote.
          </p>
        </div>

        {/* ── Success State ── */}
        {status === "success" ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-[rgb(78,100,141)] mb-2">Enquiry Sent!</h2>
            <p className="text-gray-500 text-sm">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <p className="mt-3 text-xs text-gray-400">This message will disappear in 5 seconds...</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-4 text-sm text-[rgb(78,100,141)] underline hover:text-[rgb(225,6,0)] transition"
            >
              Send another enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>
                  Full Name <span className="text-[rgb(225,6,0)]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Rajesh Mehta"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Phone Number <span className="text-[rgb(225,6,0)]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98XXX XXXXX"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Email + Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Company / Organisation</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Product dropdown — live from Supabase */}
            <div>
              <label className={labelClass}>Product / Service Required</label>
              <select
                name="product"
                value={form.product}
                onChange={handleChange}
                disabled={products.length === 0}
                className={`${inputClass} bg-white`}
              >
                <option value="">
                  {products.length === 0 ? "Loading products..." : "— Select a product —"}
                </option>
                {products.map((title) => (
                  <option key={title} value={title}>{title}</option>
                ))}
                <option value="Other / Not Sure">Other / Not Sure</option>
              </select>
            </div>

            {/* Quantity — static */}
            <div>
              <label className={labelClass}>Approximate Quantity Required</label>
              <select
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                className={`${inputClass} bg-white`}
              >
                <option value="">— Select quantity range —</option>
                <option>1–10 pieces (Prototype / Sample)</option>
                <option>10–50 pieces</option>
                <option>50–200 pieces</option>
                <option>200–500 pieces</option>
                <option>500+ pieces (Bulk Order)</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className={labelClass}>Your Message / Requirement</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your requirement — material grade, dimensions, application, drawing reference, etc."
                className={inputClass}
              />
            </div>

            {/* Error message */}
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
                {errorMsg}
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex-1 bg-[rgb(78,100,141)] text-white font-semibold px-8 py-3.5 rounded-3xl hover:bg-[rgb(225,6,0)] transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Enquiry"}
              </button>
              <a
                href="https://wa.me/919825790413?text=Hello%20Priya%20Engineers%2C%20I%20need%20a%20quote%20for%20shaft%20manufacturing."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-3.5 rounded-3xl hover:opacity-90 transition duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.882l6.204-1.448A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.782 9.782 0 01-5.015-1.381l-.36-.214-3.683.86.925-3.585-.234-.368A9.78 9.78 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>
                WhatsApp Us
              </a>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}