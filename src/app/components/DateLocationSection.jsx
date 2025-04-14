"use client";

import { motion } from "framer-motion";
import CustomMap from "./CustomMap";

export default function DateLocationSection() {
  return (
    <motion.section
      id="date-location-title"
      aria-labelledby="date-location-heading"
      className="px-4 sm:px-6 md:px-12 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Título */}
      <motion.h2
        id="date-location-heading"
        className="text-4xl sm:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Sábado, 28 de junio de 2025
      </motion.h2>

      {/* Lugar */}
      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-[#6F5129] font-text mt-4 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Centro Cultural Pedregal, Ciudad de México
      </motion.p>

      {/* Horarios destacados */}
      <motion.div
        className="mt-6 flex flex-wrap justify-center items-center gap-4 sm:gap-8 font-text font-semibold text-[#6F5129]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 text-base sm:text-lg">
          Recepción: <span className="font-bold">2:30 PM</span>
        </div>
        <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 text-base sm:text-lg">
        Ceremonia: <span className="font-bold">3:00 PM</span>
        </div>
      </motion.div>

      {/* Nota de valet */}
      <motion.p
        className="mt-6 text-sm sm:text-base text-[#8F6B36] font-text max-w-lg mx-auto italic"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        El lugar cuenta con servicio de valet parking para tu comodidad.
      </motion.p>

      {/* Mapa (estilos ya incluidos en el componente) */}
      <CustomMap />
    </motion.section>
  );
}
