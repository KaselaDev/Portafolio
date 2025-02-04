import ProyectosLanding from '@/components/cards/ProyectosLanding';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import React from 'react';
import Icon from '@/utils/Icon';

import { projectsDataUS, proyectosDataES } from '@/data/proyectos';

import '@/style/proyectos.css';

export default function Proyectos() {
  const lenguage = useSelector((state) => state.lenguage)
  const proyectosData = lenguage === "es" ? proyectosDataES : projectsDataUS;

  const selectProyectos = () => {
    const array = proyectosData
      .filter((proyecto) => proyecto.top >= 1 && proyecto.top <= 3)
      .sort((a, b) => a.top - b.top);
  
    return array
  };

  return (
    <>
      <section className="projects">
        <div className="espaciadorSections" id="Proyectos"/>
        <h2 className="subTitulo">{lenguage === "es" ? "Proyectos" : "Projects"}</h2>
        {
          selectProyectos().map((proyecto, index) => {
            return (
              <ProyectosLanding 
                key={index}
                fecha={proyecto.fecha}
                titulo={proyecto.titulo}
                desc={proyecto.desc}
                button={proyecto.button}
                leng={proyecto.leng}
                img={proyecto.img}
              />
            )
          })
        }
        <br />
        <br />
        {/* <Link className="verMas" to={lenguage === "es" ? "/es/Proyectos" : "/us/Projects"}>
          <h4>Ver mas proyectos</h4>
          <div className="arrows">
            <Icon icon="faChevronDown" />
            <Icon icon="faChevronDown" />
            <Icon icon="faChevronDown" />
          </div>
        </Link> */}
      </section>
    </>
  );
}
