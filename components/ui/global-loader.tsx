"use client";

import * as React from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

export function GlobalLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = React.useState(true);
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      setIsLoading(true);
    }
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="curtain"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-primary overflow-hidden pointer-events-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center justify-center"
          >
            <span className="font-headline-lg text-4xl md:text-5xl lg:text-7xl text-surface uppercase tracking-[0.2em] font-serif mb-6 text-center">
              Talia Boutique
            </span>
            <motion.div 
               initial={{ width: 0 }}
               animate={{ width: "120px" }}
               transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
               className="h-[1px] bg-surface/50"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
