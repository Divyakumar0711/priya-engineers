import React from "react";
import Head from "next/head";
import Home from "./home/page";

const Page: React.FC = () => {
  return (
    <>
      <Head>
        <title>Leading Manufacturer of Transmission Shafts | Priya Engineers</title>
        <meta
          name="description"
          content="Top manufacturer of transmission shafts, screw shafts, and precision machinery parts. Durable, high-quality engineering solutions for industrial applications."
        />
        <meta
          name="keywords"
          content="transmission shafts, screw shafts, machinery parts, precision engineering, industrial shafts"
        />
        <meta property="og:title" content="Leading Manufacturer of Transmission Shafts | Priya Engineers" />
        <meta
          property="og:description"
          content="Top manufacturer of transmission shafts, screw shafts, and precision machinery parts. Durable, high-quality engineering solutions for industrial applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.priyaengineers.com" />
        <meta property="og:site_name" content="Priya Engineers" />
      </Head>
      <Home />
    </>
  );
};

export default Page;