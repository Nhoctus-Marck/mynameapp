import React from "react";
import Image from "next/image";

export const DolarAppProject = () => {
  return (
    <div>
      <section className="relative w-full h-[70vh] md:h-screen overflow-hidden bg-black group">
        {/* 1. Fondo con efecto Grayscale al pasar el mouse por la SECCIÓN */}
        <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out">
          <Image
            src="/images/Dolar App1.png"
            alt="Dolar App"
            fill
            className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-1000"
            priority
          />
        </div>

        {/* 2. Capa de Contenido Editorial */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-20 pointer-events-none">
          {/* Info Superior */}
          <div className="text-zinc-500 text-xs md:text-sm uppercase tracking-[0.4em] font-medium">
            Concept Architecture + 2024
          </div>

          {/* Título Principal con HOVER AZUL */}
          <div>
            <h2
              className="text-white text-7xl md:text-[140px] leading-[0.8] font-black uppercase tracking-tighter 
                         transition-colors duration-500 ease-in-out
                         cursor-pointer pointer-events-auto
                         hover:text-blue-600 active:scale-95"
            >
              DOLAR <br />
              APP
            </h2>
          </div>

          {/* Info Inferior Derecha */}
          <div className="self-end text-right">
            <span className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] block mb-1">
              Dev
            </span>
            <span className="text-white text-sm md:text-lg font-bold uppercase tracking-wider">
              MARK.C
            </span>
          </div>
        </div>

        {/* Degradado para profundidad visual */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </section>
      <section className="bg-[#0b0b0b] text-white py-24 px-8 md:px-20 font-sans border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          {/* Lado Izquierdo: Contexto */}
          <div className="lg:col-span-4">
            <h3 className="text-zinc-600 text-xs md:text-sm font-black uppercase tracking-[0.3em] leading-tight">
              EL CASO DE <br /> ESTUDIO
            </h3>
          </div>

          {/* Lado Derecho: La Narrativa del Proyecto */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Titular: Enfoque en la solución */}
            <h2 className="text-3xl md:text-5xl font-semibold leading-[1.2] tracking-tight text-zinc-100">
              DolarApp: Centralizar la información para eliminar la{" "}
              <span className="text-blue-600 italic font-medium">
                fricción en la atención al cliente.
              </span>
            </h2>

            <div className="flex flex-col gap-8 text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl font-light">
              <p>
                El proyecto surge de una necesidad operativa identificada en un
                entorno de ventas real. El flujo de trabajo dependía de
                múltiples herramientas externas para consultar divisas y
                realizar conversiones, lo que fragmentaba la atención y extendía
                los tiempos de espera.
              </p>

              <p>
                Esta desconexión de datos no solo ralentizaba el proceso, sino
                que propiciaba errores en los cálculos matemáticos bajo presión.{" "}
                <span className="text-zinc-200">
                  DolarApp fue diseñada para consolidar estas funciones
                </span>{" "}
                en una sola interfaz, permitiendo actualizaciones instantáneas y
                precisas.
              </p>

              <p className="text-zinc-200 font-normal">
                El resultado fue una optimización directa en la dinámica de
                venta: se eliminaron los re-procesos por errores manuales y se
                garantizó la rentabilidad en cada transacción mediante cálculos
                automatizados.
              </p>
            </div>

            {/* Indicador de Enfoque */}
            <div className="flex items-center gap-4 pt-6">
              <div className="h-[1px] w-12 bg-blue-600"></div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">
                Desarrollo orientado a resultados
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0b0b0b] text-white py-24 px-8 md:px-20 font-sans border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado Azul */}
          <h4 className="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-16">
            THE SOLUTION
          </h4>

          {/* Bloque Superior: Texto + Imagen */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Icono Corregido */}
              <svg
                className="w-8 h-8 text-zinc-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>

              <h3 className="text-xl font-bold uppercase tracking-tight text-zinc-100">
                Cálculo en Tiempo Real
              </h3>
              <p className="text-zinc-500 leading-relaxed text-sm max-w-sm">
                Un motor de procesamiento ligero que sincroniza la API
                financiera para entregar la cotización exacta en milisegundos.
              </p>
            </div>

            {/* Contenedor de Imagen con Texto Interno */}
            <div className="lg:col-span-8 relative group overflow-hidden bg-zinc-900 rounded-sm aspect-video">
              <Image
                src="/images/Dolar App1.png"
                alt="Dolar App Interface"
                fill
                className="object-cover grayscale opacity-30 group-hover:opacity-50 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-8">
                <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl">
                  SINCRO <br /> API
                </h2>
              </div>
            </div>
          </div>

          {/* Bloque Inferior: Valor Real del Proyecto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center border-t border-white/5 pt-16">
            {/* Columna 1: El porqué del cambio */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
                Consolidación de Datos
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Sustituimos el uso de múltiples calculadoras y pestañas del
                navegador por un flujo de trabajo centralizado que elimina la
                carga mental del operador.
              </p>
            </div>

            {/* Columna 2: El "Ratio" de Eficiencia (Más honesto) */}
            <div className="flex justify-center">
              <div className="bg-zinc-900/40 border border-white/5 w-44 h-44 flex flex-col items-center justify-center gap-1 backdrop-blur-sm">
                <span className="text-blue-600 text-5xl font-black tracking-tighter">
                  1:1
                </span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] text-center px-4 leading-tight">
                  Una sola interfaz <br /> para todo el proceso
                </span>
              </div>
            </div>

            {/* Columna 3: El beneficio técnico */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right gap-4">
              <svg
                className="text-blue-600 w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-widest text-zinc-200">
                  Sincronización Activa
                </h4>
                <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] mt-2">
                  API Actualizada al minuto
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
