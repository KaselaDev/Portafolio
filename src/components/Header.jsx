import React, { useRef, useState, useEffect } from "react";
import logo from "../img/logoKasela.jpg"
import "../style/header.css";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [btnNavegacion, setBtnNavegacion] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navResponsiveOpcionesRef = useRef();
  const navResponsiveRef = useRef();
  const tituloRef = useRef();
  const btn = useRef();
  const bar1 = useRef();
  const bar2 = useRef();
  const bar3 = useRef();

  const timeAnimacionBtnNavegacion = 250;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Escuchar el evento de redimensionamiento
    window.addEventListener("resize", handleResize);

    // Limpieza del evento
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openNav = () => {
    if (!isLoading) return;

    setIsLoading(false);
    setBtnNavegacion((prev) => !prev);

    if (!btnNavegacion) {
      // Abrir navegación
      bar1.current.style.top = "50%";
      bar3.current.style.top = "50%";
      bar2.current.style.opacity = "0";
      btn.current.style.width = "100%";
      btn.current.style.margin = "0";
      btn.current.style.borderRadius = "2px";

      navResponsiveRef.current.style.width = "300px";
      navResponsiveRef.current.style.backgroundColor = "#857100c0";
      navResponsiveOpcionesRef.current.style.display = "flex";

      (windowWidth < 620) && (tituloRef.current.style.display = "none")

      setTimeout(() => {
        bar1.current.style.transform = "translateY(-50%) rotate(45deg)";
        bar3.current.style.transform = "translateY(-50%) rotate(-45deg)";
        setIsLoading(true);
      }, timeAnimacionBtnNavegacion);
    } else {
      // Cerrar navegación
      btn.current.style.width = "80px";
      bar1.current.style.transform = "translateY(-50%) rotate(0deg)";
      bar3.current.style.transform = "translateY(-50%) rotate(0deg)";
      btn.current.style.margin = "12px";
      btn.current.style.borderRadius = "16px";

      navResponsiveRef.current.style.width = "104px";
      navResponsiveRef.current.style.backgroundColor = "#85710000";
      navResponsiveOpcionesRef.current.style.display = "none";
      
      (windowWidth < 620) && (tituloRef.current.style.display = "flex")

      setTimeout(() => {
        bar1.current.style.top = "25%";
        bar3.current.style.top = "75%";
        bar2.current.style.opacity = "1";
        setIsLoading(true);
      }, timeAnimacionBtnNavegacion);
    }
  };

  return (
    <>
      <header>
        <a href="#Inicio">
          <div className="kasela">
            <div className="icon">
              <img src={logo} alt="Cargando..." />
            </div>
            <div className="titulo" ref={tituloRef}>
              <h1>KaselaDev</h1>
            </div>
          </div>
        </a>
        {windowWidth >= 810 ? (
          <nav>
            <div className="opciones">
              <a href="#Quien-soy">
                <p>¿Quién soy?</p>
              </a>
              <a href="#Proyectos">
                <p>Proyectos</p>
              </a>
              <a href="#Conocimientos">
                <p>Conocimientos</p>
              </a>
              <a href="#Contactame">
                <p>Contactame</p>
              </a>
            </div>
          </nav>
        ) : (
          <div className="navResponsive" ref={navResponsiveRef}>
            <div className="btnNav" ref={btn} onClick={openNav}>
              <div className="bar1" ref={bar1} />
              <div className="bar2" ref={bar2} />
              <div className="bar3" ref={bar3} />
            </div>
            <div className="opciones" ref={navResponsiveOpcionesRef}>
              <a href="#Quien-soy">
                <p>¿Quién soy?</p>
              </a>
              <a href="#Proyectos">
                <p>Proyectos</p>
              </a>
              <a href="#Conocimientos">
                <p>Conocimientos</p>
              </a>
              <a href="#Contactame">
                <p>Contactame</p>
              </a>
            </div>
          </div>
        )}
      </header>
      <div className="separadorHeader" id="Inicio" />
    </>
  );
}
