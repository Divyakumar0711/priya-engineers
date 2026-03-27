import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  siteName?: string;
  ogImage?: string;
  keywords?: string;
  jsonLd?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  siteName = "Priya Engineers",
  ogImage = "/images/default-og.jpg",
  keywords = "",
  jsonLd = null,
}) => {
  const structuredData = jsonLd || {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: url,
    logo: "https://www.priyaengineers.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/priya-engineers",
      "https://www.facebook.com/priya-engineers",
    ],
  };

  return (
    <Head>
      {/* Primary Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteName} />
      <link rel="canonical" href={url} />

      {/* Viewport for mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content={`${siteName} – Industrial Precision Manufacturing`}
      />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta
        name="twitter:image:alt"
        content={`${siteName} – Industrial Precision Manufacturing`}
      />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default SEO;