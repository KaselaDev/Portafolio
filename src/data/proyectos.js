import evaDBImg from '@/img/EvaDB.png';
import huertaEnRedImg from '@/img/huertaenred.png';
import webGestionImg from '@/img/webGestion.png';
import fletaloImg from '@/img/fletalo.png';
import blogFotografoImg from '@/img/blogFotografo.png';
import tkfelectroImg from '@/img/tkfelectro.png';
import { version } from 'react';

export const proyectosData = {
  es: [
    {
      fecha: "17 Mar 2024",
      titulo: "Eva DB Hospital Manager",
      desc: "Eva DB es una Aplicación web para la zona de terapia intensiva del hospital inter zonal Eva Peron (ex Castex) para ayudar en su eficiencia, accesibilidad y reducción de papeles, es una aplicación cerrada solo para los residentes del hospital",
      version: "1.0",
      button: [
        { name: "version", version: "1.0" },
      ],
      leng: ["html", "js", "php", "sql"],
      tag: ["PHP", "MySQL", "JS", "Web App"],
      img: evaDBImg,
    },
    {
      fecha: "19 Nov 2024",
      titulo: "Huerta en Red",
      desc: "Es un proyecto de 2 semanas de hacer una red social para que los usuarios publiquen el estado de sus plantas, la idea era presentarlo al municipio y que jubilados y personas que estén en casa aburrida puedan algo que hacer y además investigas si cambiando la zona puede cambiar la cosecha",
      version: "Beta",
      link: "huertaenred.com.ar",
      button: [
        { name: "version", version: "Beta" },
        "dev",
        { name: "link", link: "huertaenred.com.ar" },
      ],
      leng: ["html", "js", "php", "sql"],
      tag: ["PHP", "MySQL", "JS", "Web App"],
      img: huertaEnRedImg,
    },
    {
      fecha: "10 Dic 2024",
      titulo: "Web Gestion",
      desc: "Web Gestión es un sistema diseñado para facilitar y mejorar el manejo de tu negocio, proporcionando herramientas que simplifican la administración y optimizan tus operaciones diarias.",
      version: "0.6",
      link: "webgestion.kasela.com.ar",
      button: [
        { name: "version", version: "0.6" },
        "dev",
        { name: "link", link: "webgestion.kasela.com.ar" },
        { name: "github", link: "github.com/KaselaDev/webGestion" },
      ],
      leng: ["react", "php", "sql"],
      tag: ["PHP", "MySQL", "React", "Web App"],
      img: webGestionImg,
    },
    {
      fecha: "2 May 2025",
      titulo: "Fletalo",
      desc: "Fletalo es la app más simple y confiable para enviar o recibir cargas de cualquier tamaño. Conecta clientes con transportistas disponibles cerca de ti, en segundos.",
      version: "0.2.6",
      button: [
        { name: "version", version: "0.2.6" },
        "dev",
      ],
      leng: ["flutter", "php", "sql"],
      tag: ["Node.js", "MySQL", "Flutter", "App Movile"],
      img: fletaloImg,
    },
    {
      fecha: "10 Oct 2025",
      titulo: "Blog Fotografo",
      desc: "Blog Fotografo es un blog realizado para un fotografo español que queria compartir sus trabajos y experiencias. que trae para administrar sus articulos y ver estadisticas de sus publicaciones",
      version: "1.0",
      button: [
        { name: "version", version: "1.0" },
        "dev",
      ],
      leng: ["react", "node", "sql"],
      tag: ["Node.js", "MySQL", "React", "Web App"],
      img: blogFotografoImg,
    },
    {
      fecha: "10 Oct 2025",
      titulo: "TKF Electro",
      desc: "TKF Electro es un e-commerce para un emprendimeinto argentino. la aplicaicon cuneta con de venta de productos y pagos por mercado pago, tambien cuenta con gestion de stock y pedidos para el administrador.",
      version: "1.0",
      button: [
        { name: "version", version: "1.0" },
        "dev",
      ],
      leng: ["react", "node", "sql"],
      tag: ["Node.js", "MySQL", "React", "Web App", "Mercado Pago"],
      img: tkfelectroImg,
    },
  ],
  us: [
    {
      fecha: "17 Mar 2024",
      titulo: "Eva DB Hospital Manager",
      desc: "Eva DB is a web application for the intensive care unit of the Eva Peron Interzonal Hospital (formerly Castex), designed to improve efficiency, accessibility, and reduce paperwork. It is a private application exclusively for hospital residents.",
      version: "1.0",
      button: [
        { name: "version", version: "1.0" },
      ],
      leng: ["html", "js", "php", "sql"],
      tag: ["PHP", "MySQL", "JS", "Web App"],
      img: evaDBImg,
    },
    {
      fecha: "19 Nov 2024",
      titulo: "Huerta en Red",
      desc: "This was a two-week project to create a social network where users can post updates about their plants. The idea was to present it to the municipality, encouraging retirees and individuals looking for hobbies to participate, and exploring how changing locations might impact harvests.",
      version: "Beta",
      link: "huertaenred.com.ar",
      button: [
        { name: "version", version: "Beta" },
        "dev",
        { name: "link", link: "huertaenred.com.ar" },
      ],
      leng: ["html", "js", "php", "sql"],
      tag: ["PHP", "MySQL", "JS", "Web App"],
      img: huertaEnRedImg,
    },
    {
      fecha: "10 Dic 2024",
      titulo: "Web Gestion",
      desc: "Web Gestion is a system designed to facilitate and enhance business operations, offering tools to simplify administration and optimize daily activities.",
      version: "0.6",
      link: "webgestion.kasela.com.ar",
      button: [
        { name: "version", version: "0.6" },
        "dev",
        { name: "link", link: "webgestion.kasela.com.ar" },
        { name: "github", link: "github.com/KaselaDev/webGestion" },
      ],
      leng: ["react", "php", "sql"],
      tag: ["PHP", "MySQL", "React", "Web App"],
      img: webGestionImg,
    },
    {
      fecha: "2 May 2025",
      titulo: "Fletalo",
      desc: "Fletalo is the simplest and most reliable app for sending or receiving loads of any size. Connect customers with available carriers near you in seconds.",
      version: "0.2.6",
      button: [
        { name: "version", version: "0.2.6" },
        "dev"
      ],
      leng: ["flutter", "php", "sql"],
      tag: ["Node.js", "MySQL", "Flutter", "App Movile"],
      img: fletaloImg,
    },
    {
      fecha: "10 Oct 2025",
      titulo: "Photographer's Blog",
      desc: "Photographer's Blog is a blog created for a Spanish photographer who wanted to share his work and experiences. It includes features for managing his articles and viewing statistics about his publications.",
      version: "1.0",
      button: [
        { name: "version", version: "1.0" },
        "dev",
      ],
      leng: ["react", "node", "sql"],
      tag: ["Node.js", "MySQL", "React", "Web App"],
      img: blogFotografoImg,
    },
    {
      fecha: "10 Oct 2025",
      titulo: "TKF Electro",
      desc: "TKF Electro is an e-commerce platform for an Argentinian business. The application features product sales and payments via Mercado Pago, and also includes stock and order management for the administrator.",
      version: "1.0",
      button: [
        { name: "version", version: "1.0" },
        "dev",
      ],
      leng: ["react", "node", "sql"],
      tag: ["Node.js", "MySQL", "React", "Web App", "Mercado Pago"],
      img: tkfelectroImg,
    },
  ]
};