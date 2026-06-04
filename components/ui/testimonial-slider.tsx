"use client";

import * as React from "react";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
}

export function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => setCurrentIndex((current) => (current + 1) % testimonials.length);
  const prev = () => setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden px-4 md:px-12 py-12">
       <div className="flex relative min-h-[350px] md:min-h-[250px] items-center">
            {testimonials.map((t, idx) => (
                <motion.div
                   key={t.id}
                   initial={{ opacity: 0, x: 50 }}
                   animate={{ 
                       opacity: currentIndex === idx ? 1 : 0, 
                       x: currentIndex === idx ? 0 : 50,
                       pointerEvents: currentIndex === idx ? "auto" : "none"
                   }}
                   transition={{ duration: 0.5, ease: "easeInOut" }}
                   className={cn("absolute w-full top-1/2 left-0 -translate-y-1/2 text-center")}
                >
                    <span className="material-symbols-outlined text-4xl text-[#3B1C32] opacity-30 mb-6 block">format_quote</span>
                    <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-snug lg:leading-tight text-[#3B1C32] mb-8 italic">
                        &quot;{t.content}&quot;
                    </p>
                    <div className="flex flex-col items-center justify-center">
                        <span className="font-label-md uppercase tracking-widest text-[#D9A5B3] mb-1">{t.name}</span>
                        <span className="font-body-md text-[#222222]/70">{t.role}</span>
                    </div>
                </motion.div>
            ))}
       </div>

       <div className="flex justify-center gap-4 mt-8 md:mt-2 relative z-10">
           <button onClick={prev} className="w-12 h-12 rounded-full border border-[#3B1C32]/20 flex items-center justify-center text-[#3B1C32] hover:bg-[#D9A5B3] hover:border-[#D9A5B3] hover:text-[#3B1C32] transition-colors disabled:opacity-50" aria-label="Previous testimonial">
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
           </button>
           <button onClick={next} className="w-12 h-12 rounded-full border border-[#3B1C32]/20 flex items-center justify-center text-[#3B1C32] hover:bg-[#D9A5B3] hover:border-[#D9A5B3] hover:text-[#3B1C32] transition-colors disabled:opacity-50" aria-label="Next testimonial">
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
           </button>
       </div>
    </div>
  );
}
