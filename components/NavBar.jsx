
import Link from 'next/link';

export const NavBar = () => {
  return (
    <div>
        <nav className="flex items-center justify-between px-8 py-4 bg-[#121212] text-white">
      {/* Logo / Título */}
      <div className="text-xl font-bold tracking-tighter">
        FULL STACK DEVELOPER
      </div>

      {/* Enlaces Centrales */}
      <div className="flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-gray-400">
        <Link href="/" className="hover:border-b-2 hover:text-white transition-colors">
          Home
        </Link>
        <Link href="/projects" className="hover:border-b-2 hover:text-white transition-colors">
          Proyectos
        </Link>
        <Link href="/about" className="hover:border-b-2 hover:text-white transition-colors">
          Sobre mi
        </Link>
      </div>

      {/* Botón con Degradado */}
      <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-black text-xs font-bold py-2 px-6 rounded-md hover:opacity-90 transition-opacity uppercase tracking-wider">
        Mis Contactos
      </button>
    </nav>
    </div>
  )
}
