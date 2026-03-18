import React from "react";
import { MoveRight } from "lucide-react"; // O puedes usar un SVG simple

export const NextProjectNav = ({ title, subtitle = "Next Project", link = "#second-project" }) => {
  return (
    <section className="bg-black py-40 flex flex-col items-center justify-center text-center px-6 border-t border-white/5">
      {/* Etiqueta superior pequeña */}
      <span className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.4em] mb-8 font-medium">
        {subtitle}
      </span>

      {/* Título Gigante del siguiente proyecto */}
      <a 
        href={link}
        className="group relative flex flex-col items-center"
      >
        <h2 className="text-white text-6xl md:text-[120px] font-black uppercase tracking-tighter transition-all duration-700 group-hover:text-zinc-400 group-hover:italic group-hover:scale-95">
          {title}
        </h2>

        {/* Botón de acción con flecha */}
        <div className="mt-12 flex items-center gap-3 text-zinc-400 group-hover:text-blue-600 transition-colors duration-500 uppercase text-xs md:text-sm font-bold tracking-[0.2em]">
          <span>View Case Study</span>
          <MoveRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
        </div>
      </a>
    </section>
  );
};