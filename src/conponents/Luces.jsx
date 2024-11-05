import React from 'react'
import { useState, useEffect } from 'react';
import '../style/luces.css'

export default function Luces() {

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="luces">
        <div className="luz1"><span></span></div>
        <div className="luz2"><span></span></div>
        <div className="luz1 luzFin"><span></span></div>
    </div>
  )
}