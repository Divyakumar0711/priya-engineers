import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ protocol: "https", hostname: "*.supabase.co" }],

    domains: [
      "emzgcybufgvtwoogwczj.supabase.co",
      "images.unsplash.com",
      "media.istockphoto.com",
      "img.freepik.com",
      "ptsmake.com",
      "m.media-amazon.com",
      "waykenrm.com",
    ],
  },
};

export default nextConfig;
