import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import img from '../assets/Images/BlogBG.jpg'
import LogoComp from '../subComponents/LogoComp'
import HomeButton from '../subComponents/HomeButton'
import SocialIcons from '../subComponents/SocialIcons'
import { Blogs } from '../data/BlogData'
import BlogComponent from './BlogComponent'
import RocketComponent from '../subComponents/Rocket'
import { motion } from 'framer-motion'

const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

const Container = styled.div`
  background-color: ${props => `${props.theme.body},0.5`};
  position: relative;
  width: 100%;
  height: auto;
  padding-bottom: 5rem;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(0.8rem + 2vw);
`

const Blog = () => {
  const [numbers, setNumbers] = useState(0);
  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));

  }, [])

  return (
    <motion.div
      initial={{ translateY: "100%" }}
      animate={{ translateY: "0" }}
      exit={{ translateY: "100%" }}>
      <MainContainer>
        <Container>
          <LogoComp></LogoComp>
          <HomeButton></HomeButton>
          <SocialIcons></SocialIcons>
          <RocketComponent numbers={numbers}></RocketComponent>
          <Center>
            <Grid>
              {Blogs.map(blog => {
                return <BlogComponent key={blog.id} blog={blog}></BlogComponent>
              })}
            </Grid>
          </Center>
        </Container>
      </MainContainer>
    </motion.div>
  )
}

export default Blog
