// pages/installation-service.tsx
import React from "react";
import Image from "next/image";
import SEO from "@/components/SEO";
import CommonHeader from "@/components/CommonHeader";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  installation:
    "https://img.freepik.com/premium-photo/young-engineer-male-worker-work-heavy-metal-industry-cnc-lathe-machine-with-safety_43300-5061.jpg",
};

const InstallationServicePage: React.FC = () => {
  const seoData = {
    title: "Installation & Engineering Services | Priya Engineers",
    description:
      "Priya Engineers offers expert engineering, installation, and commissioning services for industrial machinery. We ensure precision, safety, and optimal performance.",
    keywords:
      "industrial installation services, commissioning, engineering solutions, Priya Engineers, CNC machinery installation, equipment setup, industrial maintenance",
    url: "https://www.priyaengineers.com/installation-service",
    ogImage: IMAGES.installation,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Installation & Engineering Services",
    provider: {
      "@type": "Organization",
      name: "Priya Engineers",
      url: "https://www.priyaengineers.com",
      logo: "https://www.priyaengineers.com/logo.png",
    },
    description: seoData.description,
  };

  return (
    <>
      <SEO {...seoData} jsonLd={jsonLd} />

      <main className="min-h-screen">
        {/* Hero Section */}
        <CommonHeader title="Installation Service" imageUrl={IMAGES.hero} />

        <section className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-24">

            {/* Engineering Services */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-red-600 tracking-wide">
                Engineering Services
              </h1>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                At Priya Engineers, our engineering team provides reliable solutions
                for your industrial machinery. We optimize performance, prevent downtime,
                and support your operations at every step.
              </p>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                You may need our engineering support if:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-lg md:text-xl leading-relaxed space-y-2">
                <li>Machinery faces frequent breakdowns or efficiency loss.</li>
                <li>Critical components are unavailable from OEM suppliers.</li>
                <li>Plant operations are delayed due to long lead times for parts.</li>
                <li>Upgrading outdated or inefficient systems.</li>
                <li>High maintenance costs affecting profitability.</li>
              </ul>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                Our team delivers cost-effective solutions using high-quality materials
                for extended durability and performance.
              </p>
            </div>

            {/* Installation & Commissioning */}
            <div className="md:flex md:items-center md:gap-12 space-y-8 md:space-y-0">
              {/* Text */}
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 tracking-wide">
                  Installation & Commissioning Services
                </h2>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  Our technicians provide complete installation and commissioning support,
                  ensuring smooth integration and optimal performance for your equipment.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-lg md:text-xl leading-relaxed space-y-2">
                  <li>On-site assessment and preparation of equipment foundations.</li>
                  <li>Precision installation of gear units, worm gearboxes, and transmission parts.</li>
                  <li>Electrical and mechanical alignment with existing systems.</li>
                  <li>Performance verification and safety checks before handover.</li>
                  <li>Training for your technical team on equipment operation and maintenance.</li>
                </ul>
              </div>

              {/* Image */}
              <div className="md:w-1/2">
                <Image
                  src={IMAGES.installation}
                  alt="Installation & commissioning services by Priya Engineers"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

            {/* Key Considerations */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 tracking-wide">
                Key Considerations in Engineering & Installation
              </h2>
              <ul className="list-disc list-inside text-gray-700 text-lg md:text-xl leading-relaxed space-y-2">
                <li>Detailed evaluation of component dimensions and tolerances.</li>
                <li>Material selection based on load capacity, wear resistance, and environment.</li>
                <li>Customized solutions for non-standard or obsolete components.</li>
                <li>Precision manufacturing to improve performance and reliability.</li>
                <li>Technical documentation and quality testing for every part installed.</li>
                <li>Planning for future scalability and ease of maintenance.</li>
              </ul>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                Whether upgrading a single component or re-engineering a full system,
                we focus on durability, safety, and operational excellence.
              </p>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};

export default InstallationServicePage;