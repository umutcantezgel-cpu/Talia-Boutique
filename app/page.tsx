import * as React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  MOCK_SNEAK_PEEKS, 
  MOCK_JOURNAL, 
  MOCK_TESTIMONIALS, 
  MOCK_FAQS, 
  MOCK_INSTAGRAM 
} from "@/lib/mock-data";
import * as motion from "motion/react-client";
import { Suspense, lazy } from 'react';
import { ClientSkeletonWrapper } from "@/components/ui/client-skeleton-wrapper";
import { WaitlistCard } from "@/components/ui/waitlist-card";
import { Accordion } from "@/components/ui/accordion";
import { TestimonialSlider } from "@/components/ui/testimonial-slider";
import { InstagramGrid } from "@/components/ui/instagram-grid";
import { ScrollReveal, TextMask } from "@/components/ui/scroll-reveal";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { SEOMetadata } from "@/components/seo-metadata";
import { constructMetadata } from "@/lib/metadata";

const SneakPeekGrid = lazy(() => import('@/components/ui/sneak-peek-grid'));
const JournalGrid = lazy(() => import('@/components/ui/journal-grid'));

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
    <main className="flex-grow pt-20">
      <SEOMetadata jsonLd={landingPageJsonLd} />

      {/* Hero Section: Editorial & Minimalist */}
      <section className="min-h-[100vh] flex flex-col relative bg-bg-primary overflow-hidden">
        <ParallaxSection speed={0.4} className="absolute inset-0 flex items-center justify-center opacity-5">
          {/* Subtle logo watermark or abstract shapes */}
          <span className="font-serif text-[30vw] whitespace-nowrap text-[#1A1A1A] leading-none select-none">
            TALIA
          </span>
        </ParallaxSection>

        <div className="flex-1 flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop relative z-10 text-center">
          <ScrollReveal delay={0.2} direction="up" distance={30}>
            <span className="font-label-md text-label-md text-[#1A1A1A] uppercase tracking-[0.3em] mb-6 block font-bold">
              Wetzlar
            </span>
          </ScrollReveal>
          
          <h1 className="font-display-lg text-6xl md:text-8xl lg:text-9xl text-on-surface mb-8 leading-[0.9] font-serif max-w-5xl mx-auto uppercase tracking-tighter">
            <TextMask delay={0.4}>Elitäre</TextMask>
            <TextMask delay={0.6} className="italic mt-2 text-[#737373]">Präsenz.</TextMask>
          </h1>
          
          <ScrollReveal delay={0.8} direction="up">
            <p className="font-body-lg text-text-secondary mb-12 max-w-xl mx-auto leading-relaxed text-xl">
              Erlebe handverlesene Kollektionen und kompromisslose Qualität. Die exklusive Adresse für Premium-Fashion.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={1.0} direction="up">
             {/* Instead of waitlist, a sleek button to shop */}
             <Link href="/shop" className="inline-block border border-[#1A1A1A] text-[#1A1A1A] px-12 py-4 uppercase tracking-widest text-sm hover:bg-[#1A1A1A] hover:text-white transition-all duration-500">
               Kollektion Entdecken
             </Link>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="font-label-md text-text-secondary uppercase tracking-[0.2em] text-xs">Scroll</span>
          <div className="w-[1px] h-12 bg-[#1A1A1A]/30" />
        </motion.div>
      </section>

      {/* Cinematic Deep Dive: The Store */}
      <section id="location" className="relative bg-[#1A1A1A] text-[#FDFCFB] py-32 md:py-48 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <ScrollReveal direction="left">
                <span className="font-label-md text-[#737373] uppercase tracking-widest mb-6 block">Die Boutique</span>
                <h2 className="font-headline-lg text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8">
                  Lokale<br/>Identität in<br/><span className="italic text-[#CCCCCC]">Vollendung</span>.
                </h2>
                <p className="font-body-lg text-[#CCCCCC] text-lg leading-relaxed mb-8 font-light">
                  Bahnhofstraße 1, 35576 Wetzlar. Ein Ort der Ästhetik und des erlesenen Geschmacks. Wir beraten dich persönlich und exklusiv.
                </p>
                <div className="w-16 h-[1px] bg-[#FDFCFB]/20 mb-8" />
                <p className="font-body-md text-[#737373] italic">
                  "Mode ist keine Kleidung. Mode ist Charakter."
                </p>
              </ScrollReveal>
            </div>
            
            <div className="relative aspect-[3/4] w-full overflow-hidden grayscale contrast-125">
              <ParallaxSection speed={1.2} className="w-full h-full absolute inset-0">
                <div className="w-full h-full bg-[#333333] flex items-center justify-center bg-gradient-to-tr from-[#1A1A1A] to-transparent">
                  {/* Placeholder for real boutique image */}
                  <span className="material-symbols-outlined text-6xl text-[#FDFCFB]/10">storefront</span>
                </div>
              </ParallaxSection>
            </div>
          </div>
        </div>
      </section>

      {/* The "Sneak Peek" Interactive Grid / Collections */}
      <section className="py-32 md:py-48 bg-bg-primary relative">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col items-center text-center mb-24">
            <ScrollReveal direction="up">
              <span className="font-label-md text-[#1A1A1A] uppercase tracking-[0.2em] mb-4 block text-xs">Exklusiv</span>
              <h2 className="font-headline-lg text-5xl md:text-7xl text-on-surface font-serif uppercase tracking-tighter">Season Drops</h2>
            </ScrollReveal>
          </div>

          <Suspense fallback={<ClientSkeletonWrapper count={3} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12" />}>
            <ScrollReveal direction="up" delay={0.2}>
              <SneakPeekGrid />
            </ScrollReveal>
          </Suspense>
          
          <div className="mt-20 text-center">
            <Link href="/shop" className="inline-block border-b border-[#1A1A1A] text-[#1A1A1A] pb-1 uppercase tracking-[0.2em] text-xs hover:text-[#737373] hover:border-[#737373] transition-all">
               Alle Kollektionen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Reviews / Testimonials */}
      <section id="reviews" className="py-32 bg-[#F2EFEA]">
         <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                 <span className="font-label-md text-[#1A1A1A] uppercase tracking-[0.2em] mb-4 block text-xs">Google Maps (4,3 Sterne)</span>
                 <h2 className="font-headline-lg text-4xl md:text-5xl text-on-surface font-serif italic">Was unsere Kundschaft sagt</h2>
              </div>
              <TestimonialSlider testimonials={MOCK_TESTIMONIALS} />
            </ScrollReveal>
         </div>
      </section>

      {/* Journal / Editorial Hub */}
      <section className="py-32 md:py-48 bg-bg-primary max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
               <span className="font-label-md text-[#1A1A1A] uppercase tracking-[0.2em] mb-4 block text-xs">Editorial</span>
               <h2 className="font-headline-lg text-5xl text-on-surface font-serif uppercase tracking-tighter">Das Journal</h2>
            </div>
            <Link href="/journal" className="font-label-md text-[#1A1A1A] hover:text-[#737373] uppercase tracking-widest transition-colors flex items-center gap-2 border-b border-[#1A1A1A] hover:border-[#737373] pb-1 text-xs">
              Alle Artikel 
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </ScrollReveal>

         <Suspense fallback={<ClientSkeletonWrapper count={2} className="grid grid-cols-1 md:grid-cols-2 gap-12" />}>
           <ScrollReveal direction="up" delay={0.2}>
             <JournalGrid />
           </ScrollReveal>
         </Suspense>
      </section>

      {/* Instagram Grid */}
      <section className="py-32 bg-[#1A1A1A] text-[#FDFCFB]">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
           <ScrollReveal direction="up">
             <div className="text-center mb-16">
                <span className="font-label-md text-[#CCCCCC] uppercase tracking-[0.2em] mb-4 block text-xs">@boutique.talia</span>
                <h2 className="font-headline-lg text-4xl md:text-5xl font-serif italic">Aesthetic Details</h2>
             </div>
             <InstagramGrid posts={MOCK_INSTAGRAM} />
           </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
