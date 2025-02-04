import React from 'react'
import { useSelector } from 'react-redux';
import { lengCharge } from '../../utils/funcions';

export default function ProyectoCard({ fecha, titulo, button, leng, img }) {
    const lenguage = useSelector((state) => state.lenguage);
  return (
    <div className="cardProyecto">
        <div className="contentImg">
            <img src={img} alt={titulo} />
        </div>
        <div className="contentInfo">
            <h5 className='fecha'>{fecha}</h5>
            <h3 className='titulo'>{titulo}</h3>
            <div className="lenguajes">
                {leng.map((elemento, index) => (
                <React.Fragment key={index}>{lengCharge(elemento, index, lenguage)}</React.Fragment>
                ))}
            </div>
            <a className='verMas' href={button} target="_blank" rel="noreferrer">
            {lenguage === "es" ? "Ver Proyecto" : "View Project"}
            </a>
        </div>
    </div>
  )
}
