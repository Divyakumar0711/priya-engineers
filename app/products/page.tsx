
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CommonHeader from "@/components/CommonHeader";
import { supabase } from "@/lib/supabaseClient";

type Product = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data || []);
      }

      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen">
      <CommonHeader
        title="Products"
        imageUrl="https://images.unsplash.com/photo-1711199694531-e982a79ea381?q=80&w=1932&auto=format&fit=crop"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-6 md:mx-12 mb-20 mt-10">
        {loading && (
          <p className="text-center col-span-2 text-lg">Loading products...</p>
        )}

        {!loading &&
          products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row items-center gap-10 bg-gray-50 p-8 rounded-2xl shadow-xl"
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative w-full h-80">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">
                  {product.title}
                </h3>

                <p className="text-lg text-gray-700 mb-6">
                  {product.description}
                </p>

                <Link href={`/products/${product.slug}`}>
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

