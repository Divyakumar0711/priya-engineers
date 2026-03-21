// "use client";
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import { supabase } from "@/lib/supabaseClient";

// export default function ProductDetailsPage() {
//   const params = useParams();
//   interface Product {
//   title: string;
//   slug: string;
//   description: string;
//   image: string;
//   catalogue?: string;
//   specs?: Record<string, string | number | boolean>;
//   features?: Record<string, string | number | boolean>;
//   gallery?: string[];
// }
// const [product, setProduct] = useState<Product | null>(null);
//   useEffect(() => {
//     const fetchProduct = async () => {
//       const { data, error } = await supabase
//         .from("products")
//         .select("*")
//         .eq("slug", params.slug)
//         .single();

//       if (!error) setProduct(data);
//     };

//     fetchProduct();
//   }, [params.slug]);

//   if (!product) return <p className="text-center mt-10">Loading...</p>;

//   return (
//     <div className="font-sans">
//       {/* Header */}
//       <section className="px-6 pt-10 pb-4 max-w-7xl mx-auto mt-10 ">
//         <h1 className="text-3xl md:text-4xl font-bold text-[rgb(78,100,141)] tracking-wider">
//           {product.title}
//         </h1>
//       </section>

//       {/* Main Image and Description */}
//       <section className="px-6 py-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
//         <div>
//           <Image
//             src={product.image}
//             alt={product.title}
//             width={600}
//             height={400}
//             className="w-full h-auto rounded-md shadow"
//           />
//         </div>
//         <div className="flex flex-col">
//           <p className="text-gray-700 mb-6 text-xl tracking-wide">
//             {product.description}
//           </p>
//           {product.catalogue && (
//             <a
//               href={product.catalogue}
//               target="_blank"
//               className="text-[rgb(78,100,141)] hover:underline font-medium hover:text-[rgb(225,6,0)] tracking-wide"
//             >
//               Download Catalogue
//             </a>
//           )}
//         </div>
//       </section>

//       {/* Technical Specifications */}
//       {product.specs && typeof product.specs === "object" && (
//         <section className="bg-gray-100 py-10 px-6">
//           <div className="max-w-5xl mx-auto tracking-wide">
//             <h2 className="text-2xl text-[rgb(225,6,0)] font-semibold mb-6">
//               Technical Specifications
//             </h2>
//             <table className="w-full text-left table-auto border border-gray-300">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th className="p-3 border">Parameter</th>
//                   <th className="p-3 border">Details</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Object.entries(product.specs).map(([key, value]) => (
//                   <tr key={key}>
//                     <td className="p-3 border">{key}</td>
//                     <td className="p-3 border">{String(value)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       )}

//       {/* Features */}
//       {product.features && typeof product.features === "object" && (
//         <section className="py-12 px-6 max-w-5xl mx-auto">
//           <h2 className="text-2xl font-semibold mb-6 text-[rgb(225,6,0)]">
//             Features
//           </h2>
//           <ul className="list-disc pl-6 space-y-2 text-gray-700">
//             {Object.entries(
//               product.features as Record<string, string | number | boolean>,
//             ).map(([key, value]) => (
//               <li key={key}>
//                 {key}: {value}
//               </li>
//             ))}
//           </ul>
//         </section>
//       )}

//       {/* Gallery */}
//       {product.gallery &&
//         Array.isArray(product.gallery) &&
//         product.gallery.length > 0 && (
//           <section className="py-10 px-6 max-w-6xl mx-auto">
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//               {product.gallery.map((img: string, index: number) => (
//                 <Image
//                   key={index}
//                   src={img}
//                   alt={`${product.title} view ${index + 1}`}
//                   width={400}
//                   height={300}
//                   className="rounded shadow"
//                 />
//               ))}
//             </div>
//           </section>
//         )}

