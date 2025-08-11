"use client";
import Link from "next/link";
import CommonHeader from "@/components/CommonHeader";
import Image from "next/image";
export default function ProductsPage() {
  const products = [
    {
      title: "Planetary Gearboxes Redulus⁴F",
      description:
        "The Redulus⁴F offers a significantly higher torque density and maximal flexibility.",
      image: "/assets/images/productTest.png",
      link: "#",
      catalogue: "Catalogue Redulus⁴F",
    },
    {
      title: "Drive Gearboxes GFA/GPT",
      description:
        "ZF Drive Gears are ideal driveline components for wheel, track or roller-driven mining applications and large construction machines.",
      image: "/assets/images/productTest.png",
      link: "#",
      catalogue: "Catalogue ZF Drive Gears GFA/GPT",
    },
    {
      title: "Drive Gearboxes GFA/GPT",
      description:
        "ZF Drive Gears are ideal driveline components for wheel, track or roller-driven mining applications and large construction machines.",
      image: "/assets/images/productTest.png",
      link: "#",
      catalogue: "Catalogue ZF Drive Gears GFA/GPT",
    },
    {
      title: "Drive Gearboxes GFA/GPT",
      description:
        "ZF Drive Gears are ideal driveline components for wheel, track or roller-driven mining applications and large construction machines.",
      image: "/assets/images/productTest.png",
      link: "#",
      catalogue: "Catalogue ZF Drive Gears GFA/GPT",
    },
  ];
  return (
    <div className="min-h-screen ">
      <CommonHeader
        title="Products"
        imageUrl="https://images.unsplash.com/photo-1711199694531-e982a79ea381?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-12 mb-20">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-10 bg-gray-50 p-8 rounded-2xl shadow-xl"
          >
            <div className="w-full md:w-[50%]">
              <Image
                src={product.image}
                alt={product.title}
                className="w-full h-[320px] object-contain"
              />
            </div>
            
            <div className="flex flex-col justify-center w-full md:w-[50%]">
              <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
              <p className="text-lg text-gray-700 mb-6">
                {product.description}
              </p>

              <Link href="/products/productDetails">
                <button className="px-6 py-2 bg-blue-700 text-white text-lg rounded-md hover:bg-blue-800 transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
}
