import * as React from "react";
import { Metadata } from "next";
import { SEOMetadata } from "@/components/seo-metadata";
import { constructMetadata } from "@/lib/metadata";
import { HomeClient } from "./home-client";

export const metadata: Metadata = constructMetadata({
  title: "Talia Boutique | High-End Fashion & Abendkleider in Wetzlar",
  description: "Entdecke exklusive Premium-Kollektionen, Abendkleider und Hochzeitsmode in der Talia Boutique Wetzlar. Kompromisslose Qualität und elitäre Beratung.",
  keywords: ["Talia Boutique", "Wetzlar", "High-End Fashion", "Premium Kleidung", "Exklusive Mode", "Boutique Hessen", "Abendkleider Wetzlar", "Hochzeitsmode Wetzlar", "Brautmode Hessen"],
});

export default function Home() {
  const landingPageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://taliaboutique.de/#webpage",
        "url": "https://taliaboutique.de",
        "name": "Talia Boutique | High-End Fashion & Abendkleider Wetzlar",
        "description": "Entdecke exklusive Premium-Kollektionen, Abendkleider und Hochzeitsmode in der Talia Boutique Wetzlar.",
        "publisher": {
          "@id": "https://taliaboutique.de/#organization"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://taliaboutique.de/#organization",
        "name": "Talia Boutique",
        "image": "https://taliaboutique.de/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bahnhofstraße 1",
          "addressLocality": "Wetzlar",
          "postalCode": "35576",
          "addressCountry": "DE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 50.5562,
          "longitude": 8.5034
        },
        "url": "https://taliaboutique.de",
        "telephone": "+490000000000",
        "priceRange": "$$$"
      }
    ]
  };

  return (
    <>
      <SEOMetadata jsonLd={landingPageJsonLd} />
      <HomeClient />
    </>
  );
}
