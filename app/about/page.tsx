// pages/about.tsx
import React from "react";
import Image from "next/image";
import SEO from "@/components/SEO";
import CommonHeader from "@/components/CommonHeader";
import { TimelineContent } from "@/components/TimelineContent";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1932&auto=format&fit=crop",
  about:
    "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=1400&auto=format&fit=crop",
};

const AboutPage: React.FC = () => {
  const seoData = {
    title: "About Us | Priya Engineers – Precision Gear & Industrial Manufacturer",
    description:
      "Priya Engineers is a global leader in precision gear and industrial component manufacturing, delivering advanced, reliable engineering solutions for automotive, aerospace, and heavy machinery sectors.",
    keywords:
      "precision gear manufacturer, industrial machinery, Priya Engineers, gear manufacturing India, CNC gear cutting, engineering solutions, industrial components, custom gears",
    url: "https://www.priyaengineers.com/about",
    ogImage: IMAGES.about,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Priya Engineers",
    url: "https://www.priyaengineers.com",
    logo: "https://www.priyaengineers.com/logo.png",
    description: seoData.description,
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

  return (
    <>
      <SEO {...seoData} jsonLd={jsonLd} />

      <main className="min-h-screen">

        {/* Hero Section */}
        <CommonHeader title="About Us" imageUrl={IMAGES.hero} />

        {/* Who We Are */}
        <section
          aria-labelledby="about-heading"
          className="bg-white py-20 px-6 md:px-12"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <Image
                src={IMAGES.about}
                alt="Priya Engineers CNC precision machinery"
                width={600}
                height={500}
                className="w-full h-auto rounded-xl shadow-lg object-cover"
                priority
              />
            </div>
            {/* Text */}
            <div className="w-full md:w-1/2">
              <h1
                id="about-heading"
                className="text-4xl font-bold text-red-600 mb-6 tracking-wide"
              >
                About Priya Engineers
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Priya Engineers is a globally trusted leader in{" "}
                <strong>precision gear and industrial component manufacturing</strong>.
                We deliver advanced engineering solutions with decades of proven expertise,
                serving automotive, aerospace, heavy machinery, and industrial automation industries worldwide.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Our foundation is built on skilled craftsmanship, state-of-the-art CNC technology,
                and a dedicated team focused on exceeding customer expectations. Every gear and
                component we produce reflects our values of reliability, dimensional accuracy, and innovation.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Priya Engineers, we don’t just manufacture products — we build long-term
                partnerships, delivering performance-driven solutions and exceptional after-sales support.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        {/* <section
          aria-label="Company Milestones"
          className="py-20 px-6 md:px-12"
        >
          <TimelineContent />
        </section> */}

        {/* Vision & Mission */}
        <section
          aria-labelledby="vision-mission-heading"
          className="bg-gray-100 py-20 px-6 md:px-12"
        >
          <div className="max-w-6xl mx-auto relative">
            {/* Vertical Divider */}
            <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">

              {/* Vision */}
              <div>
                <h2
                  id="vision-mission-heading"
                  className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 tracking-wide"
                >
                  Our Vision
                </h2>
                <ul className="list-disc md:list-inside text-gray-700 text-base md:text-lg space-y-3">
                  <li>Be a globally recognized leader in precision industrial engineering and gear manufacturing innovation.</li>
                  <li>Deliver advanced, sustainable manufacturing solutions that reduce machine downtime.</li>
                  <li>Empower industries through cutting-edge CNC technology and data-driven quality control.</li>
                </ul>
              </div>

              {/* Mission */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 tracking-wide">
                  Our Mission
                </h2>
                <ul className="list-disc md:list-inside text-gray-700 text-base md:text-lg space-y-3">
                  <li>Ensure complete customer satisfaction with top-tier quality, on-time delivery, and responsive support.</li>
                  <li>Champion innovation and eco-friendly manufacturing to minimize environmental footprint.</li>
                  <li>Build robust, high-performance products that power critical industries globally.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quality · Manufacturing · Service */}
        <section
          aria-labelledby="quality-heading"
          className="bg-white py-20 px-6 md:px-12"
        >
          <div className="max-w-5xl mx-auto space-y-16">

            {/* Quality */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 tracking-wide">
                Our Quality
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Quality is at the heart of Priya Engineers. Our multi-stage inspection — from raw materials to final dispatch — ensures ISO-compliant precision and reliability, even in demanding industrial environments.
              </p>
            </div>

            {/* Manufacturing */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 tracking-wide">
                Manufacturing Excellence
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our advanced CNC hobbing, profile grinding, and heat-treatment equipment, operated by skilled engineers, allow us to scale from prototypes to high-volume production with consistent quality and minimal lead times.
              </p>
            </div>

            {/* Service */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 tracking-wide">
                Service Capability
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Beyond manufacturing, our team offers custom engineering consultations, rapid prototyping, preventive maintenance programs, and global logistics support to ensure timely, safe delivery and complete customer satisfaction.
              </p>
            </div>

          </div>
        </section>

      </main>
    </>
  );
};

export default AboutPage;