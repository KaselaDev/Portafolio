import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Luces from '@/components/Luces'
import Person from '@/components/Person'
import { projectsDataUS, proyectosDataES } from '@/data/proyectos';
import { useSelector } from "react-redux";
import ProyectoCard from '@/components/cards/ProyectoCard'
import '@/components/Proyectos/styles/proyectos.css'
import { StarryBackground } from '@/utils/funcions'

export default function Proyectos() {
  const lenguage = useSelector((state) => state.lenguage)
  const proyectosData = lenguage === "es" ? proyectosDataES : projectsDataUS;

  const selectProyectos = () => {
      const array = proyectosData
        .sort((a, b) => a.top - b.top);
    
      return array
    };

  return (
    <>
      <div className="Content">
      <div className="luces">
        <StarryBackground />
        <div className="luz1"><span></span></div>
        <div className="luz2"><span></span></div>
      </div>
        <Header />
        <div className="contentProyectos">
            <h2 className='titulo'>{lenguage === "es" ? "Proyectos" : "Projects"}</h2>
            <div className="contentProjects">
            {
            selectProyectos().map((proyecto, index) => {
              return (
                <ProyectoCard 
                  key={index}
                  fecha={proyecto.fecha}
                  titulo={proyecto.titulo}
                  button={proyecto.button}
                  leng={proyecto.leng}
                  img={proyecto.img}
                />
              )
            })
          }
            </div>
        </div>
        <Footer />
        <Person />
      </div>
    </>
  )
}
