import * as React from "react";
import { Metadata } from "next";
import { SEOMetadata } from "@/components/seo-metadata";
import { constructMetadata } from "@/lib/metadata";
import { HomeClient } from "./home-client";

export const metadata: Metadata = constructMetadata({
  title: "Talia Boutique | High-End Fashion in Wetzlar",
  description: "Entdecke exklusive Premium-Kollektionen und kuratierte Fashion-Pieces in der Talia Boutique Wetzlar. Kompromisslose Qualität und elitäre Beratung.",
  keywords: ["Talia Boutique", "Wetzlar", "High-End Fashion", "Premium Kleidung", "Exklusive Mode", "Boutique Hessen"],
});

export default function Home() {
  const landingPageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://taliaboutique.de/#webpage",
        "url": "https://taliaboutique.de",
        "name": "Talia Boutique | High-End Fashion Wetzlar",
        "description": "Entdecke exklusive Premium-Kollektionen in der Talia Boutique Wetzlar.",
        "publisher": {
          "@id": "https://taliaboutique.de/#organization"
        }
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
