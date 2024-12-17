import React from 'react';
import Icon from '../../utils/Icon';

export default function ProyectosLanding({ fecha, titulo, desc, button, leng, img }) {
  const lengCharge = (lenguaje) => {
    switch (lenguaje) {
      case "html":
        return (
          <div key={lenguaje} className="htmlCss">
            <p>HTML&CSS</p>
          </div>
        );
      case "js":
        return (
          <div key={lenguaje} className="js">
            <p>JavaScript</p>
          </div>
        );
      case "php":
        return (
          <div key={lenguaje} className="php">
            <p>PHP</p>
          </div>
        );
      case "sql":
        return (
          <div key={lenguaje} className="sql">
            <p>SQL</p>
          </div>
        );
      case "react":
        return (
          <div key={lenguaje} className="react">
            <p>React</p>
          </div>
        );
      default:
        return null;
    }
  };

  const buttonCharge = (button, index) => {
    let params = {};

    if (typeof button === "object") {
      params = button;
    } else {
      params.name = button;
    }

    switch (params.name) {
      case "dev":
        return (
          <div key={index} className="btn proximamente">
            <Icon icon="faScrewdriverWrench" />
            <p>En desarrollo</p>
          </div>
        );
      case "beta":
        return (
          <div key={index} className="btn beta">
            <Icon icon="faGlobe" />
            <p>Beta</p>
          </div>
        );
      case "github":
        return (
          <a key={index} className="btn github" href={`http://${params.link}`}>
            <Icon type="brands" icon="faGithub" />
            <p>Github</p>
          </a>
        );
      case "link":
        return (
          <a key={index} className="btn link" href={`http://${params.link}`}>
            <Icon icon="faArrowUpRightFromSquare" />
            <p>Ir a la web</p>
          </a>
        );
      case "version":
        return (
          <div key={index} className="btn version">
            <Icon icon="faCodeCommit" />
            <p>{params.version}V</p>
          </div>
        );
      default:
        console.log("botonProject not found");
        return null;
    }
  };

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
            {button.map((elemento, index) => buttonCharge(elemento, index))}
          </div>
          <div className="lenguajes">
            {leng.map((elemento, index) => lengCharge(elemento, index))}
          </div>
        </div>
      </div>
      <div className="imagen">
        {img ? (
          <img src={img} alt="Error de carga" />
        ) : (
          <img src="" alt="" />
        )}
      </div>
    </div>
  );
}
