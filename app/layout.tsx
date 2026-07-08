import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

// Playfair Display for headings (600 semibold, 700 bold).
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

// Inter for body (400 regular, 600 semibold). Also the default sans.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

// Placeholder production domain. TODO CONFIRM DOMAIN before launch.
const SITE_URL = "https://paradisepoolsfl.com";

// Shared marketing description, reused in meta, Open Graph, and JSON-LD.
const SITE_DESCRIPTION =
  "Weekly pool maintenance, pressure washing, and trash bin cleaning for South Florida homeowners. Family-run, reliable, and easy to book. Get your free quote today.";

const SITE_TITLE =
  "Pool Cleaning & Pressure Washing in South Florida | Paradise Pools & Pressure Cleaning";

export const metadata: Metadata = {
  // TODO CONFIRM DOMAIN: metadataBase drives canonical and Open Graph URLs.
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Paradise Pools & Pressure Cleaning",
  },
};

// LocalBusiness structured data. No aggregateRating or review markup:
// no real reviews exist yet, so none is fabricated here.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Paradise Pools & Pressure Cleaning",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  // TODO EXACT CITIES: replace with the verified city list once confirmed.
  areaServed: "South Florida",
  // PLACEHOLDER PHONE: replace with the verified business line before launch.
  telephone: "+15550000000",
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Pool Maintenance",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Pressure Washing",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Trash Bin Cleaning",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Paradise Plan Membership",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-ivory text-ink font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Nav />
        {children}
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
