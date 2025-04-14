"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    pregunta: "¿Hay estacionamiento disponible?",
    respuesta:
      "Sí, el lugar cuenta con servicio de valet parking para todos los invitados.",
  },
  {
    pregunta: "¿Puedo llevar niños?",
    respuesta:
      "¡Claro que sí! Los niños son bienvenidos a nuestra celebración. Será un día especial para todas las edades.",
  },
  {
    pregunta: "¿A qué hora termina la celebración de la boda?",
    respuesta:
      "La celebración finalizará a las 9:00 PM.",
  },
  {
    pregunta: "¿Puedo cambiar mi confirmación más adelante?",
    respuesta: (
      <div className="space-y-2">
        <p>
          Sí, si necesitas actualizar tu confirmación, puedes escribirnos directamente por WhatsApp:
        </p>
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-[#4a2f1a]" />
          <a
            href="https://wa.me/525549221534"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-[#6F5129] hover:text-[#B18A50] font-medium transition-colors duration-200"
          >
            Héctor (novio)
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-[#6F5129]" />
          <a
            href="https://wa.me/527227595246"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-[#6F5129] hover:text-[#B18A50] font-medium transition-colors duration-200"
          >
            Michelle (novia)
          </a>
        </div>
      </div>
    ),
  },
];

export default function FAQSection() {
  const [abierta, setAbierta] = useState(null);

  const toggle = (index) => {
    setAbierta((prev) => (prev === index ? null : index));
  };

  return (
    <motion.section
      id="faq-title"
      aria-labelledby="faq-heading"
      className="text-center px-4 sm:px-6 md:px-12 space-y-10 max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.h2
        id="faq-heading"
        className="text-4xl sm:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Preguntas frecuentes
      </motion.h2>

      <div role="list" className="space-y-6 text-left font-text">
        {faqs.map((item, index) => {
          const abiertaEsta = abierta === index;
          const preguntaId = `faq-pregunta-${index}`;
          const respuestaId = `faq-respuesta-${index}`;

          return (
            <motion.div
              key={index}
              role="listitem"
              className="border border-[#B18A50] rounded-xl p-6 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left text-[#6F5129] font-semibold text-lg sm:text-xl"
                aria-expanded={abiertaEsta}
                aria-controls={respuestaId}
                id={preguntaId}
              >
                <span>{item.pregunta}</span>
                {abiertaEsta ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {abiertaEsta && (
                  <motion.div
                    key="respuesta"
                    id={respuestaId}
                    role="region"
                    aria-labelledby={preguntaId}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden mt-4 text-[#6F5129] text-base sm:text-lg leading-relaxed"
                  >
                    {item.respuesta}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
