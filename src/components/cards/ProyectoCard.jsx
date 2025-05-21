import React from 'react'
import { useSelector } from 'react-redux';
import { lengCharge } from '@/utils/funcions';
import Icon from '@/utils/Icon';

export default function ProyectoCard({ proyecto }) {
    const lenguage = useSelector((state) => state.lenguage);

    const truncate = (text, maxLength = 300) =>
        text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="proyectoCard">
      <div className="info">
        <span>
          <span>{proyecto.fecha}</span>
          <h3>{proyecto.titulo}</h3>
          <p>{truncate(proyecto.desc)}</p>
        </span>
        <div className='Spacer' />
        <span className="tags">
          {proyecto.tag.map((tag, index) => (
            index === 0 ? (<>{tag}</>) : (<> | {tag}</>)
          ))}
        </span>
        <div className="buttons">
          {/* <button>
            {lenguage === "es"
              ? "Explorar proyecto"
              : "Explore project"}
          </button> */}
          <div className="version">
            <Icon icon="faCodeCommit" />
            <strong> {proyecto.version}</strong>
          </div>
        </div>
      </div>
      <div className="img">
        <img
          src={proyecto.img}
          alt={proyecto.titulo}
        />
      </div>
    </div>
  )
}
