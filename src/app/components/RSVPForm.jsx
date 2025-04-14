"use client";
import { CheckCircle, Smile } from "lucide-react";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVPForm() {
  const [form, setForm] = useState({
    nombre: "",
    acompañantes: "",
    asistencia: null,
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAsistencia = (value) => {
    setForm((prev) => ({
      ...prev,
      asistencia: value,
      acompañantes: value === "sí" ? prev.acompañantes : "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nombre || !form.asistencia) return;

    setEnviando(true);

    const formData = new FormData();
    formData.append("Nombre", form.nombre);
    formData.append("Asistirá", form.asistencia);
    if (form.asistencia === "sí") {
      formData.append("Acompañantes", form.acompañantes);
    }
    formData.append("Mensaje", form.mensaje);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setEnviado(true);
      } else {
        alert("Hubo un error al enviar el formulario. Intenta de nuevo.");
      }
    } catch (error) {
      alert("Ocurrió un error inesperado.");
      console.error(error);
    } finally {
      setEnviando(false);
    }
  };

  if (enviado) {
    return (
      <motion.div
        role="status"
        aria-live="polite"
        className="flex justify-center mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center text-center bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#B18A50] shadow-md space-y-4 max-w-md sm:max-w-3xl w-full">
          <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[#6F5129]/10">
            {form.asistencia === "sí" ? (
              <CheckCircle className="w-8 h-8 text-[#4d7c0f]" />
            ) : (
              <Smile className="w-8 h-8 text-[#6F5129]" />
            )}
          </div>

          {form.asistencia === "sí" ? (
            <>
              <p className="text-[#4d7c0f] text-lg font-semibold">
                ¡Gracias por confirmar tu asistencia! 💌
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="/calendario-boda.ics"
                  download
                  className="inline-block px-6 py-2 rounded-full bg-[#6F5129] text-white font-medium hover:bg-[#B18A50] transition-colors duration-300"
                >
                  Añadir al calendario
                </a>
                <a
                  href="#gifts-title"
                  className="inline-block px-6 py-2 rounded-full bg-[#6F5129] text-white font-medium hover:bg-[#B18A50] transition-colors duration-300"
                >
                  Ver opciones de regalo
                </a>
              </div>
            </>
          ) : (
            <>
              <p className="text-[#6F5129] text-lg font-semibold">
                Lamentamos que no puedas acompañarnos,
              </p>
              <p className="text-[#8F6B36] text-lg font-semibold">
                ¡Gracias por avisar!
              </p>
              <a
                href="#gifts-title"
                className="inline-block px-6 py-2 rounded-full bg-[#6F5129] text-white font-medium hover:bg-[#B18A50] transition-colors duration-300"
              >
                Ver opciones de regalo
              </a>
            </>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#B18A50] font-text shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Nombre */}
      <div>
        <label
          htmlFor="nombre"
          className="text-left block mb-1 font-semibold text-[#5c3a21]"
        >
          Nombre completo <span className="text-red-500">*</span>
        </label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
          className="w-full border border-[#B18A50] rounded-lg px-4 py-2 bg-white/90 text-[#5c3a21] focus:ring-2 focus:ring-[#e7d6c2]"
        />
      </div>

      {/* Asistencia */}
      <div>
        <p className="text-left mb-2 font-semibold text-[#5c3a21]">
          ¿Podrás acompañarnos? <span className="text-red-500">*</span>
        </p>
        <div className="flex flex-wrap gap-3">
          {["sí", "no"].map((valor) => (
            <button
              key={valor}
              type="button"
              onClick={() => handleAsistencia(valor)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                form.asistencia === valor
                  ? "bg-[#6F5129] text-white shadow"
                  : "bg-white border border-[#B18A50] text-[#6F5129] hover:border-[#CBA46A]"
              }`}
            >
              {valor === "sí" ? "Sí asistiré" : "No podré asistir"}
            </button>
          ))}
        </div>
      </div>

      {/* Acompañantes */}
      {form.asistencia === "sí" && (
        <div>
          <label
            htmlFor="acompañantes"
            className="text-left block mb-1 font-semibold text-[#5c3a21]"
          >
            ¿Cuántos acompañantes te acompañarán?
          </label>
          <input
            id="acompañantes"
            type="number"
            name="acompañantes"
            min="0"
            value={form.acompañantes}
            onChange={handleChange}
            required
            className="w-full border border-[#B18A50] rounded-lg px-4 py-2 bg-white/90 text-[#5c3a21] focus:ring-2 focus:ring-[#e7d6c2]"
          />
        </div>
      )}

      {/* Mensaje */}
      <div>
        <label
          htmlFor="mensaje"
          className="text-left block mb-1 font-semibold text-[#5c3a21]"
        >
          ¿Quieres decirnos algo? (opcional)
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={3}
          value={form.mensaje}
          onChange={handleChange}
          placeholder="Por ejemplo: tengo alergias, usaré silla de ruedas, etc."
          className="w-full border border-[#B18A50] rounded-lg px-4 py-2 bg-white/90 text-[#5c3a21] focus:ring-2 focus:ring-[#e7d6c2]"
        />
      </div>

      {/* Botón */}
      <div className="text-center">
        <button
          type="submit"
          disabled={!form.asistencia || enviando}
          className="bg-[#6F5129] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#B18A50] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {enviando ? "Enviando..." : "Confirmar asistencia"}
        </button>
      </div>
    </form>
  );
}
