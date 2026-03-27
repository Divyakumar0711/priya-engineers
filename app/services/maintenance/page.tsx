// pages/maintenance-service.tsx
import React from "react";
import Image from "next/image";
import CommonHeader from "@/components/CommonHeader";
import SEO from "@/components/SEO";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?q=80&w=1170&auto=format&fit=crop",
  maintenance:
    "https://img.freepik.com/premium-photo/young-engineer-male-worker-work-heavy-metal-industry-cnc-lathe-machine-with-safety_43300-5061.jpg",
};

const MaintenanceServicePage: React.FC = () => {
  const seoData = {
    title: "Maintenance Services | Priya Engineers",
    description:
      "Priya Engineers provides expert industrial equipment maintenance services. Our technicians ensure smooth operation, precision, and extended equipment lifespan.",
    keywords:
      "industrial maintenance, equipment maintenance, Priya Engineers, CNC machine maintenance, preventive maintenance, industrial servicing",
    url: "https://www.priyaengineers.com/maintenance-service",
    ogImage: IMAGES.maintenance,
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Maintenance Services",
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
        <CommonHeader title="Maintenance Service" imageUrl={IMAGES.hero} />

        <section className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Preventive Maintenance Section */}
            <div className="md:flex md:items-center md:gap-12 space-y-8 md:space-y-0">
              {/* Image */}
              <div className="md:w-1/2">
                <Image
                  src={IMAGES.maintenance}
                  alt="Industrial maintenance services by Priya Engineers"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-red-600 tracking-wide">
                  Preventive & Corrective Maintenance
                </h1>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  Priya Engineers ensures your industrial machinery operates
                  efficiently and reliably. Our maintenance programs reduce
                  downtime, prevent costly breakdowns, and extend the lifespan
                  of your equipment.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-lg md:text-xl leading-relaxed space-y-2">
                  <li>Scheduled preventive maintenance for optimal performance.</li>
                  <li>Corrective maintenance for rapid troubleshooting and repair.</li>
                  <li>Precision alignment of mechanical and electrical systems.</li>
                  <li>Inspection and replacement of critical components.</li>
                  <li>Training for your team on safe operation and routine checks.</li>
                </ul>
              </div>
            </div>

            {/* Key Considerations Section */}
            <div className="md:flex md:items-center md:gap-12 space-y-8 md:space-y-0">
              {/* Text */}
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-red-600 tracking-wide">
                  Key Considerations in Maintenance
                </h2>
                <ul className="list-disc list-inside text-gray-700 text-lg md:text-xl leading-relaxed space-y-2">
                  <li>Detailed evaluation of equipment performance and tolerances.</li>
                  <li>Material selection for wear resistance and operational load.</li>
                  <li>Customized maintenance for non-standard or legacy machines.</li>
                  <li>Technical documentation for each maintenance cycle.</li>
                  <li>Future-proof planning for scalability and uptime.</li>
                </ul>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  Our maintenance services focus on safety, reliability, and operational excellence,
                  ensuring your equipment performs at peak efficiency.
                </p>
              </div>

              {/* Image */}
              <div className="md:w-1/2">
                <Image
                  src={IMAGES.maintenance}
                  alt="Industrial maintenance key considerations"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MaintenanceServicePage;