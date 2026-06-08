"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useToast } from "@/contexts/toast-context";
import { SuccessGlow } from "@/components/ui/success-glow";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

import { useLanguage } from "@/contexts/language-context";
import { getTranslations } from "@/lib/i18n/translations";

type NewsletterData = {
  email: string;
};

export function Footer() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful, isSubmitting }, reset } = useForm<NewsletterData>();
  const { addToast } = useToast();
  const { language } = useLanguage();
  const t = getTranslations(language);
  const tf = t.footer;
  const tn = t.nav;

  const onSubmit = async (data: NewsletterData) => {
    // Simulated API call
    await new Promise(resolve => setTimeout(resolve, 800));
    console.log("Waitlist subscribed:", data.email);
    addToast("Erfolgreich zur Warteliste hinzugefügt!", "success");
    reset();
  };

  return (
    <footer className="w-full py-section-padding px-margin-mobile md:px-margin-desktop bg-[#3B1C32] text-[#FDFBF7] border-t border-[#3B1C32]/80 mt-auto">
      <div className="max-w-container-max mx-auto">
        {/* Newsletter & Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-12 border-b border-[#FDFBF7]/20">
          <div>
            <h3 className="font-headline-md text-headline-md mb-4 font-serif">
              {tf.newsletterTitle}
            </h3>
            <p className="font-body-md text-body-md text-[#FDFBF7]/70 mb-6 max-w-md">
              {tf.newsletterDesc}
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 max-w-md relative">
              <div className="relative">
                <input
                  type="email"
                  placeholder={tf.emailPlaceholder}
                  disabled={isSubmitting || isSubmitSuccessful}
                  className={`w-full bg-[#FDFBF7]/5 border ${errors.email ? 'border-error ring-1 ring-error' : 'border-[#FDFBF7]/20 focus:border-[#FDFBF7] focus:ring-1 focus:ring-[#FDFBF7]'} rounded-full px-6 py-3 font-body-md text-body-md focus:outline-none transition-colors placeholder:text-[#FDFBF7]/40 text-[#FDFBF7] disabled:opacity-50`}
                  {...register("email", { 
                    required: "E-Mail ist erforderlich",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Ungültige E-Mail Adresse"
                    }
                  })}
                />
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitSuccessful}
                  className="absolute right-1 top-1 bottom-1 bg-[#D9A5B3] text-[#3B1C32] px-6 rounded-full font-label-md text-label-md hover:bg-[#E5B5B5] transition-colors uppercase tracking-widest disabled:opacity-100 flex items-center justify-center min-w-[140px] overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.span
                        key="submitting"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="w-5 h-5 border-2 border-t-transparent border-[#3B1C32] rounded-full animate-spin"
                      />
                    ) : isSubmitSuccessful ? (
                      <motion.span
                        key="success"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex items-center gap-2 relative"
                      >
                        <span className="material-symbols-outlined text-[18px] text-[#3B1C32]">check</span>
                        DABEI
                        <SuccessGlow />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="normal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {tf.subscribe}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
              {errors.email && (
                <span className="text-[#D9A5B3] text-xs ml-4 mt-1 font-medium" role="alert">{errors.email.message}</span>
              )}
              {isSubmitSuccessful && (
                <div className="text-[12px] font-medium text-[#D9A5B3] mt-2 ml-4 flex items-center gap-1.5 opacity-0 animate-[fade-in_0.5s_ease-out_forwards]">
                  <span className="material-symbols-outlined text-[14px]">volunteer_activism</span>
                  <span>{tf.welcome}</span>
                </div>
              )}
            </form>
          </div>
          <div className="flex flex-col md:items-end justify-center">
            <span className="font-label-md text-label-md text-[#FDFBF7]/70 uppercase tracking-widest mb-4">
              {tf.followUs}
            </span>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#FDFBF7]/5 flex items-center justify-center text-[#FDFBF7] hover:bg-[#FDFBF7]/20 transition-all duration-300 border border-[#FDFBF7]/20"
              >
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-[#FDFBF7]/5 flex items-center justify-center text-[#FDFBF7] hover:bg-[#FDFBF7]/20 transition-all duration-300 border border-[#FDFBF7]/20"
              >
                <span className="material-symbols-outlined">play_arrow</span>
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="w-10 h-10 rounded-full bg-[#FDFBF7]/5 flex items-center justify-center text-[#FDFBF7] hover:bg-[#FDFBF7]/20 transition-all duration-300 border border-[#FDFBF7]/20"
              >
                <span className="material-symbols-outlined">push_pin</span>
              </a>
            </div>
          </div>
        </div>

        {/* Links & Copyright */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <div className="col-span-2 lg:col-span-1 flex flex-col items-start h-full justify-between gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 group w-fit"
            >
              <img 
                src="/logo-talia.svg" 
                alt="Talia Boutique Logo" 
                className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105 object-contain invert mix-blend-screen" 
              />
            </Link>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="font-label-sm text-[#FDFBF7]/50 uppercase tracking-widest mb-2">{tf.discover}</h4>
            <Link href="/lookbook" className="font-body-md text-body-md text-[#FDFBF7]/70 hover:text-[#D9A5B3] transition-colors">{tn.lookbook}</Link>
            <Link href="/journal" className="font-body-md text-body-md text-[#FDFBF7]/70 hover:text-[#D9A5B3] transition-colors">{tn.journal}</Link>
            <Link href="/reviews" className="font-body-md text-body-md text-[#FDFBF7]/70 hover:text-[#D9A5B3] transition-colors">{tn.reviews}</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-label-sm text-[#FDFBF7]/50 uppercase tracking-widest mb-2">{tf.legalHeader}</h4>
            <Link href="/impressum" className="font-body-md text-body-md text-[#FDFBF7]/70 hover:text-[#D9A5B3] transition-colors">{tf.legal.imprint}</Link>
            <Link href="/datenschutz" className="font-body-md text-body-md text-[#FDFBF7]/70 hover:text-[#D9A5B3] transition-colors">{tf.legal.privacy}</Link>
            <Link href="/agb" className="font-body-md text-body-md text-[#FDFBF7]/70 hover:text-[#D9A5B3] transition-colors">{tf.legal.terms}</Link>
            <Link href="/widerruf" className="font-body-md text-body-md text-[#FDFBF7]/70 hover:text-[#D9A5B3] transition-colors">{tf.legal.revocation}</Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#FDFBF7]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label-sm text-label-sm text-[#FDFBF7]/50 uppercase tracking-widest text-center md:text-left">
            Talia Boutique • Bahnhofstraße 1, 35576 Wetzlar • Tel: 06441 9637730
          </p>
          <p className="font-label-sm text-label-sm text-[#FDFBF7]/50 uppercase tracking-widest text-center md:text-right">
            © 2026 Talia Boutique. {tf.rights} {tf.openingHours}
          </p>
        </div>
      </div>
    </footer>
  );
}
