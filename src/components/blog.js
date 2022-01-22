import React from 'react'
import styled from 'styled-components'
import img from '../assets/Images/BlogBG.jpg'
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
  height: 100vh;
  padding-bottom: 5rem;
`

const Content = styled.div`
  position: relative;
  top: 10vh;
  height: 80vh;
  overflow-Y: auto;
  overflow-X: hidden;

  ::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera*/
  -ms-overflow-style: none; /* Fastest Internet explorer and Edge*/
  scrollbar-width: none; /* Firefox*/
}
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

@media only screen and (max-width: 670px) {
  grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
}
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
          <Content>
            <Center>
              <Grid>
                {Blogs.map(blog => {
                  return <BlogComponent key={blog.id} blog={blog}></BlogComponent>
                })}
              </Grid>
            </Center>
          </Content>
        </Container>
        <BackText text="Blogs" top="6%" right="20%"></BackText>
      </MainContainer>
    </motion.div>
  )
}

export default Blog
