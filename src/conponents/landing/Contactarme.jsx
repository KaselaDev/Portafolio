import React from 'react'
import '../../style/contactame.css'

export default function Proyectos() {
  return (
    <>
      <section className="aboutMe" id="aboutMe">
      <br />
      <h2 className="subTitulo">Contactarme</h2>
      <br />
      <div className="contentContact">
        <a href="https://github.com/KaselaDev" target="_blank" rel="noopener noreferrer" className="contact github">
          <div className="enlace">
            <div className="icono">
              <i className="fa-brands fa-github"></i>
            </div>
            <div className="texto">
              <p>Github</p>
            </div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/santiago-casellas/" target="_blank" rel="noopener noreferrer" className="contact linkedin">
          <div className="enlace">
            <div className="icono">
              <i className="fa-brands fa-linkedin"></i>
            </div>
            <div className="texto">
              <p>LinkedIn</p>
            </div>
          </div>
        </a>
        <a href="https://www.instagram.com/kasela_oficial/" target="_blank" rel="noopener noreferrer" className="contact instagram">
          <div className="enlace">
            <div className="icono">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="texto">
              <p>Instagram</p>
            </div>
          </div>
        </a>
        <a href="mailto:b7c4d6d9c3ded6d0d8d4d6c4d2dbdbd6c485878782f7d0dad6dedb99d4d8da" target="_blank" rel="noopener noreferrer" className="contact gmail">
          <div className="enlace">
            <div className="icono">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="texto">
              <p>Gmail</p>
            </div>
          </div>
        </a>
        <a href="./Santiago_Casellas_CV.pdf" download className="contact cv">
          <div className="enlace">
            <div className="icono">
              <i className="fa-regular fa-file-lines"></i>
            </div>
            <div className="texto">
              <p>Descargar CV</p>
            </div>
          </div>
        </a>
        <a href="https://wa.me/541163073081" target="_blank" rel="noopener noreferrer" className="contact whatsapp">
          <div className="enlace">
            <div className="icono">
              <i className="fa-brands fa-whatsapp"></i>
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
