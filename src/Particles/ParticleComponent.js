import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'
import configDark from '../config/particlesjs-config.json'
import configLight from '../config/particlesjs-config-light.json'
import { tsParticles } from 'tsparticles'

const Box = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right:0;
  left: 0;
  z-index: 0;
`

const ParticleComponent = (props) => {
  return (
    <Box>
      <Particles style={{ position: 'absolute', top: 0 }} params={props.theme === "light" ? configLight : configDark} >
      </Particles>
      <div id="tsparticles"></div>
      {/* <Particles
        params={{
          polygon: {
            enable: true,
            type: 'inside',
            move: {
              radius: 10
            },
            url: './solid.svg'
          }
        }} /> */}
    </Box>
  )
}

export default ParticleComponent
