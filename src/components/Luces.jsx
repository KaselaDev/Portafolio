import React, { useRef, useEffect } from 'react'
import '@/style/luces.css'

const StarryBackground = () => {
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
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return <canvas ref={canvasRef} className='particles' />;
};
export default function Luces() {


  return (
    <div className="luces">
      <StarryBackground />
        <div className="luz1"><span></span></div>
        <div className="luz2"><span></span></div>
        <div className="luz1 luzFin"><span></span></div>
    </div>
  )
}