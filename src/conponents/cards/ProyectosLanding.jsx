import React from 'react';
import Icon from '../Icon';

export default function ProyectosLanding({ fecha, titulo, desc, button, leng, img }) {

  const lengCharge = (lenguaje) => {
    switch (lenguaje) {
      case "html":
        return (
          <div className="htmlCss">
            <p>HTML&CSS</p>
          </div>
        );
      case "js":
        return (
          <div className="js">
            <p>JavaScript</p>
          </div>
        );
      case "php":
        return (
          <div className="php">
            <p>PHP</p>
          </div>
        );
      case "sql":
        return (
          <div className="sql">
            <p>SQL</p>
          </div>
        );
      default:
        return null;
    }
  };

  const buttonCharge = (button) => {

    let params = {}

    if (typeof button !== "object") {
      params.name = button
    }

    switch (params.name) {
      case "prox":
        return (
          <div className="proximamente">
            <Icon icon="faScrewdriverWrench" />
            <p>Proximamente</p>
          </div>
        );
      case "beta":
        return (
          <div className="beta">
            <Icon icon="faGlobe" />
            <p>Beta</p>
          </div>
        );
      case "github":
        return (
          <a className="github" href=''>
            <Icon type="brands" icon="faGithub" />
            <p>Github</p>
          </a>
        );
      default:
        return null;
    }
  }
  console.log(img);
  
  return (
    <div className="project">
      <div className="info">
        <h5>{fecha}</h5>
        <h3>{titulo}</h3>
        <p className="desc">{desc}</p>
        <div className="btnEventos">
          {button.map((elemento) => buttonCharge(elemento))}
        </div>
        <div className="lenguajes">
          {leng.map((elemento) => lengCharge(elemento))}
        </div>
      </div>
      <div className="imagen">
        {(img)?(
          <img src={img} alt="Cargando..." />
        ):(
          <img src="" alt="" />
        )}
      </div>
    </div>
  );
}
