"use client";

import * as React from "react";
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
import { TestimonialSlider } from "@/components/ui/testimonial-slider";
import { InstagramGrid } from "@/components/ui/instagram-grid";
import { ScrollReveal, TextMask } from "@/components/ui/scroll-reveal";
import { useLanguage } from '@/contexts/language-context';
import { getTranslations } from '@/lib/i18n/translations';
import { ParallaxSection } from "@/components/ui/parallax-section";

const SneakPeekGrid = lazy(() => import('@/components/ui/sneak-peek-grid'));
const JournalGrid = lazy(() => import('@/components/ui/journal-grid'));

export function HomeClient() {
  const { language } = useLanguage();
  const t = getTranslations(language).home;

  return (
    <main className="flex-grow pt-20">
      {/* Hero Section: Editorial & Minimalist */}
      <section className="min-h-[100vh] flex flex-col relative bg-[#FDFBF7] overflow-hidden">
        <ParallaxSection speed={0.4} className="absolute inset-0 flex items-center justify-center opacity-5">
          {/* Subtle logo watermark or abstract shapes */}
          <span className="font-serif text-[30vw] whitespace-nowrap text-[#3B1C32] leading-none select-none">
            TALIA
          </span>
        </ParallaxSection>

        <div className="flex-1 flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop relative z-10 text-center">
          <ScrollReveal delay={0.2} direction="up" distance={30}>
            <span className="font-label-md text-label-md text-[#D9A5B3] uppercase tracking-[0.3em] mb-6 block font-bold">
              Wetzlar
            </span>
          </ScrollReveal>
          
          <h1 className="font-display-lg text-6xl md:text-8xl lg:text-9xl text-[#3B1C32] mb-8 leading-[0.9] font-serif max-w-5xl mx-auto uppercase tracking-tighter">
            <TextMask delay={0.4}>{t.heroTitleMask1}</TextMask>
            <TextMask delay={0.6} className="italic mt-2 text-[#222222]/70">{t.heroTitleMask2}</TextMask>
          </h1>
          
          <ScrollReveal delay={0.8} direction="up">
            <p className="font-body-lg text-[#222222]/70 mb-12 max-w-xl mx-auto leading-relaxed text-xl">
              {t.heroDescription}
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={1.0} direction="up">
             <Link href="/shop" className="inline-block border border-[#D9A5B3] bg-[#D9A5B3] text-[#3B1C32] px-12 py-4 uppercase tracking-widest text-sm hover:bg-[#E5B5B5] transition-all duration-500">
               {t.heroButton}
             </Link>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="font-label-md text-[#222222]/70 uppercase tracking-[0.2em] text-xs">Scroll</span>
          <div className="w-[1px] h-12 bg-[#3B1C32]/30" />
        </motion.div>
      </section>

      {/* Cinematic Deep Dive: The Store */}
      <section id="location" className="relative bg-[#3B1C32] text-[#FDFBF7] py-32 md:py-48 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <ScrollReveal direction="left">
                <span className="font-label-md text-[#D9A5B3] uppercase tracking-widest mb-6 block">{t.storeSubtitle}</span>
                <h2 className="font-headline-lg text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8">
                  {t.storeTitle}
                </h2>
                <p className="font-body-lg text-[#FDFBF7]/70 text-lg leading-relaxed mb-8 font-light">
                  {t.storeDescription}
                </p>
                <div className="w-16 h-[1px] bg-[#FDFBF7]/20 mb-8" />
                <p className="font-body-md text-[#FDFBF7]/70 italic">
                  {t.storeQuote}
                </p>
              </ScrollReveal>
            </div>
            
            <div className="relative aspect-[3/4] w-full overflow-hidden grayscale contrast-125">
              <ParallaxSection speed={1.2} className="w-full h-full absolute inset-0">
                <div className="w-full h-full bg-[#3B1C32] flex items-center justify-center bg-gradient-to-tr from-[#1A1A1A] to-transparent">
                  <span className="material-symbols-outlined text-6xl text-[#FDFBF7]/10">storefront</span>
                </div>
              </ParallaxSection>
            </div>
          </div>
        </div>
      </section>


      {/* Editorial Reviews / Testimonials */}
      <section id="reviews" className="py-32 bg-[#FDFBF7]">
         <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <ScrollReveal direction="up">
              <div className="text-center mb-16">
                 <span className="font-label-md text-[#D9A5B3] uppercase tracking-[0.2em] mb-4 block text-xs">{t.testimonialsSubtitle}</span>
                 <h2 className="font-headline-lg text-4xl md:text-5xl text-[#3B1C32] font-serif italic">{t.testimonialsTitle}</h2>
              </div>
              <TestimonialSlider testimonials={MOCK_TESTIMONIALS} />
            </ScrollReveal>
         </div>
      </section>

      {/* Journal / Editorial Hub */}
      <section className="py-32 md:py-48 bg-[#FDFBF7] max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
               <span className="font-label-md text-[#D9A5B3] uppercase tracking-[0.2em] mb-4 block text-xs">Editorial</span>
               <h2 className="font-headline-lg text-5xl text-[#3B1C32] font-serif uppercase tracking-tighter">Das Journal</h2>
            </div>
            <Link href="/journal" className="font-label-md text-[#3B1C32] hover:text-[#D9A5B3] uppercase tracking-widest transition-colors flex items-center gap-2 border-b border-[#3B1C32] hover:border-[#D9A5B3] pb-1 text-xs">
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
      <section className="py-32 bg-[#3B1C32] text-[#FDFBF7]">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
           <ScrollReveal direction="up">
             <div className="text-center mb-16">
                <span className="font-label-md text-[#D9A5B3] uppercase tracking-[0.2em] mb-4 block text-xs">@boutique.talia</span>
                <h2 className="font-headline-lg text-4xl md:text-5xl font-serif italic">Aesthetic Details</h2>
             </div>
             <InstagramGrid posts={MOCK_INSTAGRAM} />
           </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
