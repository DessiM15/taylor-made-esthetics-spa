import type { Metadata } from "next";
import { Great_Vibes, Playfair_Display, Quicksand } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const siteUrl = "https://parties.taylormadeesthetics.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kids Spa Parties & Teepee Sleepovers in Pearland, TX | Taylor Made Esthetics",
  description:
    "Mobile spa parties for girls in Pearland, TX & the Houston area! Facials, nails, teepee sleepovers & goodie bags — we bring the spa to you and handle everything. Book your party today!",
  keywords: [
    "kids spa party Pearland TX",
    "girls spa party Houston",
    "teepee sleepover party Pearland",
    "mobile spa party for kids",
    "spa birthday party for girls",
    "sleepover party rental Houston",
    "kids pamper party Texas",
    "Taylor Made Esthetics",
  ],
  openGraph: {
    title: "Spa Parties by Taylor Made Esthetics — We Bring the Spa to You!",
    description:
      "The ultimate spa party experience for girls in Pearland & the Houston area. Facials, nails, teepee sleepovers & more — setup, spa fun, memories. We handle it all!",
    url: siteUrl,
    siteName: "Taylor Made Esthetics Spa Parties",
    images: [{ url: "/images/teepee-right.png", width: 410, height: 320, alt: "Pink teepee sleepover spa party setup" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids Spa Parties & Teepee Sleepovers | Taylor Made Esthetics",
    description:
      "We bring the spa to you! Facials, nails & teepee sleepover parties for girls in Pearland, TX & the Houston area.",
    images: ["/images/teepee-right.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Taylor Made Esthetics — Spa Parties",
  description:
    "Mobile kids spa parties and teepee sleepover parties serving Pearland, TX and surrounding Houston areas. Facials, nail services, themed decor, and goodie bags — we handle everything.",
  url: siteUrl,
  telephone: "+1-346-219-3881",
  image: `${siteUrl}/images/teepee-right.png`,
  logo: `${siteUrl}/images/logo.png`,
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Pearland" },
    { "@type": "City", name: "Houston" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pearland",
    addressRegion: "TX",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.instagram.com/_taylormadeesthetics_",
    "https://taylormadeesthetics.net",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${playfair.variable} ${quicksand.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
