import React from "react";
import "@/style/conocimientos.css";
import Icon from "@/utils/Icon"
import motorMaster from "@/img/motorMasterLogo.svg"
import { useSelector } from "react-redux";

const Conocimientos = () => {
  const lenguage = useSelector((state) => state.lenguage);

  return (
    <section className="stats">
      <div className="espaciadorSections" id="Conocimientos"/>
      <h2 className="subTitulo">{lenguage === "ES" ? "Conocimientos" : "Knowledge"}</h2>
      <br />
      <div className="contentStats">
        {/* Front-end */}
        <div className="stat">
          <div className="titulo">
            <h3>Front-end</h3>
          </div>
          <div className="html tag">
            <Icon type="brands" icon="faHtml5" />
            <h4>HTML</h4>
          </div>
          <div className="css tag">
            <Icon type="brands" icon="faCss3Alt" />
            <h4>CSS</h4>
          </div>
          <div className="js tag">
            <Icon type="brands" icon="faSquareJs" />
            <h4>JavaScript</h4>
          </div>
        </div>

        {/* Back-end */}
        <div className="stat">
          <div className="titulo">
            <h3>Back-end</h3>
          </div>
          <div className="php tag">
            <Icon type="brands" icon="faPhp" />
            <h4>PHP</h4>
          </div>
          <div className="sql tag">
            <Icon type="solid" icon="faDatabase" />
            <h4>SQL</h4>
          </div>
          <div className="bash tag">
            <Icon type="solid" icon="faCube" />
            <h4>Bash Script</h4>
          </div>
        </div>

        {/* Framework */}
        <div className="stat">
          <div className="titulo">
            <h3>Framework</h3>
          </div>
          <div className="react tag">
            <Icon type="brands" icon="faReact" />
            <h4>React</h4>
          </div>
          <div className="motorMaster tag">
            <img className="iconEspecial" src={motorMaster} alt="MotorMaster.php" />
            <h4>MotorMaster</h4>
          </div>
        </div>

        {/* Otros */}
        <div className="stat">
          <div className="titulo">
            <h3>{lenguage === "ES" ? "Otros" : "Others"}</h3>
          </div>
          <div className="git tag">
            <Icon type="brands" icon="faGitAlt" />
            <h4>Git</h4>
          </div>
          <div className="figma tag">
            <Icon type="brands" icon="faFigma" />
            <h4>Figma</h4>
          </div>
          <div className="trello tag">
            <Icon type="brands" icon="faTrello" />
            <h4>Trello</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conocimientos;