//       {/* Request a Quote Form */}
//       <section className="bg-blue-50 py-12 px-6">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-2xl font-semibold mb-6 text-[rgb(225,6,0)]">
//             Request a Quote
//           </h2>
//           <form className="grid gap-4 md:grid-cols-2">
//             <input
//               type="text"
//               placeholder="Name"
//               className="p-3 border rounded w-full"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="p-3 border rounded w-full"
//             />
//             <input
//               type="text"
//               placeholder="Phone"
//               className="p-3 border rounded w-full"
//             />
//             <input
//               type="text"
//               placeholder="Company"
//               className="p-3 border rounded w-full"
//             />
//             <textarea
//               placeholder="Message"
//               rows={4}
//               className="p-3 border rounded md:col-span-2 w-full"
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-[rgb(78,100,141)] text-white py-3 px-6 rounded hover:bg-[rgb(225,6,0)] md:col-span-2"
//             >
//               Submit Request
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
// ─── Edit to match your brand ───────────────────────────────────────────────
const SITE_NAME = "Priya Engineers";
const SITE_URL = "https://yourdomain.com";
const BUCKET = "product-images";
// ────────────────────────────────────────────────────────────────────────────

type Product = {
  title: string;
  slug: string;
  description: string;
  image?: string;
  catalogue?: string;
  specs?: Record<string, string | number | boolean>;
  features?: Record<string, string | number | boolean>;
  gallery?: string[];
};

// ─── Safe URL check ──────────────────────────────────────────────────────────
function isValidUrl(url: string): boolean {
  if (!url || typeof url !== "string") return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// ─── Fetch product from Supabase DB ─────────────────────────────────────────
async function getProduct(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) return null;
  return data as Product;
}

// ─── Auto-fetch images from Supabase Storage folder ─────────────────────────
async function getProductImages(slug: string): Promise<{
  main: string;
  gallery: string[];
}> {
  if (!slug) return { main: "", gallery: [] };

  const { data: files, error } = await supabase.storage
    .from(BUCKET)
    .list(slug, { sortBy: { column: "name", order: "asc" } });

  if (error || !files || files.length === 0) {
    return { main: "", gallery: [] };
  }

  const urls = files
    .filter(
      (f) =>
        f.name &&
        f.name !== ".emptyFolderPlaceholder" &&
        /\.(jpg|jpeg|png|webp|gif|avif)$/i.test(f.name)
    )
    .map((f) => {
      const { data } = supabase.storage
        .from(BUCKET)
        .getPublicUrl(`${slug}/${f.name}`);
      // Only include URLs that are actually valid
      return isValidUrl(data.publicUrl) ? data.publicUrl : "";
    })
    .filter(Boolean); // remove any empty strings

  const [main, ...gallery] = urls;
  return { main: main ?? "", gallery };
}

