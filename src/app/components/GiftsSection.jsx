"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, PiggyBank, ShoppingCart, Smile, Copy } from "lucide-react";

export default function GiftsSection() {
  return (
    <motion.section
      id="gifts-title"
      aria-labelledby="gifts-heading"
      className="text-center px-4 sm:px-6 md:px-12 space-y-10 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.h2
        id="gifts-heading"
        className="text-4xl sm:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Opciones de regalo
      </motion.h2>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-[#6F5129] font-text mt-4 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Si deseas hacernos un obsequio, aquí tienes algunas opciones.
      </motion.p>

      <div className="grid gap-8 sm:grid-cols-2 md:gap-10 font-text">
        {giftOptions.map((option, index) => (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 + index * 0.2 }}
          >
            <GiftCard {...option} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

const giftOptions = [
  {
    icon: ShoppingCart,
    title: "Mesa de regalos",
    content: (
      <>
        <p className="text-[#6F5129] text-sm sm:text-base leading-relaxed">
          Hemos creado una mesa de regalos en Amazon con artículos seleccionados con cariño.
        </p>
        <GiftLinks />
      </>
    ),
  },
  {
    icon: PiggyBank,
    title: "Transferencia bancaria",
    content: (
      <>
        <p className="text-[#6F5129] text-sm sm:text-base leading-relaxed">
          Si prefieres hacer una aportación vía transferencia, puedes consultar los datos aquí:
        </p>
        <ToggleTransferencia />
      </>
    ),
  },
  {
    icon: Gift,
    title: "Regalo físico",
    content: (
      <p className="text-[#6F5129] text-sm sm:text-base leading-relaxed">
        Puedes llevar tu obsequio directamente el día del evento. Habrá un espacio especial para recibirlos.
      </p>
    ),
  },
  {
    icon: Smile,
    title: "Tu presencia es suficiente",
    content: (
      <p className="text-[#6F5129] text-sm sm:text-base leading-relaxed">
        Lo más valioso para nosotros es que estés presente. No necesitas traer nada más que tu presencia.
      </p>
    ),
  },
];

function GiftCard({ icon: Icon, title, content }) {
  return (
    <div className="flex flex-col items-center text-center bg-white/80 backdrop-blur-sm p-6 sm:p-6 rounded-2xl border border-[#B18A50] shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 space-y-4">
      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#6F5129]" aria-hidden="true" />
      <h3 className="text-lg sm:text-xl font-semibold text-[#6F5129]">{title}</h3>
      {content}
    </div>
  );
}

function GiftLinks() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setMostrar(!mostrar)}
        className="text-sm sm:text-base text-[#6F5129] underline font-medium hover:text-[#B18A50] transition-colors duration-200"
      >
        {mostrar ? "Ocultar detalles" : "Ver detalles"}
      </button>

      {mostrar && (
        <div className="space-y-2 mt-4">
          <a
            href="https://www.amazon.com.mx/wedding/share/hectorymichelle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm sm:text-base text-[#6F5129] hover:text-[#B18A50] underline font-medium transition-colors duration-200"
          >
            Ver mesa en Amazon
          </a>
          <a
            href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51517785"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm sm:text-base text-[#6F5129] hover:text-[#B18A50] underline font-medium transition-colors duration-200"
          >
            Ver mesa en Liverpool
          </a>
        </div>
      )}
    </div>
  );
}

function ToggleTransferencia() {
  const [mostrar, setMostrar] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const clabe = "012180028397068360";

  const copiarCLABE = async () => {
    try {
      await navigator.clipboard.writeText(clabe);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error("No se pudo copiar la CLABE:", err);
    }
  };

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => setMostrar(!mostrar)}
        className="text-sm sm:text-base underline font-medium text-[#6F5129] hover:text-[#B18A50] transition-colors duration-200"
      >
        {mostrar ? "Ocultar detalles" : "Ver detalles"}
      </button>

      {mostrar && (
        <div className="text-sm sm:text-base text-[#5c3a21] space-y-1">
          <p><strong>Banco:</strong> BBVA</p>
          <p><strong>Nombre:</strong> Héctor Martil</p>
          <p><strong>CLABE:</strong> {clabe}</p>
          <button
            type="button"
            onClick={copiarCLABE}
            className="inline-flex items-center gap-1 text-sm sm:text-base text-[#6F5129] underline hover:text-[#B18A50] transition"
          >
            <Copy className="w-4 h-4" />
            {copiado ? "CLABE copiada" : "Copiar CLABE"}
          </button>
        </div>
      )}
    </div>
  );
}
