import React, { useEffect, useState } from 'react';
import '@/style/footer.css'
import Icon from '@/utils/Icon';
import { useSelector } from "react-redux";

const Footer = ({separator=false}) => {
  const [vida, setVida] = useState({ dias: 0, tiempo: '00:00:00' });
  const lenguage = useSelector((state) => state.lenguage);

  useEffect(() => {
    function actualizarTiempo() {
      const fechaPasada = new Date('2024-08-03T08:00:00');
      const fechaActual = new Date();

      const diferencia = fechaActual - fechaPasada;

      const segundosTotales = Math.floor(diferencia / 1000);
      const minutosTotales = Math.floor(segundosTotales / 60);
      const horasTotales = Math.floor(minutosTotales / 60);
      const diasTotales = Math.floor(horasTotales / 24);

      const segundos = segundosTotales % 60;
      const minutos = minutosTotales % 60;
      const horas = horasTotales % 24;

      setVida({
        dias: diasTotales,
        tiempo: `${numerosDoble(horas)}:${numerosDoble(minutos)}:${numerosDoble(segundos)}`
      });
    }

    function numerosDoble(num) {
      return num < 10 ? '0' + num : num;
    }

    actualizarTiempo();
    const intervalo = setInterval(actualizarTiempo, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      {separator && <div className="separator"></div>}
      <footer>
      {
        (window.innerWidth > 600) && (
          <div className="web">
            <h4>kasela.com.ar</h4>
          </div>
        )
      }
      <div className="redes">
        <a href="https://github.com/KaselaDev" target="_blank" rel="noopener noreferrer" className="red1">
          <Icon css="red1" type="brands" icon="faGithub"/>
        </a>
        <a href="https://www.linkedin.com/in/santiago-casellas/" target="_blank" rel="noopener noreferrer" className="red2">
          <Icon css="red2" type="brands" icon="faLinkedin"/>
        </a>
        <a href="https://wa.me/541136013242" target="_blank" rel="noopener noreferrer" className="red3">
          <Icon css="red3" type="brands" icon="faInstagram"/>
        </a>
      </div>
      <div className="vida">
        <div className="texto">
          {lenguage === "es" ? <p>Tiempo <br /> de vida</p> : <p>Life <br /> Time</p>}
        </div>
        <div className="tiempo">
          <p className="vidaDias">Día <span>{vida.dias}</span></p>
          <p className="vidaHora">{vida.tiempo}</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
