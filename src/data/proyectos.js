import evaDBImg from '@/img/EvaDB.png';
import huertaEnRedImg from '@/img/huertaenred.png';
import webGestionImg from '@/img/webGestion.png';

export const proyectosDataES = [
  {
    top: 1,
    fecha: "04 ago 2024",
    titulo: "Eva DB Hospital Manager",
    desc: "Eva DB es una Aplicación web para la zona de terapia intensiva del hospital inter zonal Eva Peron (ex Castex) para ayudar en su eficiencia, accesibilidad y reducción de papeles, es una aplicación cerrada solo para los residentes del hospital",
    button: [
      { name: "version", version: "1.0" },
    ],
    leng: ["html", "js", "php", "sql"],
    img: evaDBImg,
  },
  {
    top: 2,
    fecha: "19 Nov 2024",
    titulo: "Huerta en Red",
    desc: "Es un proyecto de 2 semanas de hacer una red social para que los usuarios publiquen el estado de sus plantas, la idea era presentarlo al municipio y que jubilados y personas que estén en casa aburrida puedan algo que hacer y además investigas si cambiando la zona puede cambiar la cosecha",
    button: [
      "beta",
      "dev",
      { name: "link", link: "huertaenred.com.ar" },
    ],
    leng: ["html", "js", "php", "sql"],
    img: huertaEnRedImg,
  },
  {
    top: 3,
    fecha: "10 Dic 2024",
    titulo: "Web Gestion",
    desc: "Web Gestión es un sistema diseñado para facilitar y mejorar el manejo de tu negocio, proporcionando herramientas que simplifican la administración y optimizan tus operaciones diarias.",
    button: [
      { name: "version", version: "0.6" },
      "dev",
      { name: "link", link: "webgestion.kasela.com.ar" },
      { name: "github", link: "github.com/KaselaDev/webGestion" },
    ],
    leng: ["react", "php", "sql"],
    img: webGestionImg,
  },
];

export const projectsDataUS = [
  {
    top: 1,
    fecha: "04 Aug 2024",
    titulo: "Eva DB Hospital Manager",
    desc: "Eva DB is a web application for the intensive care unit of the Eva Peron Interzonal Hospital (formerly Castex), designed to improve efficiency, accessibility, and reduce paperwork. It is a private application exclusively for hospital residents.",
    button: [
      { name: "version", version: "1.0" },
    ],
    leng: ["html", "js", "php", "sql"],
    img: evaDBImg,
  },
  {
    top: 2,
    fecha: "19 Nov 2024",
    titulo: "Huerta en Red",
    desc: "This was a two-week project to create a social network where users can post updates about their plants. The idea was to present it to the municipality, encouraging retirees and individuals looking for hobbies to participate, and exploring how changing locations might impact harvests.",
    button: [
      "beta",
      "dev",
      { name: "link", link: "huertaenred.com.ar" },
    ],
    leng: ["html", "js", "php", "sql"],
    img: huertaEnRedImg,
  },
  {
    top: 3,
    fecha: "10 Dec 2024",
    titulo: "Web Gestion",
    desc: "Web Gestion is a system designed to facilitate and enhance business operations, offering tools to simplify administration and optimize daily activities.",
    button: [
      { name: "version", version: "0.6" },
      "dev",
      { name: "link", link: "webgestion.kasela.com.ar" },
      { name: "github", link: "github.com/KaselaDev/webGestion" },
    ],
    leng: ["react", "php", "sql"],
    img: webGestionImg,
  }
];