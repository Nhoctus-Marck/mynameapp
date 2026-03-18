import React from 'react'
// Importamos ambos proyectos
import { DolarAppProject } from '../../../components/DolarAppProject'
import { EcommerceAppProject } from '../../../components/EcommerceAppProject'
import { NextProjectNav } from '../../../components/NextProjectNav'

const ProjectsPage = () => {
  return (
    <main className="bg-black scroll-smooth">
      {/* 1. Proyecto Dolar App */}
      <div id="dolar-app">
        <DolarAppProject />
        {/* Este componente hace de puente al siguiente */}
        <NextProjectNav 
          title="E-commerce App" 
          link="#second-project" 
        />
      </div>

      {/* 2. Segundo Proyecto */}
      <div id="second-project">
        <EcommerceAppProject />
      </div>
      {/* Este componente hace de puente al siguiente */}
        <NextProjectNav 
          title="Consultorio-App" 
          link="#third-project" 
        />
    </main>
  )
}

export default ProjectsPage