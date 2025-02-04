import React from 'react';
import { useSelector } from "react-redux";
import { buttonCharge, lengCharge } from '@/utils/funcions';

export default function ProyectosLanding({ fecha, titulo, desc, button = [], leng = [], img }) {
  const lenguage = useSelector((state) => state.lenguage);

  return (
    <div className="project">
      <div className="info">
        <div className="textTop">
          <h5>{fecha}</h5>
          <h3>{titulo}</h3>
          <p className="desc">{desc}</p>
        </div>
        <div className="textButton">
          <div className="btnEventos">
            {button.map((elemento, index) => (
              <React.Fragment key={index}>{buttonCharge(elemento, index, lenguage)}</React.Fragment>
            ))}
          </div>
          <div className="lenguajes">
            {leng.map((elemento, index) => (
              <React.Fragment key={index}>{lengCharge(elemento, index, lenguage)}</React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="imagen">
        <img 
          src={img} 
          alt={lenguage === "es" ? "Error de carga de imagen" : "Image loading error"} 
        />
      </div>
    </div>
  );
}
