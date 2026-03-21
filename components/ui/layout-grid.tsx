// import {
//   Factory,
//   Car,
//   Plane,
//   Bolt,
//   Building2,
//   Hammer,
//   FlaskConical,
//   Cpu,
//   ShieldCheck,
//   ShoppingBag,
//   Leaf,
//   Server,
// } from "lucide-react";

// const industries = [
//   { name: "Manufacturing", icon: Factory },
//   { name: "Automotive", icon: Car },
//   { name: "Aerospace", icon: Plane },
//   { name: "Energy", icon: Bolt },
//   { name: "Construction", icon: Building2 },
//   { name: "Heavy Industry", icon: Hammer },
//   { name: "Chemicals", icon: FlaskConical },
//   { name: "IT & Tech", icon: Cpu },
//   { name: "Security", icon: ShieldCheck },
//   { name: "Retail", icon: ShoppingBag },
//   { name: "Environment", icon: Leaf },
//   { name: "Data Centers", icon: Server },
// ];

// export default function LayoutGrid() {
//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 p-4 sm:p-6">
//       {industries.map(({ name, icon: Icon }) => (
//         <div
//           key={name}
//           className="flex flex-col items-center text-center tracking-wide"
//         >
//           {/* Responsive circle sizes */}
//           <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
//             <Icon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-[rgb(225,6,0)] hover:text-[rgb(78,100,141)]" />
//           </div>
//           <h4 className="mt-3 sm:mt-4 text-gray-800 font-semibold text-xs sm:text-sm md:text-base">
//             {name}
//           </h4>
//         </div>
//       ))}
//     </div>
//   );
// }
import {
  Factory,
  Car,
  Plane,
  Bolt,
  Building2,
  Hammer,
  FlaskConical,
  Leaf,
  Truck,
  Cog,
  Droplets,
  Wheat,
} from "lucide-react";

// ✅ FIXED: Removed irrelevant industries (IT, Security, Retail, Data Centers)
// ✅ ADDED: Textile, Agriculture, Oil & Gas, Material Handling — real shaft buyers
const industries = [
  {
    name: "Automotive",
    icon: Car,
    desc: "Drive shafts, axle & gear shafts for OEMs and Tier-1 suppliers",
  },
  {
    name: "Heavy Industry",
    icon: Hammer,
    desc: "Robust transmission shafts for presses, mills & heavy machinery",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    desc: "Custom shafts for conveyors, mixers & production equipment",
  },
  {
    name: "Energy & Power",
    icon: Bolt,
    desc: "Precision shafts for turbines, generators & power equipment",
  },
  {
    name: "Pumps & Motors",
    icon: Droplets,
    desc: "Pump shafts & motor shafts for water, chemical & process industries",
  },
  {
    name: "Chemicals",
    icon: FlaskConical,
    desc: "Corrosion-resistant shafts for agitators, reactors & process plants",
  },
  {
    name: "Aerospace & Defence",
    icon: Plane,
    desc: "High-tolerance precision components meeting strict dimensional specs",
  },
  {
    name: "Construction",
    icon: Building2,
    desc: "Heavy-duty shafts for excavators, cranes & earth-moving equipment",
  },
  {
    name: "Material Handling",
    icon: Truck,
    desc: "Conveyor & drive shafts for warehouses, ports & logistics systems",
  },
  {
    name: "Textile Machinery",
    icon: Cog,
    desc: "Precision shafts for looms, spinning frames & textile equipment",
  },
  {
    name: "Agriculture",
    icon: Wheat,
    desc: "Durable shafts for tractors, threshers & farm machinery",
  },
  {
    name: "Environment",
    icon: Leaf,
    desc: "Shafts for waste treatment, recycling & water management plants",
  },
];

export default function LayoutGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 p-4 sm:p-6">
      {industries.map(({ name, icon: Icon, desc }) => (
        <div
          key={name}
          className="flex flex-col items-center text-center tracking-wide group"
        >
          {/* Circle icon */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 group-hover:bg-[rgb(78,100,141)]">
            <Icon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-[rgb(225,6,0)] group-hover:text-white transition-colors duration-300" />
          </div>

          <h4 className="mt-3 sm:mt-4 text-gray-800 font-semibold text-xs sm:text-sm md:text-base">
            {name}
          </h4>

          {/* ✅ NEW: Description shown on hover (desktop) / always visible (mobile) */}
          <p className="mt-1 text-gray-500 text-xs leading-snug max-w-32.5 sm:max-w-37.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
            {desc}
          </p>
        </div>
      ))}
    </div>
  );
}