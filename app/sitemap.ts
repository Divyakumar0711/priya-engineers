import { supabase } from "@/lib/supabaseClient";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: products } = await supabase
    .from("products")
    .select("slug, updated_at");

  const productUrls: MetadataRoute.Sitemap = (products ?? []).map((p) => ({
    url: `https://www.priyaengineers.com/products/${p.slug}`,
    lastModified: p.updated_at ? new Date(p.updated_at) : new Date(),
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