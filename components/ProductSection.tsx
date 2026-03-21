"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Cinzel } from "next/font/google";
import { supabase } from "@/lib/supabaseClient";

// ─── Font ─────────────────────────────────────────────────────────────────────
const cinzelFont = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });

// ─── Constants ────────────────────────────────────────────────────────────────
const BUCKET = "product-images";

// ─── Types ────────────────────────────────────────────────────────────────────
type Product = {
  title: string;
  slug: string;
  description: string;
  image?: string;
  specs?: Record<string, string | number | boolean>;
  features?: Record<string, string | number | boolean>;
  gallery?: string[];
  catalogue?: string;
};

type CardWithImage = Product & {
  resolvedImage: string;
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
function isValidUrl(url: string): boolean {
  if (!url || typeof url !== "string") return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

async function getMainImageForProduct(slug: string): Promise<string> {
  try {
    const { data: files, error } = await supabase.storage
      .from(BUCKET)
      .list(slug, { sortBy: { column: "name", order: "asc" } });

    if (error || !files || files.length === 0) return "";

    const imageFile = files.find(
      (f) =>
        f.name &&
        f.name !== ".emptyFolderPlaceholder" &&
        /\.(jpg|jpeg|png|webp|gif|avif)$/i.test(f.name)
    );

    if (!imageFile) return "";

    const { data } = supabase.storage
      .from(BUCKET)
      .getPublicUrl(`${slug}/${imageFile.name}`);

    return isValidUrl(data.publicUrl) ? data.publicUrl : "";
  } catch {
    return "";
  }
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProductsSection() {
  const [cards, setCards] = useState<CardWithImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error: dbError } = await supabase
          .from("products")
          .select("title, slug, description, image, gallery");

        if (dbError) {
          setError(`DB Error: ${dbError.message} (code: ${dbError.code})`);
          return;
        }

        if (!data || data.length === 0) {
          setError("No products found in the database.");
          return;
        }

        const cardsWithImages = await Promise.all(
          (data as Product[]).map(async (product) => {
            const storageImage = product.slug
              ? await getMainImageForProduct(product.slug)
              : "";

            const resolvedImage =
              storageImage ||
              (isValidUrl(product.image ?? "") ? product.image! : "") ||
              (product.gallery?.[0] && isValidUrl(product.gallery[0])
                ? product.gallery[0]
                : "");

            return { ...product, resolvedImage };
          })
        );

        setCards(cardsWithImages);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        setError(`Unexpected error: ${msg}`);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="relative text-center py-10 sm:py-16 lg:py-20 tracking-wide">
          <h3
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[2.5rem] md:text-[7rem] lg:text-[10rem] font-black select-none pointer-events-none tracking-[0.2em] uppercase ${cinzelFont.className}`}
          >
            Products
          </h3>
          <h1 className="relative mt-6 sm:mt-8 lg:mt-18 text-2xl lg:text-6xl font-bold text-[rgb(78,100,141)] z-10">
            What We Deliver
          </h1>
        </div>

        {/* ── Loading Skeleton ── */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col animate-pulse"
              >
                <div className="h-72 w-full bg-gray-200" />
                <div className="p-4 flex flex-col gap-3">
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-100 rounded w-full" />
                  <div className="h-4 bg-gray-100 rounded w-5/6" />
                  <div className="mt-4 h-9 bg-gray-200 rounded-2xl w-24 self-end" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Error State ── */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center p-12 gap-3">
            <p className="text-red-500 font-semibold text-sm">Failed to load products</p>
            <pre className="text-xs text-red-400 bg-red-50 border border-red-200 rounded p-4 max-w-lg w-full whitespace-pre-wrap">
              {error}
            </pre>
            <p className="text-gray-400 text-xs">Check browser console for full details</p>
          </div>
        )}

        {/* ── Product Grid ── */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {cards.map((card) => (
              <div
                key={card.slug}
                className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col"
              >
                <div className="relative h-72 w-full bg-gray-100">
                  {card.resolvedImage ? (
                    <Image
                      src={card.resolvedImage}
                      alt={card.title}
                      fill
                      className="object-cover rounded-t-2xl"
                      quality={100}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                      No image
                    </div>
                  )}
                </div>

                <div className="p-4 flex flex-col justify-between grow tracking-wide">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-1">
                      {card.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-auto flex justify-end">
                    <Link
                      href={`/products/${card.slug}`}
                      className="flex items-center gap-1 bg-[rgb(225,6,0)] text-white text-xs px-6 py-3 rounded-2xl hover:bg-[rgb(78,100,141)] transition"
                    >
                      <span className="text-[1rem]">Read</span>
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── More Products Button ── */}
        {!loading && !error && (
          <div className="flex justify-center mt-6 sm:mt-12">
            <Link
              href="/products"
              className="bg-[rgb(78,100,141)] text-white text-lg px-6 sm:px-10 py-2 sm:py-4 rounded-full hover:bg-[rgb(225,6,0)] transition"
            >
              More Products
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}