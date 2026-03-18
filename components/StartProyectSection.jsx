"use client"
import React, { useState } from "react";

export const StartProyectSection = () => {
  // 1. Estado para los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  // 2. Manejador de cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 3. Manejador del envío
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // REEMPLAZA "TU_ID_AQUÍ" con el código que te da Formspree
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ID, { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Nombre: formData.name,
          Email: formData.email,
          Mensaje: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        // El mensaje de éxito desaparece después de 5 segundos
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.error("Error al enviar:", error);
    }
  };

  return (
    <section className="bg-[#0a0a0a] text-white p-8 lg:p-24 min-h-screen">
      <div className="max-w-4xl">
        {/* Encabezado */}
        <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-6">
          ¿Listo para iniciar tu proyecto?
        </h2>
        <p className="text-zinc-400 text-lg lg:text-xl mb-16 max-w-2xl">
          Disponible para nuevos proyectos en 2026. Creemos algo sólido.
        </p>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Nombre */}
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.3em] uppercase text-zinc-600 font-bold block">
                Identificación
              </label>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Tu nombre"
                className="w-full bg-zinc-900/50 border border-zinc-800 p-5 rounded-sm focus:outline-none focus:border-blue-500 transition-colors text-zinc-300"
              />
            </div>
            {/* Input Email */}
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.3em] uppercase text-zinc-600 font-bold block">
                Comunicación
              </label>
              <input
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Correo electrónico"
                className="w-full bg-zinc-900/50 border border-zinc-800 p-5 rounded-sm focus:outline-none focus:border-blue-500 transition-colors text-zinc-300"
              />
            </div>
          </div>

          {/* Textarea Mensaje */}
          <div className="space-y-4">
            <label className="text-[10px] tracking-[0.3em] uppercase text-zinc-600 font-bold block">
              Detalles de la misión
            </label>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Cuéntame sobre la visión de tu proyecto..."
              className="w-full bg-zinc-900/50 border border-zinc-800 p-5 rounded-sm focus:outline-none focus:border-blue-500 transition-colors text-zinc-300 resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col gap-6">
            {/* Botón con estados dinámicos */}
            <button 
              disabled={status === "sending"}
              className="w-fit bg-gradient-to-r from-blue-400 to-blue-600 text-black font-black uppercase text-xs tracking-[0.2em] px-10 py-5 rounded-sm hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Enviando..." : "Iniciar Contacto"}
            </button>

            {/* Contenedor de Feedback Visual */}
            <div className="min-h-[20px]">
              {status === "success" && (
                <p className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.2em] animate-pulse">
                  ✓ ¡Mensaje enviado con éxito! Me pondré en contacto pronto.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                  ✕ Hubo un error. Por favor, intenta de nuevo más tarde.
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};