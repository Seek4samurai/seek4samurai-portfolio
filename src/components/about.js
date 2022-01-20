import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'
import { lightTheme } from './themes'
import LogoComp from '../subComponents/LogoComp'
import SocialIcons from '../subComponents/SocialIcons'
import HomeButton from '../subComponents/HomeButton'
import ParticleComponentAbout from '../Particles/ParticleComponentAbout'
import img from '../assets/Images/cuteAnimal.png'
import BackText from '../subComponents/BigText'

// import ImgParticles from '../Particles/ImgParticles'
// import Particles from 'react-particles-js'

const Box = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  ${'' /* background-color: ${props => props.theme.body}; */}

  overflow: hidden;
`

const float = keyframes`
  0%
  {
    transform: translateY(-15px);
  }
  50%
  {
    transform: translateY(-30px) translateX(15px);
  }
  100%
  {
    transform: translateY(-15px);
  }
`

const disco = keyframes`
  0%
  {
    filter:hue-rotate(90deg);
  }
  50%
  {
    filter:hue-rotate(180deg);
  }
  100%
  {
    filter:hue-rotate(90deg);
  }
`

const Meh = styled.div`
  position: absolute;
  top: 20%;
  right: 5%;
  width: 30vw;
  z-index: 99;
  
  animation: ${float} 4s ease infinite;

  img{
    transform: rotate(15deg);
    width: 100%;
    height: auto;
    animation: ${disco} 1s ease infinite;
  }
`

const Main = styled.div`
  position: absolute;
  top: 10rem;
  left: calc(5rem + 5vw);

  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);

  color: ${props => props.theme.text};
  font-family: 'poppins', sans-serif;
  font-size: calc(0.6rem + 0.8vw);
  line-height: 1.5;
  padding: 2rem;
  height: 50vh;
  width: 50vw;

  border: 4px solid ${props => props.theme.text};
  border-radius: 15px;

  z-index: 5;
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
          <Meh>
            <img src={img} alt='Meh' />
          </Meh>
          <Main>
            Hi, nice to meet you👋🏾 <br></br><br></br>
            I'm Gourav based in India 🌏 and I love doing web-development, and working on UI/UX designs.
            Apart from these I really love to play with data-structures📅 and problem solving things😎, using C++ for those and Python🐍 for data studies.
            <br></br><br></br>🚀I've also done some freelancing works since few years on different platforms.
            <br></br><br></br>🚀I also like to do maths ✏️ on weekends.
          </Main>
        </Box>
        <BackText text="About" top="6%" right="20%"></BackText>
        <ParticleComponentAbout></ParticleComponentAbout>
      </motion.div>
    </ThemeProvider>
  )
}

export default AboutPage
