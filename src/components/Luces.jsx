import React, { useRef, useEffect } from 'react'
import '@/style/luces.css'
import { StarryBackground } from '@/utils/funcions'

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