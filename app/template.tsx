"use client";

import * as motion from "motion/react-client";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ type: "tween", ease: "circOut", duration: 0.6 }}
      className="flex flex-col min-h-screen"
    >
      {children}
    </motion.div>
  );
}
