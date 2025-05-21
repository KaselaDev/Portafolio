import React from "react";
import ProyectosLanding from "@/components/cards/ProyectosLanding";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Icon from "@/utils/Icon";
import Button from "@mui/material/Button";

import { proyectosData } from "@/data/proyectos";

import "@/style/proyectos.css";

export default function Proyectos() {
  const lenguage = useSelector((state) => state.lenguage);
  const proyectoData = lenguage === "es" ? proyectosData.es : proyectosData.us;

  return (
    <>
      <section className="projects">
        <div className="espaciadorSections" id="Proyectos" />
        <h2 className="subTitulo">
          {lenguage === "es" ? "Proyectos" : "Projects"}
        </h2>
        {proyectoData.slice(0, 3).map((proyecto, index) => {
          return (
            <ProyectosLanding
              key={index}
              data={proyecto}
            />
          );
        })}
        <br />
        <br />
        <Link
          className="verMas"
          to={lenguage === "es" ? "/es/Proyectos" : "/us/Projects"}
        >
          <span /><span /><span /><span />
          {lenguage === "es" ? "Explorar Proyectos" : "View more projects"}
        </Link>
      </section>
    </>
  );
}
