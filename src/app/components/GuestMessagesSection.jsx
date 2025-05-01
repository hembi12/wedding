"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { messages } from "../data/messages";
import MessageCard from "./MessageCard";

function getRelativeTimeString(date) {
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(seconds / 3600);
  const days = Math.floor(seconds / 86400);
  const weeks = Math.floor(days / 7);

  if (seconds < 60) return `${seconds}s`;
  if (minutes < 60) return `${minutes}m`;
  if (hours < 24) return `${hours}h`;
  if (days < 7) return `${days}d`;
  return `${weeks}w`;
}

function getRandomRelativeDate() {
  const now = new Date();
  const past = new Date(
    now.getTime() - Math.floor(Math.random() * 21 * 24 * 60 * 60 * 1000)
  );
  return getRelativeTimeString(past);
}

export default function GuestMessagesSection() {
  const [messageData, setMessageData] = useState([]);

  const generatedData = useMemo(() => {
    return Array.from({ length: messages.length * 2 }, () => ({
      date: getRandomRelativeDate(),
      comments: Math.floor(Math.random() * 11),
      retweets: Math.floor(Math.random() * 15) + 1,
      likes: Math.floor(Math.random() * 46) + 5,
    }));
  }, [messages]);

  useEffect(() => {
    setMessageData(generatedData);
  }, [generatedData]);

  if (messageData.length < messages.length * 2) return null;

  return (
    <motion.section
      id="love-messages" 
      className="text-center px-4 sm:px-6 md:px-12 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      aria-labelledby="love-messages-title" // Indicamos que esta sección está relacionada con el título
    >
      <motion.h2
        id="love-messages-title" // Aseguramos que el título tenga un ID accesible
        className="text-4xl sm:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        role="heading" // Especificamos que es un encabezado
        aria-level="2" // Nivel del encabezado (importante para navegación con lectores de pantalla)
      >
        Mensajes de amor
      </motion.h2>

      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-[#6F5129] font-text mt-4 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Aquí compartimos los mensajes que nuestros invitados nos dejaron con todo su cariño.
      </motion.p>

      {/* Primera fila */}
      <div className="marquee-container mt-6 mb-4" aria-live="polite">
        <motion.div
          className="marquee-track"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {[...messages, ...messages].map((message, i) => (
            <MessageCard
              key={`row1-${i}`}
              message={message}
              data={messageData[i]}
              index={`row1-${i}`}
              aria-live="assertive" // Aseguramos que los mensajes se actualicen de forma accesible
            />
          ))}
        </motion.div>
      </div>

      {/* Segunda fila */}
      <div className="marquee-container" aria-live="polite">
        <motion.div
          className="marquee-track-reverse"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {[...messages, ...messages].map((message, i) => (
            <MessageCard
              key={`row2-${i}`}
              message={message}
              data={messageData[i + messages.length]}
              index={`row2-${i}`}
              aria-live="assertive"
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
