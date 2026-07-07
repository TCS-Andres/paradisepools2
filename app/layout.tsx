import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

// Montserrat for headings (700 bold, 800 extrabold).
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

// Inter for body (400 regular, 600 semibold). Also the default sans.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

// Minimal defaults only. A downstream worker owns full SEO metadata.
export const metadata: Metadata = {
  title: "Paradise Pools & Pressure Cleaning",
  description:
    "Weekly pool maintenance, pressure washing, and bin cleaning for South Florida homes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="bg-sand text-charcoal font-body antialiased">
        <Nav />
        {children}
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
