import ProyectosLanding from '../cards/ProyectosLanding';
import '../../style/proyectos.css';
import Icon from '../../utils/Icon';

export default function Proyectos() {
  return (
    <>
      <section className="projects" id="Proyectos">
        <h2 className="subTitulo">Proyectos</h2>
        <ProyectosLanding
          fecha="04 ago 2024"
          titulo="Eva DB Hospital Manager"
          desc="Eva DB es una Aplicación web para la zona de terapia intensiva del hospital inter zonal Eva Peron (ex Castex) para ayudar en su eficiencia, accesibilidad y reducción de papeles, es una aplicación cerrada solo para los residentes del hospital"
          button={[{ name: "version", version: "1.0" }, "dev"]}
          leng={["html", "js", "php", "sql"]}
          img="/src/img/EvaDB.png"
        />
        <ProyectosLanding
          fecha="19 Nov 2024"
          titulo="Huerta en Red"
          desc="Es un proyecto de 2 semanas de hacer una red social para que los usuarios publiquen el estado de sus plantas, la idea era presentarlo al municipio y que jubilados y personas que estén en casa aburrida puedan algo que hacer y además investigas si cambiando la zona puede cambiar la cosecha"
          button={[
            "beta",
            "dev",
            { name: "github", link: "github.com/KaselaDev" },
            { name: "link", link: "huertaenred.com.ar" },
          ]}
          leng={["html", "js", "php", "sql"]}
          img="/src/img/huertaenred.png"
        />
        <ProyectosLanding
          fecha="10 Dic 2024"
          titulo="Web Gestion"
          desc="Web Gestión es un sistema diseñado para facilitar y mejorar el manejo de tu negocio, proporcionando herramientas que simplifican la administración y optimizan tus operaciones diarias."
          button={[
            { name: "version", version: "0.6" },
            "dev",
            { name: "github", link: "github.com/KaselaDev" },
            { name: "link", link: "webgestion.kasela.com.ar" },
          ]}
          leng={["react", "php", "sql"]}
          img="/src/img/project1.webp"
        />
        <br />
        <br />
        {/* <div className="verMas">
          <h4>Ver mas proyectos</h4>
          <div className="arrows">
            <Icon icon="faChevronDown" />
            <Icon icon="faChevronDown" />
            <Icon icon="faChevronDown" />
          </div>
        </div> */}
      </section>
    </>
  );
}
