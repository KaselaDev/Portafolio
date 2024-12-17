import React from 'react'
import '../../style/contactame.css'
import Icon from '../../utils/Icon'

export default function Proyectos() {
  return (
    <>
      <section className="aboutMe" id="Contactame">
      <br />
      <h2 className="subTitulo">Contactarme</h2>
      <br />
      <div className="contentContact">
        <a href="https://github.com/KaselaDev" target="_blank" rel="noopener noreferrer" className="contact github">
          <div className="enlace">
            <div className="icono">
              <Icon type="brands" icon="faGithub"/>
            </div>
            <div className="texto">
              <p>Github</p>
            </div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/santiago-casellas/" target="_blank" rel="noopener noreferrer" className="contact linkedin">
          <div className="enlace">
            <div className="icono">
              <Icon type="brands" icon="faLinkedin"/>
            </div>
            <div className="texto">
              <p>LinkedIn</p>
            </div>
          </div>
        </a>
        <a href="https://www.instagram.com/kasela.php/" target="_blank" rel="noopener noreferrer" className="contact instagram">
          <div className="enlace">
            <div className="icono">
            <Icon type="brands" icon="faInstagram"/>
            </div>
            <div className="texto">
              <p>Instagram</p>
            </div>
          </div>
        </a>
        <a href="mailto:santiagocasellas2005@gmail.com" target="_blank" rel="noopener noreferrer" className="contact gmail">
          <div className="enlace">
            <div className="icono">
              <Icon type="solid" icon="faEnvelope"/>
            </div>
            <div className="texto">
              <p>Gmail</p>
            </div>
          </div>
        </a>
        <a href="/src/Santiago_Casellas_CV.pdf" download className="contact cv">
          <div className="enlace">
            <div className="icono">
              <Icon type="solid" icon="faFile"/>
            </div>
            <div className="texto">
              <p>Descargar CV</p>
            </div>
          </div>
        </a>
        <a href="https://wa.me/541136013242" target="_blank" rel="noopener noreferrer" className="contact whatsapp">
          <div className="enlace">
            <div className="icono">
              <Icon type="brands" icon="faWhatsapp"/>
            </div>
            <div className="texto">
              <p>Whatsapp</p>
            </div>
          </div>
        </a>
      </div>
    </section>
    </>
  )
}
