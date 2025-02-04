import React, { useRef, useEffect } from "react";
import Icon from "@/utils/Icon";

export const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Ajustamos el tamaño del canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = []; // Almacenará las estrellas
    const numStars = 200; // Cantidad de estrellas

    // Función para crear estrellas aleatorias
    const createStar = () => ({
      x: Math.random() * canvas.width, // Posición X aleatoria
      y: Math.random() * canvas.height, // Posición Y aleatoria
      radius: Math.random() * 1 + 0.1, // Tamaño entre 0.5 y 2
      velocity: Math.random() * 0.4, // Velocidad mínima
    });

    // Inicializamos las estrellas
    for (let i = 0; i < numStars; i++) {
      stars.push(createStar());
    }

    // Animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiamos el canvas

      // Dibujamos cada estrella
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        // Movimiento hacia abajo
        star.y += star.velocity;

        // Reiniciar posición si la estrella sale del canvas
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate); // Repetir animación
    };

    animate();

    // Ajustar tamaño del canvas si la ventana cambia
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight / 2;
    };
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className='particles' />;
};

export const lengCharge = (lenguaje) => {
  switch (lenguaje) {
    case "html":
      return (
        <div key={lenguaje} className="htmlCss">
          <p>HTML&CSS</p>
        </div>
      );
    case "js":
      return (
        <div key={lenguaje} className="js">
          <p>JavaScript</p>
        </div>
      );
    case "php":
      return (
        <div key={lenguaje} className="php">
          <p>PHP</p>
        </div>
      );
    case "sql":
      return (
        <div key={lenguaje} className="sql">
          <p>SQL</p>
        </div>
      );
    case "react":
      return (
        <div key={lenguaje} className="react">
          <p>React</p>
        </div>
      );
    default:
      console.log("lengProject not found");
      return null;
  }
};

export const buttonCharge = (button, index, lenguage) => {

  let params = {};

  if (typeof button === "object") {
    params = button;
  } else {
    params.name = button;
  }

  switch (params.name) {
    case "dev":
      return (
        <div key={index} className="btn proximamente">
          <Icon icon="faScrewdriverWrench" />
          <p>{lenguage === "es" ? "En desarrollo" : "In development"}</p>
        </div>
      );
    case "beta":
      return (
        <div key={index} className="btn beta">
          <Icon icon="faGlobe" />
          <p>Beta</p>
        </div>
      );
    case "github":
      return (
        <a key={index} className="btn github" href={`http://${params.link}`}>
          <Icon type="brands" icon="faGithub" />
          <p>Github</p>
        </a>
      );
    case "link":
      return (
        <a key={index} className="btn link" href={`http://${params.link}`}>
          <Icon icon="faArrowUpRightFromSquare" />
          <p>{lenguage === "es" ? "Ir a la web" : "Go to the website"}</p>
        </a>
      );
    case "version":
      return (
        <div key={index} className="btn version">
          <Icon icon="faCodeCommit" />
          <p>{params.version}V</p>
        </div>
      );
    default:
      console.log("botonProject not found");
      return null;
  }
};