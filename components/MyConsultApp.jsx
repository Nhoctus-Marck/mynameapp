import React from "react";
import Image from "next/image";
import Link from 'next/link';

export const MyConsultApp = () => {
  return (
    <div>
      <section className="relative w-full h-[70vh] md:h-screen overflow-hidden bg-black group">
        <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out">
          <Image
            src="/images/E.R.M.I.S2.png"
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
        -2026
      </div>

      {/* Título Principal */}
      <div>
        <Link href="https://myconsultpp.vercel.app/" className="text-white text-7xl md:text-[140px] leading-[0.8] font-black uppercase tracking-tighter transition-colors duration-500 ease-in-out cursor-pointer pointer-events-auto hover:text-blue-600 active:scale-95">
          Mi-Consultorio <br />
          -APP
        </Link>
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
      </section>
    </div>
  );
};
