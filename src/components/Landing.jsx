import React from 'react'
import Inicio from '@/components/landing/Inicio'
import Proyectos from '@/components/landing/Proyectos'
import Conocimientos from '@/components/landing/Conocimientos'
import Contactarme from '@/components/landing/Contactarme'

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
