"use client";

import { motion } from "framer-motion";

/* A `template` re-mounts on every navigation, so this gives each
   page a smooth enter transition without affecting the persistent
   navbar/footer in the layout. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
