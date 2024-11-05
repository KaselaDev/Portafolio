import React from 'react';
import '../../style/conocimientos.css';

export default function Proyectos() {
  return (
    <section className="stats" id="stats">
      <h2 className="subTitulo">Conocimientos</h2>
      <br />
      <div className="contentStats">
        <div className="front-end stat">
          <div className="titulo">
            <h3>Front-end</h3>
          </div>
          <p className="html"><i className="fa-brands fa-html5"></i> <span>HTML</span></p>
          <p className="css"><i className="fa-brands fa-css3-alt"></i> <span>CSS</span></p>
          <p className="js"><i className="fa-brands fa-square-js"></i> <span>JavaScript</span></p>
        </div>
        <div className="back-end stat">
          <div className="titulo">
            <h3>Back-end</h3>
          </div>
          <p className="php"><i className="fa-brands fa-php"></i> <span>PHP</span></p>
          <p className="sql"><i className="fa-solid fa-database"></i> <span>SQL</span></p>
          <p className="bash"><i className="fa-solid fa-cube"></i> <span>Bash Script</span></p>
        </div>
        <div className="otros stat">
          <div className="titulo">
            <h3>Otros</h3>
          </div>
          <p className="git"><i className="fa-brands fa-git-alt"></i> <span>Git</span></p>
          <p className="figma"><i className="fa-brands fa-figma"></i> <span>Figma</span></p>
          <p className="trello"><i className="fa-brands fa-trello"></i> <span>Trello</span></p>
        </div>
      </div>
    </section>
  );
};

