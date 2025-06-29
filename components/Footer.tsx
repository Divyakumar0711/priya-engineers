// components/Footer.tsx

import {
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Youtube,
  Linkedin,
  Instagram,
  Home,
  GanttChartSquare,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#03254c] text-white pt-12 pb-6 px-6 md:px-20">
      <div className="grid md:grid-cols-3 gap-12 border-b border-white/20 pb-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-4">Get In Touch</h2>

          <div className="mb-4 flex gap-2">
            <MapPin className="text-orange-500 mt-1" />
            <div className="text-sm">
              <p className="font-semibold">Office Address</p>
              <p>
                19, Swaminarayan Complex <br />
                Rabari Colony cross road <br />
                Ahmedabad – 380 026. <br />
                Gujarat – India
              </p>
            </div>
          </div>

          <div className="mb-4 flex gap-2">
            <Phone className="text-orange-500 mt-1" />
            <div className="text-sm">
              <p className="font-semibold">Phone Number</p>
              <a href="tel:+919978611575" className="hover:text-red-500 block">
                +91 9825790413
              </a>
            </div>
          </div>

          <div className="flex gap-2">
            <Mail className="text-orange-500 mt-1" />
            <div className="text-sm">
              <p className="font-semibold">Email Address</p>
              <p>
                {" "}
                <a
                  href="mailto:gammagears@gmail.com"
                  className="hover:text-red-500 block"
                >
                  priyaengineers@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Product Links */}
         <div>
          <h2 className="text-lg font-bold mb-4">Product Link</h2>
          <div className="grid grid-cols-2 gap-y-2 text-sm">
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
                className="hover:text-red-500 transition-colors"
              >
                {product}
              </a>
            ))}
          </div>
        </div>

        {/* Social Media Icons */}
        <div>
          <h2 className="text-lg font-bold mb-4">Social Media</h2>
          <div className="flex flex-wrap gap-3">
            {/* <SocialIcon icon={<Facebook size={20} />} bg="bg-white" text="text-blue-600" link="#" />
            <SocialIcon icon={<Twitter size={20} />} bg="bg-black" text="text-white" link="#" />
            <SocialIcon icon={<GanttChartSquare size={20} />} bg="bg-gray-400" text="text-black" link="#" />
            <SocialIcon icon={<Instagram size={20} />} bg="bg-pink-600" text="text-white" link="#" />
            <SocialIcon icon={<Youtube size={20} />} bg="bg-red-600" text="text-white" link="#" />
            <SocialIcon icon={<Linkedin size={20} />} bg="bg-blue-700" text="text-white" link="#" />
            <SocialIcon icon={<Pinterest size={20} />} bg="bg-red-500" text="text-white" link="#" /> */}
            <SocialIcon icon={<Home size={20} />} bg="bg-gray-500" text="text-white" link="#" />
          
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-8">
        Copyright © 2025 Priya Engineers. All Rights Reserved.
      </p>
    </footer>
  );
};

// Reusable icon wrapper
type IconBoxProps = {
  icon: React.ReactNode;
  bg: string;
  text: string;
  link: string;
};

const SocialIcon = ({ icon, bg, text, link }: IconBoxProps) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`${bg} ${text} p-2 rounded-sm w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform`}
  >
    {icon}
  </a>
);

export default Footer;
