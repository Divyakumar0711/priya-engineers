// components/Footer.tsx

import Image from "next/image";

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
    <footer className="bg-blue-900 text-white pt-12 pb-6 px-6 md:px-20">
      <div className="grid md:grid-cols-3 gap-12 border-b border-white/20 pb-10">
        {/* Contact Info Section */}
        <div>
          <h2 className="text-lg font-bold mb-4 tracking-wide">Get In Touch</h2>

          <div className="mb-4 flex gap-2 items-center">
            {/* Replace with MapPin icon SVG or image if needed */}
            <div className="w-12 h-12 bg-red-500 rounded-3xl flex items-center justify-center ">
              <Image
                src={"/assets/icons/location-white.png"}
                alt={"location"}
                width={24}
                height={24}
                className="group-hover:invert transition duration-300"
              />
            </div>{" "}
            <div className="text-sm tracking-wide">
              <p className="font-semibold">Office Address</p>
              <p>
                19 Swaminarayan complex, <br />
                near Mangaldeep Party Plot, Amraiwadi,
                <br />
                Ahmedabad – 382415,
                <br />
                Gujarat – India
              </p>
            </div>
          </div>

          <div className="mb-4 flex gap-2 items-center">
            <div className="w-12 h-12 bg-red-500 rounded-3xl flex items-center justify-center ">
              <Image
                src={"/assets/icons/call-white.png"}
                alt={"call"}
                width={24}
                height={24}
                className="group-hover:invert transition duration-300"
              />
            </div>{" "}
            <div className="text-sm tracking-wide">
              <p className="font-semibold">Phone Number</p>
              <a href="tel:+919978611575" className="hover:text-red-700 block">
                +91 9825790413
              </a>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <div className="w-12 h-12 bg-red-500 rounded-3xl flex items-center justify-center ">
              <Image
                src={"/assets/icons/mail-white.png"}
                alt={"email"}
                width={24}
                height={24}
                className="group-hover:invert transition duration-300"
              />
            </div>
            <div className="text-sm tracking-wide">
              <p className="font-semibold">Email Address</p>
              <a
                href="mailto:priyaengineersahd@gmail.com"
                className="hover:text-red-700 block"
              >
                priyaengineers@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Product Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-4 tracking-wide">Product Link</h2>
          <div className="grid grid-cols-2 gap-y-2 text-sm tracking-wide">
            {[
              "Worm Reduction Gearbox",
              "Gear Box Spares",
              "Extruder Gearbox",
              "Line Polish Head Spares Parts",
              "Helical GearBox",
              "Customized Products",
              "GCN Helical Gear Unit",
              "Transmission Parts",
              "Vertical Type Worm Gear Unit",
              "Worm Shaft",
              "GHU Type Worm Gear Unit",
              "Worm Wheel",
              "Spline Shafts",
            ].map((product) => (
              <a
                key={product}
                href="#"
                className="hover:text-red-700 transition-colors"
              >
                {product}
              </a>
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
