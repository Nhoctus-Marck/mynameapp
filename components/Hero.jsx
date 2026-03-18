import React from "react";
import Link from 'next/link';
export const Hero = () => {
  return (
    <div>
      <header className="bg-[#0a0a0a] text-white px-8 py-24 md:py-32 min-h-[70vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Lado Izquierdo: Títulos Grandes */}
          <div className="md:col-span-8">
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-12">
              Desarrollador <br />
              <span className="text-blue-500">&</span> Diseñador Web <br />
            </h1>

            {/* Disponibilidad con la línea horizontal */}
            <div className="flex items-center space-x-4 opacity-60">
              <div className="w-12 h-[1px] bg-blue-500"></div>
              <span className="text-xs text-blue-200 uppercase tracking-[0.2em] font-medium ">
                Disponible para nuevos proyectos
              </span>
            </div>
          </div>

          {/* Lado Derecho: Descripción y Botón */}
          <div className="md:col-span-4 md:mt-4 space-y-8">
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              Construyo soluciones digitales donde la funcionalidad y el diseño convergen. Mi enfoque se centra en desarrollar ecosistemas web escalables que optimizan el flujo de trabajo, eliminando fricciones técnicas para que puedas enfocarte en lo que importa: tu negocio.
            </p>

            <Link href="/projects" className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-black transition-all duration-200 bg-gradient-to-r from-blue-400 to-blue-600 rounded-md hover:opacity-90 uppercase text-xs tracking-widest">
              Ver Proyectos
            </Link>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-1 bg-pink-500 rounded-full animate-pulse"></div>
        </div>
      </header>
    </div>
  );
};