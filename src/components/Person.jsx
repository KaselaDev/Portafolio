import React from 'react'
import personSVG from '@/img/personBackground.svg'
import '@/style/person.css'

export default function Person() {
  return (
    <div className="person" id='person'>
      <div className="luz"></div>
      <img src={personSVG} alt="Error de carga" />
    </div>
  )
}
