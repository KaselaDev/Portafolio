import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Inicio from './landing/Inicio'
import Proyectos from './landing/Proyectos'
import Conocimientos from './landing/Conocimientos'
import Contactarme from './landing/Contactarme'

export default function Landing() {
  return (
    <div className='content'>
      <Inicio />
      <Proyectos />
      <Conocimientos />
      <Contactarme />
      <div className="separadorFooter" />
    </div>
  )
}
