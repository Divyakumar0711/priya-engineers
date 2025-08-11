import React from "react";
import { TimelineContent } from "@/components/TimelineContent";
import CommonHeader from "@/components/CommonHeader";
import Image from "next/image";
function page() {
  return (
    <div className="min-h-screen ">
      <CommonHeader
        title="About Us"
        imageUrl="https://images.unsplash.com/photo-1711199694531-e982a79ea381?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"
      />
      <section className="bg-white py-20 px-8 pr-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1711199694531-e982a79ea381?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Gamma Gears"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-red-700 mb-6 tracking-wide">
              About Us
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Priya engineers is a leader in precision gear manufacturing, known
              for its advanced engineering solutions and commitment to
              excellence. With decades of experience, we cater to a global
              clientele across multiple industrial sectors.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our foundation is built on quality craftsmanship, cutting-edge
              technology, and a team of professionals who strive to exceed
              expectations. Every product we deliver reflects our dedication to
              reliability and innovation.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Priya engineers, we believe in building long-term partnerships
              by delivering performance-driven products and exceptional service
              that adds value to every customer we serve.
            </p>
          </div>
        </div>
      </section>

      <section className=" px-8 pr-8">
        <div className="relative w-full overflow-clip">
          <TimelineContent />
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-8 pr-8">
        <div className="max-w-6xl mx-auto relative">
          {/* Center vertical line for medium+ screens only */}
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-700" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            {/* Our Vision */}
            <div
              className="
             pr-0 md:pr-12 text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 tracking-wide mb-6 md:mb-10">
                Our Vision
              </h2>
              <ul className="list-disc md:list-inside pl-5 md:pl-0 text-gray-700 text-base md:text-lg space-y-4">
                <li>To be a global leader in industrial innovation.</li>
                <li>Deliver advanced, sustainable engineering solutions.</li>
                <li>Empower businesses through precision and technology.</li>
              </ul>
            </div>

            {/* Our Mission */}
            <div className="md:text-left pl-0 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 tracking-wide mb-6 md:mb-10">
                Our Mission
              </h2>
              <ul className="list-disc md:list-inside pl-5 md:pl-0 text-gray-700 text-base md:text-lg space-y-4">
                <li>Ensure customer satisfaction with top-tier service.</li>
                <li>Promote innovation and eco-friendly practices.</li>
                <li>Build reliable and efficient products for industries.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-8 pr-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Our Quality */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-700   mb-6 tracking-wide">
              Our Quality:
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We are committed to delivering exceptional quality in every
              product we manufacture. Through rigorous quality control
              procedures and a passion for excellence, we ensure that each
              component meets the highest standards. Our dedication to precision
              and durability sets us apart in the industrial sector.
            </p>
          </div>

          {/* Manufacturing Quality */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6 tracking-wide">
              Manufacturing Quality
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Our manufacturing facilities are equipped with cutting-edge
              technology and operated by a highly skilled workforce. We follow
              industry best practices to maintain consistency and efficiency in
              our processes, allowing us to produce reliable and high-performing
              products that cater to diverse industrial needs.
            </p>
          </div>

          {/* Service Capability */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6 tracking-wide">
              Service Capability
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We pride ourselves on our comprehensive service capabilities that
              support our clients before, during, and after the sales process.
              From custom engineering solutions to prompt support and
              maintenance, our team ensures a seamless and satisfying experience
              for all our customers across the globe.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
