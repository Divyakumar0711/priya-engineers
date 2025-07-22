"use client";
import Link from "next/link";
import productData from "@/data/productData";

export default function ProductsPage() {
  return (
    <div className="min-h-screen ">
      <section
        className="relative py-16 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1711199694531-e982a79ea381?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Light blue transparent overlay */}
        <div className="absolute inset-0  bg-red-800/50 " />

        {/* Content above the overlay */}
        <div className="relative z-10 py-10 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              All products
            </h1>
          </div>
        </div>
      </section>{" "}
      <ul className="mt-6 space-y-4">
        {productData.map((product) => (
          <li key={product.id}>
            <Link
              href={`/products/productDetails?productId=${product.id}`}
              className="text-blue-500 hover:underline"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
