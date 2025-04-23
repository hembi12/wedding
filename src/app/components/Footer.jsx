"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      role="contentinfo"
      className="pb-18 text-[#6F5129] font-text text-md sm:text-lg text-center px-4 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <p className="italic text-lg sm:text-xl md:text-2xl text-[#6F5129] font-text mt-4 max-w-3xl mx-auto">
        Este día no sería lo mismo sin ustedes.
      </p>

      <p className="text-md sm:text-lg md:text-xl text-[#8F6B36] font-text mt-4 max-w-3xl mx-auto">
        Sitio creado con 💕 por Héctor & Michelle
      </p>
    </motion.footer>
  );
}
