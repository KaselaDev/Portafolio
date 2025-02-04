import React, { useState, useEffect, useCallback } from "react";
import "@/style/conocimientos.css";
import Icon from "@/utils/Icon";
import motorMaster from "@/img/motorMasterLogo.svg";
import linux from "@/img/linuxLogo.svg";
import bashScript from "@/img/bashScriptLogo.svg";
import mui from "@/img/muiLogo.svg";
import figma from "@/img/figmaLogo.svg";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

// Datos de los conocimientos
const slides = [
  { css: "html", icon: "faHtml5", link: "https://developer.mozilla.org/es/docs/Web/HTML"},
  { css: "css", icon: "faCss", link: "https://developer.mozilla.org/es/docs/Web/CSS"},
  { css: "js", icon: "faSquareJs", link: "https://developer.mozilla.org/es/docs/Web/JavaScript"},
  { css: "mui", img: mui, link: "https://mui.com/"},
  { css: "react", icon: "faReact", link: "https://es.react.dev/"},
  { css: "php", icon: "faPhp", link: "https://php.net"},
  { css: "sql", icon: "faDatabase", typeIcon: "solid", link: "https://www.mysql.com/"},
  { css: "bashScript", img: bashScript, link: "https://www.hostinger.es/tutoriales/bash-script-linux"},
  { css: "git", icon: "faGit", link: "https://git-scm.com/"},
  { css: "figma", img: figma, link: "https://www.figma.com/"},
  { css: "trello", icon: "faTrello", link: "https://trello.com/"},
  { css: "node", icon: "faNode", link: "https://nodejs.org/es"},
  { css: "linux", img: linux, link: "https://www.linux.org/"},
  // { css: "motorMaster", img: motorMaster, link: ""},
];

const Conocimientos = () => {
  const lenguage = useSelector((state) => state.lenguage);
  const [cantSliders, setCantSlider] = useState(getSlidesPerView());

  function getSlidesPerView() {
    if (window.innerWidth >= 1500) return 7;
    if (window.innerWidth >= 1200) return 6;
    if (window.innerWidth >= 900) return 5;
    if (window.innerWidth >= 750) return 4;
    if (window.innerWidth >= 600) return 3;
    return 2;
  }

  const handleResize = useCallback(() => {
    setCantSlider(getSlidesPerView());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <section className="stats">
      <div className="espaciadorSections" id="Conocimientos" />
      <h2 className="subTitulo">
        {lenguage === "es" ? "Conocimientos / Herramientas" : "Knowledge / Tools"}
      </h2>
      <div className="contentStats">
        <div className="statsContainer">
          <div className="boxs">
            <Swiper
              slidesPerView={cantSliders}
              spaceBetween={10}
              loop={true}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={3000}
              allowTouchMove={true}
              modules={[Autoplay, Navigation]}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <a href={slide.link} target="_blank" className={`box Icon${slide.css}`} title="Ir a la pagina oficial">
                    {slide.img ? (
                      <img src={slide.img} alt={`${slide.css} logo`} />
                    ) : (
                      <Icon type={slide.typeIcon ? slide.typeIcon : "brands"} icon={slide.icon} />
                    )}
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conocimientos;