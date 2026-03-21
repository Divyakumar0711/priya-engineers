// import React from "react";
// import { TimelineContent } from "@/components/TimelineContent";
// import CommonHeader from "@/components/CommonHeader";
// import Image from "next/image";
// function page() {
//   return (
//     <div className="min-h-screen ">
//       <CommonHeader
//         title="About Us"
//         imageUrl="https://images.unsplash.com/photo-1711199694531-e982a79ea381?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
// "
//       />
//       <section className="bg-white py-20 px-8 pr-8">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
//           {/* Image */}
//           <div className="w-full md:w-1/2">
//             <Image
//               src="https://images.unsplash.com/photo-1711199694531-e982a79ea381?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="About"
//               width={500}
//               height={500}
//               className="w-full h-auto rounded-xl shadow-lg object-cover"
//             />
//           </div>

//           {/* Text */}
//           <div className="w-full md:w-1/2">
//             <h2 className="text-4xl font-bold text-[rgb(225,6,0)] mb-6 tracking-wide">
//               About Us
//             </h2>
//             <p className="text-gray-700 text-lg leading-relaxed mb-4">
//               Priya engineers is a leader in precision gear manufacturing, known
//               for its advanced engineering solutions and commitment to
//               excellence. With decades of experience, we cater to a global
//               clientele across multiple industrial sectors.
//             </p>
//             <p className="text-gray-700 text-lg leading-relaxed mb-4">
//               Our foundation is built on quality craftsmanship, cutting-edge
//               technology, and a team of professionals who strive to exceed
//               expectations. Every product we deliver reflects our dedication to
//               reliability and innovation.
//             </p>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               At Priya engineers, we believe in building long-term partnerships
//               by delivering performance-driven products and exceptional service
//               that adds value to every customer we serve.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className=" px-8 pr-8">
//         <div className="relative w-full overflow-clip">
//           <TimelineContent />
//         </div>
//       </section>

//       <section className="bg-gray-100 py-20 px-8 pr-8">
//         <div className="max-w-6xl mx-auto relative">
//           {/* Center vertical line for medium+ screens only */}
//           <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-[rgb(225,6,0)]" />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
//             {/* Our Vision */}
//             <div
//               className="
//              pr-0 md:pr-12 text-left"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-[rgb(78,100,141)] tracking-wide mb-6 md:mb-10">
//                 Our Vision
//               </h2>
//               <ul className="list-disc md:list-inside pl-5 md:pl-0 text-gray-700 text-base md:text-lg space-y-4">
//                 <li>To be a global leader in industrial innovation.</li>
//                 <li>Deliver advanced, sustainable engineering solutions.</li>
//                 <li>Empower businesses through precision and technology.</li>
//               </ul>
//             </div>

//             {/* Our Mission */}
//             <div className="md:text-left pl-0 md:pl-12">
//               <h2 className="text-3xl md:text-4xl font-bold text-[rgb(78,100,141)] tracking-wide mb-6 md:mb-10">
//                 Our Mission
//               </h2>
//               <ul className="list-disc md:list-inside pl-5 md:pl-0 text-gray-700 text-base md:text-lg space-y-4">
//                 <li>Ensure customer satisfaction with top-tier service.</li>
//                 <li>Promote innovation and eco-friendly practices.</li>
//                 <li>Build reliable and efficient products for industries.</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-white py-20 px-8 pr-8">
//         <div className="max-w-4xl mx-auto space-y-16">
//           {/* Our Quality */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-[rgb(225,6,0)]   mb-6 tracking-wide">
//               Our Quality:
//             </h2>
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//               We are committed to delivering exceptional quality in every
//               product we manufacture. Through rigorous quality control
//               procedures and a passion for excellence, we ensure that each
//               component meets the highest standards. Our dedication to precision
//               and durability sets us apart in the industrial sector.
//             </p>
//           </div>

//           {/* Manufacturing Quality */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-[rgb(225,6,0)] mb-6 tracking-wide">
//               Manufacturing Quality
//             </h2>
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//               Our manufacturing facilities are equipped with cutting-edge
//               technology and operated by a highly skilled workforce. We follow
//               industry best practices to maintain consistency and efficiency in
//               our processes, allowing us to produce reliable and high-performing
//               products that cater to diverse industrial needs.
//             </p>
//           </div>

