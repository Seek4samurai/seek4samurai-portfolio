import React from 'react'
import styled from 'styled-components'
// import { lightTheme, darktheme } from './themes'
import Me from '../assets/Images/profile-img.png'

const Box = styled.div`
  position: absolute;
  width: 55vw;
  height: 40vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  background: #c9d6ff;
  background: -webkit-linear-gradient(to right, #c9d6ff, #e2e2e2);
  background: linear-gradient(to right, #c9d6ff, #e2e2e2);
  z-index: 3;
  border: 4px solid #ffffff;
`

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .Image{
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100%;
    height: auto;
    transform: translate(-50%, 0%);
  }
`

const Text = styled.div``

const Intro = () => {
  return (
    <Box>
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Gourav</h3>
          <h6>I love making simple yet effective applications and designs!</h6>
        </Text>
      </SubBox>
      <SubBox>
        <div>
          <img className='Image' src={Me} alt='Profile Image'></img>
        </div>
      </SubBox>
    </Box>
  )
}

export default Intro
