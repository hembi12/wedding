"use client";

import { useState, useEffect, useCallback } from "react";
import { MessageCircle, Repeat, Heart, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { createAvatar } from '@dicebear/core';
import { glass } from '@dicebear/collection';  // Estilo 'glass'
import { v4 as uuidv4 } from 'uuid';  // Para generar un valor único aleatorio

function MessageCard({ message, data, index }) {
  if (!data) return null; // Protección contra datos no generados aún

  const [profileImage, setProfileImage] = useState("");

  // Función para generar avatar solo si el username cambia
  const generateAvatar = useCallback(() => {
    const uniqueSeed = `${message.username}-${uuidv4()}`;
    const avatar = createAvatar(glass, {
      seed: uniqueSeed,
    });

    const svg = avatar.toString();
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    setProfileImage(url);
  }, [message.username]);

  useEffect(() => {
    generateAvatar();
  }, [generateAvatar]);

  return (
    <motion.div
      key={index}
      className="min-w-[220px] sm:min-w-[260px] max-w-[260px] min-h-[200px] max-h-[400px] bg-white/80 backdrop-blur-sm border border-[#B18A50] rounded-lg p-4 text-sm shadow-md hover:shadow-xl transition-transform duration-300 space-y-3"
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      role="region" // Añadir un rol para la sección de mensajes
      aria-labelledby={`message-card-${index}`} // Asociar el mensaje con su encabezado
    >
      {/* Encabezado */}
      <div className="flex items-start justify-between gap-3 text-left">
        <div className="flex items-center gap-3">
          {/* Si no hay imagen de perfil, generar avatar dinámicamente */}
          <img
            src={profileImage || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9InZpZXdCb3g6MCAwIDMwIDMwIiBmaWxsPSJub25lIj4KPHBhdGggZD0iTTEyIDB2MTkuNGwtMTcuNzYgMjEuMzg3bC0zLjA0Ni00LjE1NTdoLTMuMTM0bDEuNTk1IDIuNzk0bC0zLjMwMTctLjMwNTgtMy4xMzc2LjM2ODQ2ICIgZmlsbC1vcGFjaXR5PSIwLjI4NTc1IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGhlPSIxMCIgc3Ryb2tlLWRpc3RhbmNlPSJhdXRob3JpcHdpY3JlbnQiLz4KPC9zdmc+Cg=="}
            alt={message.name ? `${message.name}'s avatar` : 'Avatar de usuario genérico'} // Descripción alternativa para la imagen
            className="rounded-full object-cover"
            width={32}
            height={32}
          />
          <div className="flex flex-col">
            <span className="text-[#6F5129] font-semibold text-sm leading-tight">
              {message.name}
            </span>
            <span className="text-[#8F6B36] text-xs leading-tight">
              {message.username}
            </span>
          </div>
        </div>
        <span className="text-xs text-[#6F5129]">{data.date}</span>
      </div>

      {/* Contenido */}
      <p className="text-[#6F5129] text-sm whitespace-pre-line text-left">
        {message.content}
      </p>

      {/* Acciones */}
      <div className="flex justify-between text-[#6F5129] text-xs pt-3 border-t border-[#D1B06E] mt-2">
        <button
          className="flex items-center gap-1 hover:text-yellow-500 hover:scale-105 transition-all"
          aria-label="Comentario" // Etiqueta accesible
        >
          <MessageCircle size={14} />
          <span>{data.comments}</span>
        </button>
        <button
          className="flex items-center gap-1 hover:text-green-500 hover:scale-105 transition-all"
          aria-label="Retweet" // Etiqueta accesible
        >
          <Repeat size={14} />
          <span>{data.retweets}</span>
        </button>
        <button
          className="flex items-center gap-1 hover:text-red-500 hover:scale-105 transition-all"
          aria-label="Me gusta" // Etiqueta accesible
        >
          <Heart size={14} />
          <span>{data.likes}</span>
        </button>
        <button
          className="hover:text-blue-500 hover:scale-105 transition-all"
          aria-label="Compartir" // Etiqueta accesible
        >
          <Share2 size={14} />
        </button>
      </div>
    </motion.div>
  );
}

export default MessageCard;
