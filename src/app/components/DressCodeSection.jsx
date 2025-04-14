"use client";

import { motion } from "framer-motion";

export default function DressCodeSection() {
  const forbiddenColors = [
    { color: "#ffffff", label: "Blanco" },
    { color: "#f2e9d5", label: "Marfil" },
    { color: "#e8dcc2", label: "Beige claro" },
    { color: "#f0d9b5", label: "Champán claro" },
  ];

  return (
    <motion.section
      id="dress-code-title"
      aria-labelledby="dress-code-heading"
      className="text-center px-4 sm:px-6 md:px-12 max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.h2
        id="dress-code-heading"
        className="text-4xl sm:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Código de Vestimenta
      </motion.h2>

      <motion.p
        className="mt-4 text-lxl sm:text-2xl text-[#6F5129] leading-relaxed font-text max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Vístete con <strong>elegancia formal</strong> para este día tan
        especial.
      </motion.p>

      {/* Imágenes de referencia */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 items-center justify-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <img
            src="/images/ref2.webp"
            alt="Ejemplo de vestimenta para mujeres"
            className="object-cover rounded-lg border-2 border-[#B18A50] shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
          />
          <span className="text-sm sm:text-base text-[#6F5129] font-text font-medium">
            Ejemplo para mujeres
          </span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <img
            src="/images/ref1.webp"
            alt="Ejemplo de vestimenta para hombres"
            className=" object-cover rounded-lg border-2 border-[#B18A50] shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
          />
          <span className="text-sm sm:text-base text-[#6F5129] font-text font-medium">
            Ejemplo para hombres
          </span>
        </div>
      </motion.div>

      <motion.p
        className="mt-8 text-sm sm:text-base italic text-[#6F5129] font-text max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Te pedimos evitar el blanco o tonos muy claros, ya que están reservados
        para la novia. ¡Gracias por entender y ayudarnos a hacer este día aún
        más especial!
      </motion.p>

      {/* Muestra de colores prohibidos */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-6"
        role="list"
        aria-label="Colores prohibidos para los invitados"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {forbiddenColors.map(({ color, label }, index) => (
          <motion.div
            key={label}
            role="listitem"
            className="flex flex-col items-center space-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 1 + index * 0.15,
              ease: "easeOut",
            }}
          >
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#B18A50] shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: color }}
              title={label}
              aria-label={`Color prohibido: ${label}`}
            />
            <span className="text-sm sm:text-base text-[#6F5129] font-text text-center font-medium">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
