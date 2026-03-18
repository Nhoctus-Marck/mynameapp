import React from 'react'

export const Footer = () => {
  return (
    <div>
        <footer id="contacto" className="bg-black text-white px-8 py-12 border-t border-white/5 hover:border-blue-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Logo / Nombre */}
        <div className="text-sm font-bold tracking-[0.3em] uppercase">
          --- Mark-Carbajales ---
        </div>

        {/* Enlaces Sociales Centrales */}
        <div className="flex space-x-12 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
            
          <a href="https://github.com/Nhoctus-Marck" className="hover:text-blue-500 transition-colors duration-300">Github</a>
          <a href="https://linkedin.com/in/marck-carbajales" className="hover:text-blue-500 transition-colors duration-300">Linkedin</a>
          <a href="" className="hover:text-blue-500 transition-colors duration-300">Instagram</a>
        </div>

        {/* Copyright */}
        <div className="text-[10px] uppercase tracking-[0.15em] text-gray-600 font-medium">
          © 2026 
        </div>
        
      </div>
    </footer>
    </div>
  )
}
