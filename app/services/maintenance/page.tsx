import React from "react";

function page() {
  return (
    <div className="min-h-screen">
      <section
        className="relative py-16 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      >
        {/* Light blue transparent overlay */}
        <div className="absolute inset-0  bg-red-800/50 " />

        {/* Content above the overlay */}
        <div className="relative z-10 py-10 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Maintenance Service
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Engineering Services - Text Only */}
          <div className="md:flex md:items-center md:gap-12 space-y-8 md:space-y-0">
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="https://img.freepik.com/premium-photo/young-engineer-male-worker-work-heavy-metal-industry-cnc-lathe-machine-with-safety_43300-5061.jpg"
                alt="Installation services"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 tracking-[0.1em]">
                Maintenance of Equipment
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
          </div>

          {/* Installation & Commissioning - With Image */}
          <div className="md:flex md:items-center md:gap-12 space-y-8 md:space-y-0">
            {/* Text */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 tracking-[0.1em]">
                Maintenance of Equipment
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
              <img
                src="https://img.freepik.com/premium-photo/young-engineer-male-worker-work-heavy-metal-industry-cnc-lathe-machine-with-safety_43300-5061.jpg"
                alt="Installation services"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Key Considerations - Text Only */}
          <div className="md:flex md:items-center md:gap-12 space-y-8 md:space-y-0">
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src="https://img.freepik.com/premium-photo/young-engineer-male-worker-work-heavy-metal-industry-cnc-lathe-machine-with-safety_43300-5061.jpg"
                alt="Installation services"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 tracking-[0.1em]">
                Maintenance of Equipment
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
