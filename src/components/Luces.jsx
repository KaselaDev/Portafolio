import React, { useRef, useEffect } from 'react'
import '@/style/luces.css'
import { StarryBackground } from '@/utils/funcions'

export default function Luces({cantLuces = 0, luzFinal = false}) {
  return (
    <div className="luces">
      <StarryBackground />
        {
          [...Array(cantLuces)].map((_, index) => (
            (index % 2 === 0) ? (
              <div className="luz1" key={index}><span></span></div>
            ) : (
              <div className="luz2" key={index}><span></span></div>
            )
          ))
        }
        {
          luzFinal && <div className="luz 1 luzFin"><span></span></div>
        }
    </div>
  )
}