"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue, useTransform, PanInfo } from "framer-motion";
import Link from "next/link";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  
  // Master Slide-to-Accept state
  const x = useMotionValue(0);
  const backgroundWidth = useTransform(x, [0, 250], ["0%", "100%"]);
  const controls = useAnimation();
  const constraintsRef = useRef(null);

  useEffect(() => {
    // Check if consent is already given
    const consent = localStorage.getItem("talia-cookie-consent");
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSave = (all: boolean = false) => {
    const preferences = {
      essential: true,
      analytics: all ? true : analytics,
      marketing: all ? true : marketing,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("talia-cookie-consent", JSON.stringify(preferences));
    setIsVisible(false);
  };

  const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 200) {
      // Swipe threshold reached
      controls.start({ x: 250 });
      handleSave(true); // Accept all
    } else {
      controls.start({ x: 0 });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 100, scale: 0.95 }}
      transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
      className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[999] w-[calc(100%-48px)] md:w-[400px] bg-surface/90 backdrop-blur-2xl border border-outline-variant shadow-2xl rounded-[32px] overflow-hidden p-8 font-sans"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
          <span className="material-symbols-outlined text-primary text-2xl">cookie</span>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-on-surface">Privatsphäre</h3>
          <p className="font-label-md uppercase tracking-widest text-primary text-[10px]">Talia Boutique</p>
        </div>
      </div>

      <p className="text-text-secondary text-sm mb-8 leading-relaxed">
        Wir nutzen Cookies, um dir das beste Erlebnis auf unserer Seite zu bieten. Entscheide selbst, was du teilen möchtest.
      </p>

      {/* Switches */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center justify-between p-4 bg-surface-variant rounded-2xl border border-white/5">
          <div>
            <p className="font-medium text-on-surface text-sm">Essenzielle Cookies</p>
            <p className="text-xs text-text-secondary mt-1">Immer aktiv (notwendig)</p>
          </div>
          <div className="w-12 h-6 bg-primary/50 rounded-full p-1 relative flex items-center cursor-not-allowed opacity-50">
            <div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
            <span className="material-symbols-outlined text-[10px] absolute right-1.5 text-primary">lock</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-surface-variant rounded-2xl border border-white/5">
          <div>
            <p className="font-medium text-on-surface text-sm">Analytics</p>
            <p className="text-xs text-text-secondary mt-1">Helfen uns, die Seite zu verbessern</p>
          </div>
          <button 
            onClick={() => setAnalytics(!analytics)}
            className={`w-12 h-6 rounded-full p-1 relative flex items-center transition-colors duration-300 ${analytics ? 'bg-primary' : 'bg-outline-variant'}`}
          >
            <motion.div 
              className="w-4 h-4 bg-white rounded-full shadow-md"
              animate={{ x: analytics ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-surface-variant rounded-2xl border border-white/5">
          <div>
            <p className="font-medium text-on-surface text-sm">Marketing</p>
            <p className="text-xs text-text-secondary mt-1">Für personalisierte Angebote</p>
          </div>
          <button 
            onClick={() => setMarketing(!marketing)}
            className={`w-12 h-6 rounded-full p-1 relative flex items-center transition-colors duration-300 ${marketing ? 'bg-primary' : 'bg-outline-variant'}`}
          >
            <motion.div 
              className="w-4 h-4 bg-white rounded-full shadow-md"
              animate={{ x: marketing ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Slide to Accept All - Gamified */}
        <div 
          ref={constraintsRef}
          className="w-full h-14 bg-surface-variant rounded-full border border-outline-variant relative overflow-hidden flex items-center shadow-inner"
        >
          <motion.div 
            className="absolute top-0 left-0 h-full bg-primary/20 backdrop-blur-md"
            style={{ width: backgroundWidth }}
          />
          <div className="w-full text-center absolute pointer-events-none z-10 flex items-center justify-center gap-2">
            <span className="font-label-md uppercase tracking-[0.2em] text-xs text-on-surface/50">Alle Akzeptieren</span>
            <span className="material-symbols-outlined text-[14px] text-on-surface/30">arrow_forward</span>
            <span className="material-symbols-outlined text-[14px] text-on-surface/20 -ml-1">arrow_forward</span>
          </div>

          <motion.div
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            dragMomentum={false}
            onDragEnd={onDragEnd}
            animate={controls}
            style={{ x }}
            className="w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing z-20 ml-1 relative"
          >
             <span className="material-symbols-outlined text-white text-[20px]">swipe_right</span>
          </motion.div>
        </div>

        {/* Save Selected */}
        <button 
          onClick={() => handleSave(false)}
          className="w-full text-center py-2 font-label-md uppercase tracking-widest text-[10px] text-text-secondary hover:text-on-surface transition-colors"
        >
          Auswahl speichern
        </button>

        <div className="flex justify-center gap-4 text-[10px] text-text-secondary/50 font-label-md uppercase tracking-widest mt-2">
          <Link href="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
        </div>
      </div>
    </motion.div>
  );
}
