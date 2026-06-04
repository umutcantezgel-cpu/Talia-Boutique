"use client";

import React, { useRef, useState } from 'react';
import * as motion from 'motion/react-client';
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import { getTranslations } from '@/lib/i18n/translations';

const DRAG_ITEMS = [
  { id: 1, title: "Ramadan Nights", top: "10%", left: "20%", width: "270px", height: "480px", zIndex: 10, product: "Midnight Satin", src: "/videos/video1.mp4" },
  { id: 2, title: "Ihsan", top: "30%", left: "50%", width: "315px", height: "560px", zIndex: 12, product: "Creme Tasbih", src: "/videos/video2.mp4" },
  { id: 3, title: "The Atelier", top: "60%", left: "15%", width: "270px", height: "480px", zIndex: 8, product: "Premium Kartonage", src: "/videos/video3.mp4" },
  { id: 4, title: "Sabr", top: "15%", left: "75%", width: "225px", height: "400px", zIndex: 15, product: "Samt Hülle", src: "/videos/video4.mp4" },
  { id: 5, title: "Heritage", top: "50%", left: "80%", width: "315px", height: "560px", zIndex: 5, product: "Gebetsteppich", src: "/videos/video5.mp4" },
  { id: 6, title: "Light", top: "80%", left: "55%", width: "270px", height: "480px", zIndex: 20, product: "Signature Box", src: "/videos/video6.mp4" },
];

export default function LookbookPage() {
  const { language } = useLanguage();
  const t = getTranslations(language).lookbook;
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <main className="flex-grow bg-[#FDFBF7] overflow-hidden flex flex-col h-screen">
      
      {/* Header Overlay (fixed) */}
      <div className="absolute top-0 left-0 w-full p-8 pt-[140px] z-50 pointer-events-none flex flex-col md:flex-row justify-between items-start md:items-center px-margin-mobile md:px-margin-desktop">
        <div>
          <h1 className="font-display-lg text-5xl md:text-7xl text-[#3B1C32] font-serif leading-none drop-shadow-lg">
            {t.title}
          </h1>
          <p className="font-body-md text-[#222222]/70 max-w-sm mt-4 backdrop-blur-sm bg-[#FDFBF7]/30 p-2 rounded-lg">
            {t.subtitle}
          </p>
        </div>
        
        <div className="hidden md:flex items-center gap-4 animate-pulse">
           <span className="material-symbols-outlined text-[#D9A5B3] text-3xl">swipe</span>
           <span className="font-label-md uppercase tracking-widest text-[#D9A5B3] text-xs">{t.dragToExplore}</span>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 md:p-8 backdrop-blur-xl transition-all">
           <button 
             onClick={() => setSelectedVideo(null)} 
             className="absolute top-8 right-8 md:top-12 md:right-12 text-white/80 hover:text-white transition-colors flex items-center gap-2 font-label-md uppercase tracking-widest text-xs z-50 bg-black/40 px-4 py-2 rounded-full border border-white/10 hover:bg-black/60"
           >
              Schließen <span className="material-symbols-outlined text-[18px]">close</span>
           </button>
           <video 
             src={selectedVideo} 
             autoPlay 
             controls 
             playsInline 
             className="max-w-full max-h-[85vh] rounded-[24px] shadow-2xl border border-white/10"
           />
        </div>
      )}

      {/* Drag Canvas */}
      <div className="relative flex-grow w-full h-full overflow-hidden cursor-grab active:cursor-grabbing bg-[#FDFBF7]">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3B1C32 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <motion.div 
          ref={containerRef}
          drag
          dragConstraints={{ top: -1000, left: -1500, right: 1000, bottom: 1000 }}
          dragElastic={0.2}
          className="absolute top-1/2 left-1/2 w-[3000px] h-[2000px] -translate-x-1/2 -translate-y-1/2"
        >
          {DRAG_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              className="absolute group"
              style={{
                top: item.top,
                left: item.left,
                width: item.width,
                height: item.height,
                zIndex: item.zIndex,
              }}
              whileHover={{ scale: 1.02, zIndex: 50 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
            >
              <div 
                className="w-full h-full rounded-[32px] overflow-hidden shadow-2xl relative bg-black cursor-pointer"
                onClick={() => setSelectedVideo(item.src)}
              >
                <video 
                    src={item.src} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity" 
                />
                
                {/* Hotspot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-[#FDFBF7]/80 backdrop-blur-md flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform group/hotspot pointer-events-none"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-3 h-3 rounded-full bg-[#D9A5B3] animate-pulse"></div>
                    
                    {/* Tooltip */}
                    <div className="absolute opacity-0 group-hover/hotspot:opacity-100 pointer-events-none transition-opacity top-full mt-4 left-1/2 -translate-x-1/2 bg-[#FDFBF7] text-[#222222] whitespace-nowrap px-6 py-3 rounded-xl shadow-2xl border border-[#222222]/10 flex flex-col items-center gap-2">
                      <span className="font-serif text-lg">{item.title}</span>
                      <span className="font-label-md uppercase tracking-widest text-[#D9A5B3] text-[10px]">{item.product}</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </main>
  );
}
