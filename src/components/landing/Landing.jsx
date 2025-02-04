import React from 'react'
import Inicio from '@/components/landing/Inicio'
import Proyectos from '@/components/landing/Proyectos'
import Conocimientos from '@/components/landing/Conocimientos'
import Contactarme from '@/components/landing/Contactarme'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Luces from '@/components/Luces'
import Person from '@/components/Person'

export default function Landing() {
  return (
    <>
      <div className="Content">
        <Luces />
        <Header />
        <div className='content'>
          <Inicio />
          <Proyectos />
          <Conocimientos />
          <Contactarme />
          <div className="separadorFooter" />
        </div>
        <Footer />
        <Person />
      </div>
    </>
  )
}
