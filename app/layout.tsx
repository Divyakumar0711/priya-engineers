import Header from "@/components/Header";
import "./globals.css";
import { Raleway } from "next/font/google";

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
        {children}
      </body>
    </html>
  );
}
