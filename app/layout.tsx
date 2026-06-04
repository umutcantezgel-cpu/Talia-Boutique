import type {Metadata} from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ToastProvider } from '@/contexts/toast-context';
import { ToastContainer } from '@/components/ui/toast-container';
import { GlobalLoader } from '@/components/ui/global-loader';
import { CursorGlow } from '@/components/ui/cursor-glow';
import { WishlistProvider } from '@/contexts/wishlist-context';
import { constructMetadata } from '@/lib/metadata';
import { LanguageProvider } from '@/contexts/language-context';
import { CookieBanner } from '@/components/ui/cookie-banner';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = constructMetadata({
  title: 'Talia Boutique | Exklusive Mode in Wetzlar',
  description: 'Trag dich in die VIP-Warteliste ein und erhalte exklusiven Zugang zu unserem ersten Drop von Talia Boutique in Wetzlar.',
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Talia Boutique",
      "url": "https://ay-nur.de",
      "logo": "https://ay-nur.de/logo.svg",
      "description": "Licht für deine Seele. Premium Islamic Lifestyle und Hochzeitsmode aus Wetzlar."
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Talia Boutique Wetzlar",
      "image": "https://ay-nur.de/og-image.webp",
      "description": "Exklusive Abendkleider und Hochzeitsmode im Herzen von Wetzlar. Entdecke Premium-Qualität.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Musterstraße 1",
        "addressLocality": "Wetzlar",
        "postalCode": "35578",
        "addressCountry": "DE"
      },
      "telephone": "+49 6441 1234567"
    }
  ];

  return (
    <html lang="de" className={`${montserrat.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased font-sans text-[#222222] bg-[#FDFBF7] overflow-x-hidden min-h-screen flex flex-col" suppressHydrationWarning>
        <CursorGlow />
        <GlobalLoader />
        <LanguageProvider>
          <ToastProvider>
            <WishlistProvider>
              <Header />
              {children}
              <Footer />
              <ToastContainer />
              <CookieBanner />
            </WishlistProvider>
          </ToastProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
