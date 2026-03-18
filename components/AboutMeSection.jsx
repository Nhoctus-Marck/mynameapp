import React from "react";
import Link from "next/link";

export const AboutMeSection = () => {
  return (
    <div>
      <section className="bg-black text-zinc-400 p-8 lg:p-20 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Columna Izquierda: Bio */}
          <div>
            <h3 className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-12 font-medium">
              Professional Bio
            </h3>
            <div className="space-y-8 text-lg lg:text-xl leading-relaxed max-w-xl">
              <p>
                Apasionado por la tecnología desde hace más de una década. Mi
                viaje empezó en las aulas de ingeniería y, desde entonces, no he
                parado de construir.
                <span className="text-white"> Con mis años en el mundo IT</span>,
                he evolucionado desde los fundamentos del software hasta dominar
                el ecosistema Full Stack, complementando mi formación con
                bootcamps intensivos y aprendizaje continuo.
              </p>
              <p>
                Hoy, mi caja de herramientas no solo incluye lenguajes y
                frameworks, sino también{" "}
                <span className="text-white">IA aplicada al desarrollo</span>,
                para optimizar flujos de trabajo y crear software de alto impacto.
              </p>
            </div>
            <Link
              href="/fullbio"
              className="group mt-12 inline-flex items-center gap-2 text-white text-xs tracking-widest uppercase font-bold hover:text-blue-500 transition-colors border-b-2 border-white hover:border-blue-500 pb-1"
            >
              Read Full Journey
              <span className="text-lg group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          {/* Columna Derecha: Skills & Tools */}
          <div>
            <h3 className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-12 font-medium">
              Skills & Tools
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Categoría Individual */}
              {[
                {
                  title: "Core Tech",
                  skills: ["TypeScript", "Tailwind CSS", "Next.js"],
                },
                {
                  title: "Design",
                  skills: ["Figma Systems", "Stitch", "Type Design"],
                },
                {
                  title: "Data Base",
                  skills: ["Supabase", "MongoDb", "PostgreSQL"],
                },
                { title: "Deployment", skills: ["Vercel", "Docker"] },
              ].map((cat, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-sm"
                >
                  <h4 className="text-[10px] tracking-[0.2em] uppercase text-zinc-600 mb-4 font-bold">
                    {cat.title}
                  </h4>
                  <ul className="space-y-2">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-zinc-100 text-sm"
                      >
                        <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
