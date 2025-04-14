"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      role="contentinfo"
      className="pb-18 text-[#6F5129] font-text text-md sm:text-lg text-center px-4 pt-8 space-y-4 border-t border-[#d6c2aa]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <p className="italic max-w-xl mx-auto">
        Este día no sería lo mismo sin ustedes.
      </p>

      <p className="text-sm text-[#8F6B36]">
        Sitio creado con 💕 por{" "}
        <a
          href="https://hectormartil.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#B18A50] font-semibold"
          aria-label="Sitio web personal de Héctor Martil"
        >
          Héctor
        </a>{" "}
        & Michelle — 2025
      </p>
    </motion.footer>
  );
}