// ─── Dynamic SEO metadata ────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) return { title: "Product Not Found" };

  const { main: storageImage } = await getProductImages(slug);
  const ogImage = storageImage || (isValidUrl(product.image ?? "") ? product.image! : "");
  const canonicalUrl = `${SITE_URL}/products/${product.slug}`;

  return {
    title: `${product.title} | ${SITE_NAME}`,
    description: product.description?.slice(0, 160),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: product.title,
      description: product.description?.slice(0, 160),
      url: canonicalUrl,
      siteName: SITE_NAME,
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630, alt: `${product.title} product image` }],
      }),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description?.slice(0, 160),
      ...(ogImage && { images: [ogImage] }),
    },
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [product, { main: storageMain, gallery: storageGallery }] =
    await Promise.all([getProduct(slug), getProductImages(slug)]);

  if (!product) notFound();

  const heroImage =
    storageMain ||
    (isValidUrl(product.image ?? "") ? product.image! : "");

  const galleryImages =
    storageGallery.length > 0
      ? storageGallery
      : (product.gallery ?? []).filter((url) => isValidUrl(url));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    ...(heroImage && { image: heroImage }),
    url: `${SITE_URL}/products/${product.slug}`,
    brand: { "@type": "Brand", name: SITE_NAME },
    ...(product.specs && {
      additionalProperty: Object.entries(product.specs).map(([key, value]) => ({
        "@type": "PropertyValue",
        name: key,
        value: String(value),
      })),
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="font-sans">

        {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
        <nav
          aria-label="Breadcrumb"
          className="px-6 pt-6 max-w-7xl mx-auto text-sm text-gray-500"
        >
          <ol className="flex gap-2 list-none p-0">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/products" className="hover:underline">Products</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-gray-800 font-medium">
              {product.title}
            </li>
          </ol>
        </nav>

        {/* ── Title ───────────────────────────────────────────────────────── */}
        <header className="px-6 pt-6 pb-4 max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[rgb(78,100,141)] tracking-wider">
            {product.title}
          </h1>
        </header>

        {/* ── Hero Image + Description ─────────────────────────────────────── */}
        <section
          aria-label="Product overview"
          className="px-6 py-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12"
        >
          <div>
            {heroImage ? (
              <Image
                src={heroImage}
                alt={`${product.title} — main product image`}
                width={600}
                height={400}
                className="w-full h-auto rounded-md shadow"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full  rounded-md shadow bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                No image available
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center gap-4">
            <p className="text-gray-700 text-xl tracking-wide leading-relaxed">
              {product.description}
            </p>
            {product.catalogue && isValidUrl(product.catalogue) && (
              <a
                href={product.catalogue}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[rgb(78,100,141)] hover:text-[rgb(225,6,0)] font-medium tracking-wide hover:underline"
                aria-label={`Download catalogue for ${product.title}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                  />
                </svg>
                Download Catalogue
              </a>
            )}
          </div>
        </section>

        {/* ── Technical Specifications ─────────────────────────────────────── */}
        {product.specs && typeof product.specs === "object" && (
          <section
            aria-labelledby="specs-heading"
            className="bg-gray-100 py-10 px-6"
          >
            <div className="max-w-5xl mx-auto tracking-wide">
              <h2
                id="specs-heading"
                className="text-2xl text-[rgb(225,6,0)] font-semibold mb-6"
              >
                Technical Specifications
              </h2>
              <table className="w-full text-left table-auto border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-3 border font-semibold">Parameter</th>
                    <th className="p-3 border font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(product.specs).map(([key, value]) => (
                    <tr key={key} className="even:bg-white odd:bg-gray-50">
                      <td className="p-3 border font-medium text-gray-700">{key}</td>
                      <td className="p-3 border text-gray-600">{String(value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ── Features ────────────────────────────────────────────────────── */}
        {product.features && typeof product.features === "object" && (
          <section
            aria-labelledby="features-heading"
            className="py-12 px-6 max-w-5xl mx-auto"
          >
            <h2
              id="features-heading"
              className="text-2xl font-semibold mb-6 text-[rgb(225,6,0)]"
            >
              Features
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {Object.entries(
                product.features as Record<string, string | number | boolean>
              ).map(([key, value]) => (
                <li key={key}>
                  <span className="font-medium">{key}:</span> {String(value)}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ── Gallery ─────────────────────────────────────────────────────── */}
        {galleryImages.length > 0 && (
          <section
            aria-labelledby="gallery-heading"
            className="py-10 px-6 max-w-6xl mx-auto"
          >
            <h2
              id="gallery-heading"
              className="text-2xl font-semibold mb-6 text-[rgb(225,6,0)]"
            >
              Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {galleryImages.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`${product.title} — view ${index + 1}`}
                  width={400}
                  height={300}
                  className="rounded shadow w-full h-auto"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              ))}
            </div>
          </section>
        )}

        {/* ── Request a Quote ──────────────────────────────────────────────── */}
        {/* <section
          aria-labelledby="quote-heading"
          className="bg-blue-50 py-12 px-6"
        >
          <div className="max-w-4xl mx-auto">
            <h2
              id="quote-heading"
              className="text-2xl font-semibold mb-6 text-[rgb(225,6,0)]"
            >
              Request a Quote
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                aria-label="Your name"
                className="p-3 border rounded w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Your email address"
                className="p-3 border rounded w-full"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                aria-label="Your phone number"
                className="p-3 border rounded w-full"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                aria-label="Your company name"
                className="p-3 border rounded w-full"
              />
              <input type="hidden" name="product" value={product.title} />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                aria-label="Your message"
                className="p-3 border rounded md:col-span-2 w-full"
              />
              <button
                type="submit"
                className="bg-[rgb(78,100,141)] text-white py-3 px-6 rounded hover:bg-[rgb(225,6,0)] transition md:col-span-2 cursor-pointer"
              >
                Submit Request
              </button>
            </div>
          </div>
        </section> */}
<QuoteForm productTitle={product.title} />

      </div>
    </>
  );
}