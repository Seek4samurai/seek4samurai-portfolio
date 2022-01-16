import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './themes'
import { Palette, WebDev } from '../data/AllSvgs'
import LogoComp from '../subComponents/LogoComp'
import SocialIcons from '../subComponents/SocialIcons'
import HomeButton from '../subComponents/HomeButton'

const Box = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  background-color: ${props => props.theme.body};
  
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${props => props.theme.body};
  border: 2px solid ${props => props.theme.text};
  border-radius: 10px;
  background-color: ${props => props.theme.body};

  padding: 2rem;
  width: 30vw;
  height: 60vh;

  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
`

const Title = styled.h2`
  display: flex;
  justify-content: Center;
  align-items: Center;
  
  font-size: calc(1em + 1vw);
  color: ${props => props.theme.text};
`

const Description = styled.div`
  font-size: calc(0.6em + 1vw);
  color: ${props => props.theme.text};
  
  padding: 0.5rem 0;

  strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,p{
    margin-left: 2rem;
  }
`

const skills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <LogoComp theme={'light'}></LogoComp>
      <HomeButton theme={'light'}></HomeButton>
      <SocialIcons ></SocialIcons>
      <Box>
        <Main>
          <Title>
            <Palette width={40} height={40} /> UI/UX Designer
          </Title>
          <Description>
            Simple, Sober and Sexy design that speak and stands out.
          </Description>
          <Description>
            <strong>Prefers Designing</strong>
            <ul>
              <li>
                Web Designs
              </li>
              <li>
                Mobile Apps
              </li>
              <li>
                Dashboards
              </li>
            </ul>
          </Description>
          <Description>
            <strong>TOOLS</strong>
            <ul>
              <li>
                Figma
              </li>
              <li>
                Illustrator
              </li>
              <li>
                Adobe XD
              </li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <WebDev width={40} height={40} /> Developer
          </Title>
          <Description>
            Making UIs and Developing them to real. Web-development, programming and playing with data structures.
          </Description>
          <Description>
            <strong>Prefers to work with</strong>
            <p>
              Sass, JS, ReactJS, NodeJS, NextJS, ExpressJS, Git, Bootstrap etc.
            </p>
          </Description>
          <Description>
            <strong>TOOLS</strong>
            <ul>
              <li>
                Atom
              </li>
              <li>
                VScode
              </li>
              <li>
                PyCharm
              </li>
              <li>
                Github
              </li>
            </ul>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  )
}

export default skills
