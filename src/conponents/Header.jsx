import React from 'react'
import { Link } from 'react-router-dom';
import '../style/header.css'

export default function Header() {
    const fotoKasela = "https://kasela.com.ar/imagenes/logoKasela.jpg";
  return (
    <>
        <header>
            <Link to="/Landing/Inicio">
                <div className="kasela">
                    <div className="icon">
                        <img src={fotoKasela} alt="Cargando..." />
                    </div>
                    <div className="titulo">
                        <h1>Kasela</h1>
                    </div>
                </div>
            </Link>
            <nav>
                <div className="bar" id="bar">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className="opciones">
                    <Link to="/inicio"> <p>¿Quién soy?</p> </Link>
                    <Link to="/proyectos"> <p>Proyectos</p> </Link>
                    <Link to="/conocimientos"> <p>Conocimientos</p> </Link>
                    <Link to="/contactame"> <p>Contactame</p> </Link>
                </div>
            </nav>
        </header>
        <div className="separadorHeader"></div>
    </>
  )
}
