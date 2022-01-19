import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import HomeButton from '../subComponents/HomeButton'
import SocialIcons from '../subComponents/SocialIcons'
import { lightTheme } from './themes'
import { Work } from '../data/WorkData'
import Card from '../subComponents/Card'
import img from '../assets/Images/ProjectBG.jpg'

const Box = styled.div`
  position: relative;

  height: 400vh;
  background-color: #000;
  background-color: ${props => props.theme.body};

  overflow: hidden;

  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

const Main = styled.ul`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;

  display: flex;
`

const WorkPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`
    }

    window.addEventListener('scroll', rotate)
    return () => {
      window.removeEventListener('scroll', rotate)
    }
  }, [])

  return (
    <ThemeProvider theme={lightTheme}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}>
        <SocialIcons></SocialIcons>
        <HomeButton></HomeButton>
        <Box>
          <Main>
            {
              Work.map(data =>
                <Card key={data.id} data={data}></Card>
              )
            }
          </Main>
        </Box>
      </motion.div>
    </ThemeProvider>
  )
}

export default WorkPage
