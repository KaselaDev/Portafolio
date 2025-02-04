import React from 'react'
import Icon from '@/utils/Icon'
import { useSelector } from "react-redux";
import CVFileES from '@/data/Santiago_Casellas_CV_Español.pdf'
import CVFileEN from '@/data/Santiago_Casellas_CV_English.pdf'
import '@/style/contactame.css'

export default function Proyectos() {
  const lenguage = useSelector((state) => state.lenguage);

  return (
    <>
      <section className="aboutMe" id="Contactame">
      <br />
      <h2 className="subTitulo">{lenguage === "es" ? "Contactarme" : "Contact me"}</h2>
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
        <a href={lenguage === "es" ? CVFileES : CVFileEN} download className="contact cv">
          <div className="enlace">
            <div className="icono">
              <Icon type="solid" icon="faFile"/>
            </div>
            <div className="texto">
              <p>{lenguage === "es" ? "Descargar CV" : "Download CV"}</p>
            </div>
          </div>
        </a>
      </div>
    </section>
    </>
  )
}
