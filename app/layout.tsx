
import type { Metadata } from "next";
import "./globals.css"; // keep whatever you already import here
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Raleway } from "next/font/google";
import LoadingSpinner from "@/components/LoadingSpinner";


const ralewayFont = Raleway({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-raleway",
});
// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // ── Basic ──
  title: {
    default: "Shaft Manufacturer in Ahmedabad | Priya Engineers",
    template: "%s | Priya Engineers",
  },
  description:
    "Priya Engineers – Ahmedabad-based CNC manufacturer of transmission shafts, screw shafts, gear shafts, spline shafts & precision machinery parts. 25+ years experience, ±0.01mm tolerance, direct manufacturer pricing. Call +91 98257 90413.",

  keywords: [
    "shaft manufacture in Ahmedabad",
    "transmission shaft manufacturer Ahmedabad",
    "screw shaft supplier Gujarat",
    "gear shaft manufacturer India",
    "spline shaft CNC machining",
    "hollow shaft supplier Ahmedabad",
    "worm shaft manufacturer",
    "precision machinery parts Ahmedabad",
    "CNC shaft manufacturer Gujarat",
    "Priya Engineers Ahmedabad",
    "shaft manufacturer Amraiwadi",
  ],

  // ── Canonical URL ──
  alternates: {
    canonical: "https://www.priyaengineers.com",
  },

  // ── Indexing ──
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // ── Open Graph (WhatsApp, LinkedIn, Facebook previews) ──
  openGraph: {
    title: "Shaft Manufacturer in Ahmedabad | Priya Engineers",
    description:
      "CNC-precision transmission shafts, screw shafts & machinery parts. 500+ projects, 100+ industry clients, 25+ years. Based in Amraiwadi, Ahmedabad, Gujarat.",
    url: "https://www.priyaengineers.com",
    siteName: "Priya Engineers",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.priyaengineers.com/assets/icons/priya_logo.jpeg",
        width: 800,
        height: 600,
        alt: "Priya Engineers – Shaft Manufacturer, Ahmedabad",
      },
    ],
  },

  // ── Twitter / X card ──
  twitter: {
    card: "summary",
    title: "Priya Engineers – Shaft Manufacturer, Ahmedabad",
    description:
      "Manufacturer of transmission shafts, screw shafts & CNC precision machinery parts. Amraiwadi, Ahmedabad. +91 98257 90413.",
    images: ["https://www.priyaengineers.com/assets/icons/priya_logo.jpeg"],
  },

  // ── Verification (add later when you set up Google Search Console) ──
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  // },
};

// ─── Local Business Schema (JSON-LD) ──────────────────────────────────────────
// This tells Google exactly what kind of business you are — shows in rich results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ManufacturingBusiness",
  name: "Priya Engineers",
  description:
    "Manufacturer and supplier of transmission shafts, screw shafts, gear shafts and precision machinery parts in Ahmedabad, Gujarat, India.",
  url: "https://www.priyaengineers.com",
  telephone: "+919825790413",
  email: "priyaengineersahd@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "19, Swaminarayan Complex, Near Mangaldeep Party Plot, Vastral Char Rasta, N.H. No.-8, Amraiwadi",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382415",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.0009,
    longitude: 72.6369,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://facebook.com/priyaengineers",
    "https://instagram.com/priyaengineers",
    "https://linkedin.com/company/priyaengineers",
  ],
};

// ─── Layout ───────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ralewayFont.className}>
      <head>
        {/* JSON-LD Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
             <LoadingSpinner />

        {children}
        <Footer />
      </body>
    </html>
  );
}
