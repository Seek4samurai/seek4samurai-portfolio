import React from 'react'
import styled from 'styled-components'
import HomeButton from '../subComponents/homeButton'
import LogoComp from '../subComponents/LogoComp'
import SocialIcons from '../subComponents/SocialIcons'
import Contact from '../subComponents/Contact'
import Blog from '../subComponents/Blog'
import Projects from '../subComponents/Projects'
import About from '../subComponents/About.js'
import Skills from '../subComponents/Skills'

const MainContainer = styled.div`
  position: relative;
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  h2,h3,h4,h5,h6{
    font-family: 'Vogue', serif;
    font-weight: 500;
  }
`

const Container = styled.div`
  padding: 2rem;
`

const main = () => {
  return (
    <>
      <MainContainer>
        <Container>
          <HomeButton></HomeButton>
          <LogoComp></LogoComp>
          <SocialIcons></SocialIcons>
          <Contact></Contact>
          <Projects></Projects>
          <Blog></Blog>
          <About></About>
          <Skills></Skills>
        </Container>
      </MainContainer>
    </>
  )
}

export default main