//           {/* Service Capability */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-[rgb(225,6,0)] mb-6 tracking-wide">
//               Service Capability
//             </h2>
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//               We pride ourselves on our comprehensive service capabilities that
//               support our clients before, during, and after the sales process.
//               From custom engineering solutions to prompt support and
//               maintenance, our team ensures a seamless and satisfying experience
//               for all our customers across the globe.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default page;


import React from "react";
import Head from "next/head";
import { TimelineContent } from "@/components/TimelineContent";
import CommonHeader from "@/components/CommonHeader";
import Image from "next/image";

// ─── SEO constants ─────────────────────────────────────────────────────────────
const SEO = {
  title: "About Us | Priya Engineers – Precision Gear & Industrial Manufacturer",
  description:
    "Priya Engineers is a global leader in precision gear and industrial component manufacturing. With decades of expertise, we deliver advanced, reliable engineering solutions across automotive, aerospace, and heavy machinery sectors.",
  keywords:
    "precision gear manufacturer, industrial machinery, Priya Engineers, gear manufacturing India, CNC gear cutting, engineering solutions, industrial components, custom gears",
  url: "https://www.priyaengineers.com/about",
  siteName: "Priya Engineers",
  // High-quality industrial machinery images from Unsplash
  ogImage:
    "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=1200&auto=format&fit=crop",
};

// ─── JSON-LD Organisation structured data ─────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Priya Engineers",
  url: "https://www.priyaengineers.com",
  logo: "https://www.priyaengineers.com/logo.png",
  description: SEO.description,
  foundingDate: "1990",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/priya-engineers",
    "https://twitter.com/priyaengineers",
  ],
};

// ─── Industrial/manufacturing machinery images (Unsplash) ─────────────────────
const IMAGES = {
  // Heavy industrial machinery / factory floor
  hero: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1932&auto=format&fit=crop",
  // CNC machining / precision manufacturing
  about:
    "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=1400&auto=format&fit=crop",
};

function AboutPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          SEO HEAD
      ════════════════════════════════════════════════════════════════════ */}
      <Head>
        {/* ── Primary meta ── */}
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Priya Engineers" />
        <link rel="canonical" href={SEO.url} />

        {/* ── Open Graph (Facebook / LinkedIn / WhatsApp) ── */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:url" content={SEO.url} />
        <meta property="og:site_name" content={SEO.siteName} />
        <meta property="og:image" content={SEO.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Priya Engineers – Industrial Precision Manufacturing Facility"
        />
        <meta property="og:locale" content="en_IN" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="twitter:image" content={SEO.ogImage} />
        <meta
          name="twitter:image:alt"
          content="Priya Engineers – Industrial Precision Manufacturing"
        />

        {/* ── JSON-LD structured data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {/* ════════════════════════════════════════════════════════════════════
          PAGE BODY
      ════════════════════════════════════════════════════════════════════ */}
      <main className="min-h-screen">

        {/* ── Hero banner ───────────────────────────────────────────────── */}
        <CommonHeader title="About Us" imageUrl={IMAGES.hero} />

        {/* ── Who We Are ────────────────────────────────────────────────── */}
        <section
          aria-labelledby="about-heading"
          className="bg-white py-20 px-8"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

            {/* Industrial machinery image */}
            <div className="w-full md:w-1/2">
              <Image
                src={IMAGES.about}
                alt="Priya Engineers industrial CNC precision manufacturing machinery"
                width={600}
                height={500}
                className="w-full h-auto rounded-xl shadow-lg object-cover"
                priority
              />
            </div>

            {/* Text – h1 for on-page SEO */}
            <div className="w-full md:w-1/2">
              <h1
                id="about-heading"
                className="text-4xl font-bold text-[rgb(225,6,0)] mb-6 tracking-wide"
              >
                About Priya Engineers
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Priya Engineers is a trusted global leader in{" "}
                <strong>precision gear and industrial component manufacturing</strong>,
                renowned for advanced engineering solutions and an unwavering
                commitment to quality. With decades of proven expertise, we serve
                a diverse clientele spanning automotive, aerospace, heavy
                machinery, and industrial automation sectors worldwide.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Our foundation rests on skilled craftsmanship, state-of-the-art
                CNC technology, and a passionate team dedicated to exceeding
                customer expectations. Every gear and component we produce
                reflects our core values of reliability, dimensional accuracy,
                and continuous innovation.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Priya Engineers, we build more than products — we build
                long-term partnerships. By delivering performance-driven
                solutions and exceptional after-sales service, we consistently
                add measurable value to every customer we serve.
              </p>
            </div>
          </div>
        </section>

        {/* ── Company Timeline ──────────────────────────────────────────── */}
        <section aria-label="Priya Engineers company milestones" className="px-8">
          <div className="relative w-full overflow-clip">
            <TimelineContent />
          </div>
        </section>

        {/* ── Vision & Mission ──────────────────────────────────────────── */}
        <section
          aria-label="Our vision and mission"
          className="bg-gray-100 py-20 px-8"
        >
          <div className="max-w-6xl mx-auto relative">
            {/* Centre vertical divider – desktop only */}
            <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-[rgb(225,6,0)]" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">

              {/* Vision */}
              <div className="pr-0 md:pr-12 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[rgb(78,100,141)] tracking-wide mb-6 md:mb-10">
                  Our Vision
                </h2>
                <ul className="list-disc md:list-inside pl-5 md:pl-0 text-gray-700 text-base md:text-lg space-y-4">
                  <li>
                    To be a globally recognised leader in precision industrial
                    engineering and gear manufacturing innovation.
                  </li>
                  <li>
                    Deliver advanced, sustainable manufacturing solutions that
                    reduce machine downtime and drive operational productivity.
                  </li>
                  <li>
                    Empower industries through cutting-edge CNC technology,
                    data-driven quality control, and continuous process
                    improvement.
                  </li>
                </ul>
              </div>

              {/* Mission */}
              <div className="pl-0 md:pl-12 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-[rgb(78,100,141)] tracking-wide mb-6 md:mb-10">
                  Our Mission
                </h2>
                <ul className="list-disc md:list-inside pl-5 md:pl-0 text-gray-700 text-base md:text-lg space-y-4">
                  <li>
                    Ensure complete customer satisfaction through top-tier product
                    quality, on-time delivery, and responsive technical support.
                  </li>
                  <li>
                    Champion innovation and eco-friendly manufacturing practices
                    to minimise our environmental footprint.
                  </li>
                  <li>
                    Build robust, high-performance products that power critical
                    industries — from automotive and aerospace to energy and
                    heavy engineering.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Quality · Manufacturing · Service ────────────────────────── */}
        <section
          aria-labelledby="quality-heading"
          className="bg-white py-20 px-8"
        >
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Our Quality */}
            <div>
              <h2
                id="quality-heading"
                className="text-3xl md:text-4xl font-bold text-[rgb(225,6,0)] mb-6 tracking-wide"
              >
                Our Quality
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Quality is the cornerstone of everything we do at Priya Engineers.
                Our rigorous multi-stage inspection process — from raw-material
                sourcing through to final dispatch — ensures every gear and
                component meets ISO-compliant dimensional and performance
                tolerances. Our zero-defect philosophy guarantees reliability in
                even the most demanding industrial operating environments.
              </p>
            </div>

            {/* Manufacturing Excellence */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[rgb(225,6,0)] mb-6 tracking-wide">
                Manufacturing Excellence
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Our facilities house advanced CNC hobbing, profile grinding, and
                precision heat-treatment equipment operated by highly trained
                engineers and technicians. We follow lean-manufacturing principles
                to maintain consistency, minimise waste, and maximise output
                quality — scaling seamlessly from prototype runs to high-volume
                production without compromising accuracy or lead time.
              </p>
            </div>

            {/* Service Capability */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[rgb(225,6,0)] mb-6 tracking-wide">
                Service Capability
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Our customer-first approach extends well beyond the factory floor.
                From custom engineering consultations and rapid prototyping to
                scheduled preventive-maintenance programmes and expedited
                after-sales support, our team is always ready to resolve
                challenges quickly. Our global logistics network ensures timely,
                safe delivery to clients across Asia, Europe, and the Americas.
              </p>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}

export default AboutPage;