import React from 'react';
import { useSelector } from "react-redux";
import { buttonCharge, lengCharge } from '@/utils/funcions';

export default function ProyectosLanding({ data }) {
  const lenguage = useSelector((state) => state.lenguage);

  return (
    <div className="project">
      <div className="info">
        <div className="textTop">
          <h5>{data.fecha}</h5>
          <h3>{data.titulo}</h3>
          <p className="desc">{data.desc}</p>
        </div>
        <div className="textButton">
          <div className="btnEventos">
            {data.button.map((elemento, index) => (
              <React.Fragment key={index}>{buttonCharge(elemento, index, lenguage)}</React.Fragment>
            ))}
          </div>
          <div className="lenguajes">
            {data.leng.map((elemento, index) => (
              <React.Fragment key={index}>{lengCharge(elemento, index, lenguage)}</React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="imagen">
        <img 
          src={data.img} 
          alt={lenguage === "es" ? "Error de carga de imagen" : "Image loading error"} 
        />
      </div>
    </div>
  );
}
