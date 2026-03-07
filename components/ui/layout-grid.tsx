import {
  Factory,
  Car,
  Plane,
  Bolt,
  Building2,
  Hammer,
  FlaskConical,
  Cpu,
  ShieldCheck,
  ShoppingBag,
  Leaf,
  Server,
} from "lucide-react";

const industries = [
  { name: "Manufacturing", icon: Factory },
  { name: "Automotive", icon: Car },
  { name: "Aerospace", icon: Plane },
  { name: "Energy", icon: Bolt },
  { name: "Construction", icon: Building2 },
  { name: "Heavy Industry", icon: Hammer },
  { name: "Chemicals", icon: FlaskConical },
  { name: "IT & Tech", icon: Cpu },
  { name: "Security", icon: ShieldCheck },
  { name: "Retail", icon: ShoppingBag },
  { name: "Environment", icon: Leaf },
  { name: "Data Centers", icon: Server },
];

export default function LayoutGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 p-4 sm:p-6">
      {industries.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="flex flex-col items-center text-center tracking-wide"
        >
          {/* Responsive circle sizes */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
            <Icon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-[rgb(225,6,0)] hover:text-[rgb(78,100,141)]" />
          </div>
          <h4 className="mt-3 sm:mt-4 text-gray-800 font-semibold text-xs sm:text-sm md:text-base">
            {name}
          </h4>
        </div>
      ))}
    </div>
  );
}
