"use client";

import { motion } from "framer-motion";
import RSVPForm from "./RSVPForm";

export default function RSVPSection() {
  return (
    <motion.section
      id="rsvp-title"
      aria-labelledby="rsvp-heading"
      className="text-center px-4 sm:px-6 md:px-12 space-y-10 max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.h2
        id="rsvp-heading"
        className="text-4xl sm:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Confirma tu asistencia
      </motion.h2>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-[#6F5129] font-text mt-4 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Por favor confírmanos si podrás acompañarnos en este día tan especial.
      </motion.p>

      <motion.div
        className="max-w-2xl mx-auto w-full"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <RSVPForm />
      </motion.div>
    </motion.section>
  );
}
