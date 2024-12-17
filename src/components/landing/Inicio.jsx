import React from 'react';
import miFoto from '../../img/yo.png'
import '../../style/inicio.css';

export default function Inicio() {

  return (
    <>
        <section className="inicio" id="Inicio">
            <div className="tituloInicio">
                <div className="contenTituloMensaje">
                    <h2>Back-end<br />Developer</h2>
                    <h3>Santiago Casellas</h3>
                </div>
            </div>
            <div className="foto">
                <img src={miFoto} alt="Cargando..." />
            </div>
        </section>
        
        <div className="whoMe" id='Quien-soy'>
        <div className="separador"></div>
            <h2 className="subTitulo">¿Quién soy?</h2>
            <div className="text">
                <span>Desarrollador de Aplicaciones Web con 4 años de experiencia en la construcción de soluciones robustas y escalables. ✨
                </span><span>
                Experto en Back-end con tecnologías Express y PHP y un sólido entendimiento de tecnologías de Front-end y gestión de bases de datos. 👨‍💻
                </span><span>
                Apasionado por el desarrollo de aplicaciones de ciclo completo, 😁 la optimización de procesos y la entrega de productos de calidad.</span>
            </div>
        </div>
    </> 
  )
}
