import React from 'react'
import styled from 'styled-components'
import img from '../assets/Images/BlogBG.jpg'
import LogoComp from '../subComponents/LogoComp'
import HomeButton from '../subComponents/HomeButton'
import SocialIcons from '../subComponents/SocialIcons'
import { Blogs } from '../data/BlogData'
import BlogComponent from './blogComponent'
import { motion } from 'framer-motion'
import BackText from '../subComponents/BigText'

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
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}>
      <MainContainer>
        <Container>
          <HomeButton></HomeButton>
          <SocialIcons></SocialIcons>
          <Center>
            <Grid>
              {Blogs.map(blog => {
                return <BlogComponent key={blog.id} blog={blog}></BlogComponent>
              })}
            </Grid>
          </Center>
        </Container>
        <BackText text="Blogs" top="6%" right="20%"></BackText>
      </MainContainer>
    </motion.div>
  )
}

export default Blog
