import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'
import { lightTheme } from './themes'
import LogoComp from '../subComponents/LogoComp'
import SocialIcons from '../subComponents/SocialIcons'
import HomeButton from '../subComponents/HomeButton'
import ParticleComponentAbout from '../Particles/ParticleComponentAbout'
// import ImgParticles from '../Particles/ImgParticles'
// import Particles from 'react-particles-js'

const Box = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  ${'' /* background-color: ${props => props.theme.body}; */}
  
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
`

const AboutPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}>
        <LogoComp></LogoComp>
        <SocialIcons></SocialIcons>
        <HomeButton></HomeButton>
        <Box>

        </Box>
        <ParticleComponentAbout></ParticleComponentAbout>
      </motion.div>
    </ThemeProvider>
  )
}

export default AboutPage
