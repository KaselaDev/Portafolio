import React from 'react';
import '../../style/inicio.css';

export default function Inicio() {

  return (
    <>
        <section className="inicio" id="inicio">
            <div className="tituloInicio">
                <div className="contenTituloMensaje">
                    <h2>Back-end<br />Developer</h2>
                    <h3>Santiago Casellas</h3>
                </div>
            </div>
            <div className="foto">
                <img src="https://kasela.com.ar/imagenes/yo.jpg" alt="Cargando..." />
            </div>
        </section>
        <div className="whoMe">
        <div className="separador"></div>
            <h2 className="subTitulo">¿Quién soy?</h2>
            <p>Soy un programador argentino apasionado por la informática con conocimientos full-stack pero especializado en el back-end nacido en octubre del 2005</p>
        </div>
    </> 
  )
}
