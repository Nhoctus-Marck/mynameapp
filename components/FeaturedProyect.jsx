import React from "react";

export const FeaturedProyect = () => {
  return (
    <div>
      <section className="bg-black text-white px-8 py-20 font-sans">
        {/* Encabezado de la sección */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">
              Trabajos Seleccionados
            </span>
            <h2 className="text-4xl font-medium">Proyectos Destacados</h2>
          </div>
          <a
            href="#"
            className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
          >
            View All Projects →
          </a>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Proyecto 1: Nexus Capital (Ancho completo) */}
          <div className="md:col-span-2 group cursor-pointer">
            <div className="bg-[#121212] rounded-2xl p-10 h-[400px] flex flex-col justify-between overflow-hidden border border-white/5 hover:border-white/20 transition-all">
              <div>
                <span className="text-xs text-blue-300 uppercase tracking-widest">
                  DolarApp / 2026
                </span>
                <h3 className="text-3xl mt-2 font-semibold">
                  Buscas una manera rapida de hacer tus cambios entre USD y ARS$
                  ?
                </h3>
                <br />
                <div className="  grayscale hover:grayscale-0 transition-all duration-700">
                  <div className=" bottom-0 text-6xl  font-bold italic">
                    <a
                      href="https://dolar-app-xi.vercel.app/"
                      className="text-blue-500"
                    >
                      Dolar-App
                    </a>
                  </div>
                </div>
                <br />
                <br />
                <h3 className="text-2xl mt-2 font-semibold">
                  Te brinda la herramienta de convercion con las ultimas
                  actualizaciones a tiempo real del valor de cada dolar ,para
                  que no pierdas un solo centabo con una ayudita extra para que
                  sumes tus calculos al monto que ya tienes.
                </h3>
              </div>
              {/* Espacio para imagen o preview */}
              <div className="w-full h-48 bg-gradient-to-t from-zinc-900 to-transparent rounded-xl mt-4 self-center transform group-hover:scale-105 transition-transform duration-500"></div>
            </div>
          </div>

          {/* Proyecto 2: Aura Intelligence */}
          <div className="group cursor-pointer">
            <div className="bg-[#121212] rounded-2xl p-10 h-[500px] flex flex-col justify-between border border-white/5 hover:border-white/20 transition-all">
              <div>
                <span className="text-xs text-blue-300 uppercase tracking-widest">
                  Consultorio Web Odontologia / 2026
                </span>
                <h3 className="text-2xl mt-2 font-semibold"></h3>
              </div>
              <div className="flex justify-center items-center h-full">
                {/* Simulación del icono AI central */}
                <div className="w-24 h-24 rounded-2xl border animate-pulse border-white/10 flex items-center justify-center text-sm font-bold text-blue-500">
                  Working
                </div>
              </div>
            </div>
          </div>

          {/* Proyecto 3: Veloce Atelier */}
          <div className="group cursor-pointer">
            <div className="bg-[#121212] rounded-2xl p-10 h-[500px] flex flex-col justify-between border border-white/5 hover:border-white/20 transition-all overflow-hidden">
              <div>
                <span className="text-xs text-blue-300 uppercase tracking-widest">
                  E-commerce / 2026
                </span>
                <h3 className="text-2xl mt-2 font-semibold">E-commerce</h3>
                <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-xs">
                  Te enseño las funcionalidades que puede tener tu E-commerce
                  atravez de mi app:
                </p>
                <br></br>
                <p>-Login </p>
                <p>-Tu Dashboard </p>
                <p>-Client Dashboard</p>
                <p>-Seccion Ordenes</p>
                <p>-Carrito de compras</p>
                <p>-Seccion de Chat</p>
                <p>-Buscador de productos</p>

                <h3 className="text-2xl mt-8 font-semibold">
                  Quieres echarle un vistaso?{" "}
                  <a
                    href="#contacto"
                    className="text-blue-500 hover:text-blue-400 underline underline-offset-8 decoration-1 transition-all cursor-pointer"
                  >
                    Contáctame
                  </a>{" "}
                  y te daré los detalles.
                </h3>
              </div>
              {/* Simulación de la imagen del auto */}
              <div className="relative h-40 mt-6 bottom-12 translate-x-10 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="absolute right-0 text-6xl  font-bold italic">
                  <a
                    href="https://my-ecom-base.vercel.app/"
                    className="text-blue-500"
                  >
                    E-Commerce
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
