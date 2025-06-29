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
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
      {industries.map(({ name, icon: Icon }) => (
        <div key={name} className="flex flex-col items-center text-center">
          <div className="w-44 h-44 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
            <Icon className="h-16 w-16 text-red-600 hover:text-blue-600" />
          </div>
          <h4 className="mt-4 text-gray-800 font-semibold text-sm">{name}</h4>
        </div>
      ))}
    </div>
  );
}
