"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type Card = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
};

const cardData: Card[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1627807452502-0c8329fc710b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Precision Engineering",
    subtitle: "High-quality components for optimal performance.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1582043568773-a7a2b57239f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Reliable Materials",
    subtitle: "Built with strength and durability in mind.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1582043568773-a7a2b57239f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Innovative Design",
    subtitle: "Modern solutions for complex challenges.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1582043568773-a7a2b57239f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sustainable Solutions",
    subtitle: "Eco-friendly production processes.",
  },
];

const Card: React.FC = () => {
  const [cards] = useState<Card[]>(cardData);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <Image
              src={card.image}
              alt={card.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-grow tracking-wide">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">{card.subtitle}</p>
              </div>
              <div className="mt-auto flex justify-end">
                <button className="flex items-center gap-1 bg-red-700 text-white text-xs px-6 py-3 rounded-2xl hover:bg-blue-900 transition">
                  <span className="text-[1rem]">Read</span>
                  <ArrowRight size={14} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Card;
