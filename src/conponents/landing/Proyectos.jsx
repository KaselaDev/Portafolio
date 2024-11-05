import ProyectosLanding from '../cards/ProyectosLanding';
import '../../style/proyectos.css';

export default function Proyectos() {

  return (
    
    <>
    <section className="projects" id="projects">
      <h2 className="subTitulo">Proyectos</h2>
      <ProyectosLanding
        fecha="04 ago 2024"
        titulo="Web Gestion"
        desc="Web Gestión es un sistema diseñado para facilitar y mejorar el manejo de tu negocio, proporcionando herramientas que simplifican la administración y optimizan tus operaciones diarias."
        button={["beta","prox"]}
        leng={["html","js","php","sql"]}
        img="../img/project3.png"
      />
      {/* <div className="project">
        <div className="info">
          <h5>04 ago 2024</h5>
          <h3>Web Gestion</h3>
          <p className="desc">
            Web Gestión es un sistema diseñado para facilitar y mejorar el manejo de tu negocio, proporcionando herramientas que simplifican la administración y optimizan tus operaciones diarias.
          </p>
          <div className="btnEventos">
            <div className="proximamente">
              <p><i className="fa-solid fa-screwdriver-wrench"></i> Proximamente...</p>
            </div>
          </div>
          <div className="lenguajes">
            <div className="htmlCss">
              <p>HTML&CSS</p>
            </div>
            <div className="js">
              <p>JavaScript</p>
            </div>
            <div className="php">
              <p>PHP</p>
            </div>
            <div className="sql">
              <p>MySQL</p>
            </div>
          </div>
        </div>
        <div className="imagen">
          <img src={project1Image} alt="Cargando..." />
        </div>
      </div>
      
      <div className="project">
        <div className="info">
          <h5>04 ago 2024</h5>
          <h3>Portafolio</h3>
          <p className="desc">
            He creado un portafolio web para mostrar mis habilidades y proyectos en desarrollo web. Incluye secciones detalladas sobre mi experiencia, trabajos realizados y objetivos profesionales.
          </p>
          <div className="btnEventos">
            <a href="https://www.kasela.com.ar" className="visitar" target="_blank" rel="noopener noreferrer">
              <p><i className="fa-solid fa-up-right-from-square"></i> Visitar</p>
            </a>
            <div className="beta">
              <p><i className="fa-solid fa-globe"></i> Beta</p>
            </div>
            <a href="https://github.com/KaselaDev/Portafolio" className="github" target="_blank" rel="noopener noreferrer">
              <p><i className="fa-brands fa-github"></i> Repositorio</p>
            </a>
          </div>
          <div className="lenguajes">
            <div className="htmlCss">
              <p>HTML&CSS</p>
            </div>
            <div className="js">
              <p>JavaScript</p>
            </div>
          </div>
        </div>
        <div className="imagen">
          <img src={project2Image} alt="Cargando..." />
        </div>
      </div>
      
      <div className="project">
        <div className="info">
          <h5>04 ago 2024</h5>
          <h3>Acea Restauraciones</h3>
          <p className="desc">
            Desarrollé una landing page personalizada para 'Acea Restauraciones', diseñada específicamente para ayudar a publicitar y promover su emprendimiento. Esta página está optimizada para captar la atención de los clientes potenciales, destacando los servicios ofrecidos y facilitando la conversión de visitantes en clientes.
          </p>
          <div className="btnEventos">
            <div className="proximamente">
              <p><i className="fa-solid fa-screwdriver-wrench"></i> Proximamente...</p>
            </div>
          </div>
          <div className="lenguajes">
            <div className="htmlCss">
              <p>HTML&CSS</p>
            </div>
            <div className="js">
              <p>JavaScript</p>
            </div>
          </div>
        </div>
        <div className="imagen">
          <img src={project3Image} alt="Cargando..." />
        </div> 
      </div>*/}
    </section>
    </>
  )
}
