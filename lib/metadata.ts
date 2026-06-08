import { Metadata } from 'next';

interface MetadataProps {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
}

export function constructMetadata({
  title,
  description,
  image = "https://talia-boutique.de/og-image.webp",
  noIndex = false,
  keywords = ["Talia Boutique", "Abendkleider Wetzlar", "Hochzeitsmode Wetzlar", "Exklusive Mode", "Fashion Wetzlar"],
}: MetadataProps): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: "https://talia-boutique.de",
      siteName: "Talia Boutique",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@taliaboutique",
    },
    robots: noIndex 
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
