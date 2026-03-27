import Header from "@/components/Header";
import "./globals.css";
import { Raleway } from "next/font/google";
import Footer from "@/components/Footer";
import LoadingSpinner from "@/components/LoadingSpinner";

const ralewayFont = Raleway({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ralewayFont.className}>
      <body>
        <Header />
        <LoadingSpinner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
export const metadata = {
  title: "Priya Engineers",
  description: "Industrial Shaft Manufacturer",
  icons: {
    icon: "/icon.png",
  },
};
