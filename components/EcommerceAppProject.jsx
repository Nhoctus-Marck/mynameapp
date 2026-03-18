import React from 'react'
import Image from "next/image";

export const EcommerceAppProject = () => {
  return (
    <div>
        <section className="relative w-full h-[70vh] md:h-screen overflow-hidden bg-black group">
    {/* 1. Fondo con efecto Grayscale */}
    <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out">
      <Image
        src="/images/EcomAdmin.png"
        alt="E-commerce"
        fill
        className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-1000"
        priority
      />
    </div>

    {/* 2. Capa de Contenido Editorial */}
    <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-20 pointer-events-none">
      {/* Info Superior */}
      <div className="text-zinc-500 text-xs md:text-sm uppercase tracking-[0.4em] font-medium">
        funcionalidades 2026
      </div>

      {/* Título Principal */}
      <div>
        <h2 className="text-white text-7xl md:text-[140px] leading-[0.8] font-black uppercase tracking-tighter transition-colors duration-500 ease-in-out cursor-pointer pointer-events-auto hover:text-blue-600 active:scale-95">
          E-Commerce <br />
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

    {/* Degradado */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
</section>

<section className="bg-[#0b0b0b] text-white py-24 px-8 md:px-20 font-sans border-t border-white/5">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
      <div className="lg:col-span-4">
        <h3 className="text-zinc-600 text-xs md:text-sm font-black uppercase tracking-[0.3em] leading-tight">
          CASO DE <br /> ESTUDIO
        </h3>
      </div>

      <div className="lg:col-span-8 flex flex-col gap-10">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[1.2] tracking-tight text-zinc-100">
          <span className="text-blue-600 italic font-medium">
            E-Commerce:
          </span> uno de los grandes y más populares modelos de sitios web
        </h2>

        <div className="flex flex-col gap-8 text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl font-light">
          <p>
            Con este proyecto me centraré en mostrarte las funcionalidades básicas y complejas que forman parte de estos sitios web con fines comerciales.
          </p>

          <p>
            En esta ocasión, me encargaré de detallarte cada rincón de la aplicación para que puedas familiarizarte con ella y aprovecharla al máximo.{" "}
            <span className="text-zinc-200">
              E-Commerce Base fue diseñada para mantenerte al tanto de tu stock, ventas y clientes, asegurándote de no perder ningún dato importante de tu negocio.
            </span>{" "}
            A partir de esta estructura, podremos dar vida a tu negocio virtual a través de diversos diseños; <span className="font-normal text-blue-500">me encargaré de capturar la esencia que quieres proyectar a tus clientes.</span> 
          </p>

          <p className="text-zinc-200 font-normal">
            A través de una base de datos confiable, mantendremos almacenada de forma privada toda la información que desees usar para gestionar tus productos, pedidos y ventas.
          </p>
        </div>

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
      <h4 className="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-16">
        Personalización
      </h4>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        <div className="lg:col-span-4 flex flex-col gap-6">
          <svg className="w-8 h-8 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>

          <h3 className="text-xl font-bold uppercase tracking-tight text-zinc-100">
            Tu diseño:
          </h3>
          <p className="text-zinc-500 leading-relaxed text-sm max-w-sm">
            Una vez estructuradas las funciones necesarias para tu negocio, procederemos con el diseño para darle identidad a tu sitio web y captar la atención de tus clientes.
          </p>
        </div>

        <div className="lg:col-span-8 relative group overflow-hidden bg-zinc-900 rounded-sm aspect-video">
          <Image
            src="/images/EcomChatClient.png"
            alt="E-commerce Interface"
            fill
            className="object-cover opacity-30 group-hover:opacity-50 transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute bottom-8 left-8">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl">
              PERFIL PERSONALIZADO <br /> MULTI-ESTILO
            </h2>
          </div>
        </div>
      </div>
    </div>
</section>
    </div>
  )
}
