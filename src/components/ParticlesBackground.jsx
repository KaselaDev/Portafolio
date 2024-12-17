import React, { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import configParticles from '../utils/particlesjs-config'

export default function ParticlesBackground() {

    const particlesInit = useCallback((engine) => {
        loadFull (engine)
    }, [])

  return (
    <div>
        <Particles 
            config={configParticles}
            init={particlesInit}
        />
    </div>
  )
}
