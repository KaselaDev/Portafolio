import React from 'react';
import { useSelector } from "react-redux";
import miFoto from '@/img/yo.png'
import '@/style/inicio.css';

export default function Inicio() {
  const lenguage = useSelector((state) => state.lenguage);

  return (
    <>
        <section className="inicio">
            <div className="espaciadorSections" id="Inicio"/>
            <div className="tituloInicio">
                <div className="contenTituloMensaje">
                    <h2>Full-Stack<br />Developer</h2>
                    <h3>Santiago Casellas</h3>
                </div>
            </div>
            <div className="foto">
                <img src={miFoto} alt="Cargando..." />
            </div>
        </section>
        
        <section className="whoMe">
            <div className="espaciadorSections" id="Quien-soy"/>
            <div className="separador"></div>
            <h2 className="subTitulo">
                {lenguage === "es" ? "¿Quién soy?" : "About me"}
            </h2>
            <div className="text">
                {lenguage === "es" ? (
                <>
                    <span>
                    Desarrollador de Aplicaciones Web con 4 años de experiencia en la construcción de soluciones robustas y escalables. ✨
                    </span>
                    <span>
                    Experto en Back-end con tecnologías Express y PHP, un sólido entendimiento de tecnologías de Front-end y gestión de bases de datos. 👨‍💻
                    </span>
                    <span>
                    Apasionado por el desarrollo de aplicaciones de ciclo completo, 😁 la optimización de procesos y la entrega de productos de calidad.
                    </span>
                </>
                ) : (
                <>
                    <span>
                    Web Applications Developer with 4 years of experience building robust and scalable solutions. ✨
                    </span>
                    <span>
                    Back-end expert with technologies like Express and PHP, a solid understanding of Front-end technologies, and database management. 👨‍💻
                    </span>
                    <span>
                    Passionate about full-cycle application development, 😁 process optimization, and delivering high-quality products.
                    </span>
                </>
                )}
            </div>
        </section>
    </> 
  )
}
