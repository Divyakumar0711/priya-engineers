"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

export default function ProductDetailsPage() {
  const params = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("slug", params.slug)
        .single();

      if (!error) setProduct(data);
    };

    fetchProduct();
  }, [params.slug]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="font-sans">
      {/* Header */}
      <section className="px-6 pt-10 pb-4 max-w-7xl mx-auto mt-10 ">
        <h1 className="text-3xl md:text-4xl font-bold text-[rgb(78,100,141)] tracking-wider">
          {product.title}
        </h1>
      </section>

      {/* Main Image and Description */}
      <section className="px-6 py-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={400}
            className="w-full h-auto rounded-md shadow"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-gray-700 mb-6 text-xl tracking-wide">
            {product.description}
          </p>
          {product.catalogue && (
            <a
              href={product.catalogue}
              target="_blank"
              className="text-[rgb(78,100,141)] hover:underline font-medium hover:text-[rgb(225,6,0)] tracking-wide"
            >
              Download Catalogue
            </a>
          )}
        </div>
      </section>

      {/* Technical Specifications */}
      {product.specs && typeof product.specs === "object" && (
        <section className="bg-gray-100 py-10 px-6">
          <div className="max-w-5xl mx-auto tracking-wide">
            <h2 className="text-2xl text-[rgb(225,6,0)] font-semibold mb-6">
              Technical Specifications
            </h2>
            <table className="w-full text-left table-auto border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 border">Parameter</th>
                  <th className="p-3 border">Details</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(product.specs).map(([key, value]) => (
                  <tr key={key}>
                    <td className="p-3 border">{key}</td>
                    <td className="p-3 border">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Features */}
      {product.features && typeof product.features === "object" && (
        <section className="py-12 px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-[rgb(225,6,0)]">
            Features
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {Object.entries(product.features).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Gallery */}
      {product.gallery && Array.isArray(product.gallery) && product.gallery.length > 0 && (
        <section className="py-10 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {product.gallery.map((img: string, index: number) => (
              <Image
                key={index}
                src={img}
                alt={`${product.title} view ${index + 1}`}
                width={400}
                height={300}
                className="rounded shadow"
              />
            ))}
          </div>
        </section>
      )}

      {/* Request a Quote Form */}
      <section className="bg-blue-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-[rgb(225,6,0)]">
            Request a Quote
          </h2>
          <form className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="p-3 border rounded w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              className="p-3 border rounded w-full"
            />
            <input
              type="text"
              placeholder="Company"
              className="p-3 border rounded w-full"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="p-3 border rounded md:col-span-2 w-full"
            ></textarea>
            <button
              type="submit"
              className="bg-[rgb(78,100,141)] text-white py-3 px-6 rounded hover:bg-[rgb(225,6,0)] md:col-span-2"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}