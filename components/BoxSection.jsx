import React from "react";

export const BoxSection = () => {
  return (
    <div>
      <section className="bg-black py-24 px-8 flex justify-center">
        {/* Contenedor principal con efecto de tarjeta oscura */}
        <div className="max-w-6xl w-full bg-[#0d0d0d] border border-white/5 rounded-[40px] p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Lado Izquierdo: Texto y métricas */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              ¿Hacemos algo increíble juntos?
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Me enfoco en crear herramientas que no solo se vean bien, sino que
              te quiten un peso de encima. Quiero ayudarte a organizar tu
              negocio para que puedas dedicarte a lo que de verdad importa.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Basta de sistemas complicados. Una charla de café (aunque sea
              virtual) es todo lo que necesitamos para empezar a darle forma a
              tu idea.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-10 pt-8">
  {/* Día 01 */}
  <div className="space-y-1">
    <span className="block text-2xl font-bold text-white tracking-tight">
      Día 01
    </span>
    <span className="block text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold leading-tight">
      Brainstorming <br /> y Plan
    </span>
  </div>

  {/* Día 15 */}
  <div className="space-y-1">
    <span className="block text-2xl font-bold text-white tracking-tight">
      Día 15
    </span>
    <span className="block text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold leading-tight">
      Primeros <br /> Avances
    </span>
  </div>

  {/* Día 30 */}
  <div className="space-y-1">
    <span className="block text-2xl font-bold text-white tracking-tight">
      Día 30
    </span>
    <span className="block text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold leading-tight">
      ¡Lanzamiento <br /> Exitoso!
    </span>
  </div>

  {/* Mensual */}
  <div className="space-y-1">
    <span className="block text-2xl font-bold text-white tracking-tight">
      Mensual
    </span>
    <span className="block text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold leading-tight">
      Evolución <br /> y Soporte
    </span>
  </div>
</div>
          </div>

          {/* Lado Derecho: Visualizador (Se mantiene el diseño pero con un toque de color) */}
          <div className="relative aspect-video bg-[#080808] border border-white/5 rounded-3xl flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] group-hover:bg-blue-500/20 transition-colors duration-700"></div>

            <svg
              viewBox="0 0 24 24"
              className="w-12 h-12 text-blue-400/80 stroke-[1.5px] fill-none"
              xmlns="http://www.w3.org"
            >
              <path d="M12 22s-7-15.5-7-18.5S8.5 1 12 1s7.5 1.5 7.5 2.5S12 22 12 22z" />
              <circle cx="12" cy="7" r="3" />
              <path d="M12 22l-4-8m4 8l4-8" />
            </svg>

            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};
