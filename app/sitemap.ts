import { supabase } from "@/lib/supabaseClient";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: products, error } = await supabase
    .from("products")
    .select("slug");

  console.log("Sitemap products:", products, "Error:", error); // debug log

  const productUrls: MetadataRoute.Sitemap = (products ?? []).map((p) => ({
    url: `https://www.priyaengineers.com/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://www.priyaengineers.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.priyaengineers.com/products",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...productUrls,
  ];
}