import CommonHeader from "@/components/CommonHeader";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="min-h-screen">
      <CommonHeader
        title="Installation Service"
        imageUrl="https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Engineering Services - Text Only */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 tracking-[0.1em]">
              Engineering Services
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              At Priya Engineers, our engineering team provides reliable
              solutions tailored for your industrial machinery. Whether you are
              optimizing performance, replacing outdated systems, or preventing
              downtime, our expertise supports you every step of the way.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              You may need our engineering support if:
            </p>

            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg leading-relaxed space-y-2">
              <li>
                Your machinery is facing frequent breakdowns or efficiency loss.
              </li>
              <li>
                You are unable to source critical components from OEM suppliers.
              </li>
              <li>
                Your plant operations are delayed due to long lead times for
                spare parts.
              </li>
              <li>
                You are looking to upgrade outdated or inefficient systems.
              </li>
              <li>High maintenance costs are impacting your bottom line.</li>
            </ul>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Our team ensures cost-effective solutions, utilizing high-quality
              materials designed for extended performance and durability.
            </p>
          </div>

          {/* Installation & Commissioning - With Image */}
          <div className="md:flex md:items-center md:gap-12 space-y-8 md:space-y-0">
            {/* Text */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-red-700  tracking-[0.1em]">
                Installation & Commissioning Services
              </h2>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Our experienced technicians provide complete installation and
                commissioning support, ensuring smooth integration and optimal
                performance for your equipment.
              </p>

              <ul className="list-disc list-inside text-gray-700 text-base md:text-lg leading-relaxed space-y-2">
                <li>
                  On-site assessment and preparation of equipment foundations.
                </li>
                <li>
                  Precision installation of gear units, worm gearboxes, and
                  transmission parts.
                </li>
                <li>
                  Electrical and mechanical alignment with existing systems.
                </li>
                <li>
                  Performance verification and safety checks before handover.
                </li>
                <li>
                  Training for your technical team on equipment operation and
                  maintenance.
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="md:w-1/2">
              <Image
                src="https://img.freepik.com/premium-photo/young-engineer-male-worker-work-heavy-metal-industry-cnc-lathe-machine-with-safety_43300-5061.jpg"
                alt="Installation services"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Key Considerations - Text Only */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 tracking-[0.1em]">
              Key Considerations in Engineering & Installation
            </h2>

            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg leading-relaxed space-y-2">
              <li>
                Detailed evaluation of component dimensions and tolerances.
              </li>
              <li>
                Material selection based on load capacity, wear resistance, and
                environment.
              </li>
              <li>
                Customized solutions for non-standard or obsolete components.
              </li>
              <li>
                Precision manufacturing to improve performance and reliability.
              </li>
              <li>
                Technical documentation and quality testing for every part
                installed.
              </li>
              <li>Planning for future scalability and ease of maintenance.</li>
            </ul>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Whether you are upgrading a single part or re-engineering a
              complete system, we focus on durability, safety, and operational
              excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
