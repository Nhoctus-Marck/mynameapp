import React from 'react'
import Image from "next/image";

export const AboutSection = () => {
  return (
    <div>
        <section className="bg-black text-white py-24 px-8 md:px-16 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Columna Izquierda: Texto Masivo */}
                  <div className="lg:col-span-8 z-10">
                    <h2 className="text-[12vw] lg:text-[7rem] font-black leading-[0.85] tracking-tighter uppercase mb-12">
                      Construyendo <br />
                      Sistemas <br />
                      <span className="text-blue-500">Imbatibles.</span>
                    </h2>
        
                    <div className="max-w-xl space-y-6">
                      <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                        Como {" "}
                        <span className="text-white font-medium italic">
                        Ingeniero de Software
                        </span>{" "}
                        pongo mi stack técnico al servicio de tu proyecto.
                      </p>
                      <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light border-l-2 border-blue-500 pl-6">
                        Con mi experiencia técnica y tu visión estratégica, saldrás al mercado con un sistema sólido que supere las expectativas de tus clientes.

                      </p>
                    </div>
                  </div>
        
                  {/* Columna Derecha: Imagen con estilo editorial */}
                  <div className="lg:col-span-4 relative flex justify-center">
                    {/* Fondo decorativo sutil */}
                    <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full scale-150"></div>
        
                    <div className="relative group w-full max-w-[400px]">
                      {/* Marco de la imagen */}
                      <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                        {/* <Image
                          src={} // Cambia esto por la ruta de tu foto
                          alt="Marck Carbajales"
                          height={600}
                          width={500}
                          priority
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                        /> */}
                      </div>
        
                      {/* Detalle flotante (Asimetría) */}
                      <div className="absolute -bottom-6 -left-6 bg-blue-600 text-black px-6 py-3 font-bold text-xs uppercase tracking-widest -rotate-6">
                        Developer & Architect
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Indicador de scroll */}
        <div className="absolute left-1/2 -translate-x-1/2 bg-black">
          <div className="w-6 h-1 bg-pink-500 rounded-full animate-pulse"></div>
        </div>
    </div>
  )
}
