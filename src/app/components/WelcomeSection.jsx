"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WelcomeSection() {
  return (
    <motion.section
      id="welcome-title"
      aria-labelledby="welcome-heading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative overflow-hidden px-4 sm:px-6 md:px-12 text-center"
    >
      {/* Encabezado */}
      <motion.h1
        id="welcome-heading"
        className="text-5xl sm:text-6xl md:text-6xl font-bold leading-tight tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span className="block">Héctor Martil</span>
        <span className="text-4xl sm:text-5xl md:text-6xl font-light">
          &
        </span>
        <span className="block">Michelle Hernández</span>
      </motion.h1>

      {/* Imagen con marco elegante */}
      <motion.div
        className="relative mx-auto mt-4 w-full max-w-md sm:max-w-lg md:max-w-3xl rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 ring-2 ring-[#B18A50]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Image
          src="/portada-boda.webp"
          alt="Fotografía de Héctor Martil y Michelle Hernández, un retrato de ellos como pareja."
          width={800}
          height={600}
          className="object-cover w-full h-auto"
          priority
          layout="intrinsic" // Usar layout intrínseco para la optimización
        />
      </motion.div>

      {/* Subtítulo decorado */}
      <motion.p
        className="mt-6 italic text-lg sm:text-xl md:text-2xl text-[#6F5129] font-text max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        ¡Nos Casamos! 💍
      </motion.p>

      {/* Invitación */}
      <motion.p
        className="mt-4 text-[#6F5129] font-text text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Estás cordialmente invitado a compartir con nosotros este momento
        inolvidable. Tu
        presencia hará nuestro día aún más especial.
      </motion.p>

      {/* Frase final */}
      <motion.p
        className="mt-4 italic text-[#8F6B36] font-text text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        “El amor no mira con los ojos, sino con el alma.” — William Shakespeare
      </motion.p>
    </motion.section>
  );
}
