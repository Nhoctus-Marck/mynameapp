import React from 'react'
// Importamos ambos proyectos
import { DolarAppProject } from '../../../components/DolarAppProject'
import { EcommerceAppProject } from '../../../components/EcommerceAppProject'
import { NextProjectNav } from '../../../components/NextProjectNav'
import { MyConsultApp } from '../../../components/MyConsultApp'
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
          title="Mi-Consultorio-App" 
          link="#third-project" 
        />
      {/* 3. T Proyecto */}
      <div id="second-project">
        <MyConsultApp/>
      </div>
    </main>
  )
}

export default ProjectsPage