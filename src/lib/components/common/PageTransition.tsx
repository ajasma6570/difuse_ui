"use client";

import { AnimatePresence, motion } from "motion/react";

export default function PageTransition({
  children,
  motionKey,
}: {
  children: React.ReactNode;
  motionKey: string;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          y: { duration: 0.5, ease: "easeOut" },
          opacity: { duration: 0.3, ease: "easeOut" },
        }}
        key={motionKey}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
