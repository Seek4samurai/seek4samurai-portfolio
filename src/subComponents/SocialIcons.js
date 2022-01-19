import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Github, Artstation, Dev, Behance, Dribble } from '../data/AllSvgs'

const Icons = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

  z-index: 99;

  svg{
    color: ${props => props.theme.text};
    padding-right: 1rem;
  }

  &>*:not(:last-child){
    margin: 0.5rem 0.3rem;
  }
`

const Line = styled.div`
  width: 28rem;
  height: 2px;
  background-color: ${props => props.theme.text};
`

const AllSvgs = styled.span`
  display: flex;
  flex-direction: row;
`

const SocialIcons = () => {
  return (
    <Icons>
      <Line></Line>
      <AllSvgs>
        <motion.div
          whileHover={{ scale: 1.6 }}
          whileTap={{ scale: 0.9 }}
        >
          <NavLink target="_blank" to={{ pathname: "https://www.github.com/Seek4samurai" }}>
            <Github width={25} height={25} fill="#ffffff"></Github>
          </NavLink>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.6 }}
          whileTap={{ scale: 0.9 }}
        >
          <NavLink target="_blank" to={{ pathname: "https://www.artstation.com/Seek4samurai" }}>
            <Artstation width={25} height={25} fill="#ffffff"></Artstation>
          </NavLink>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.6 }}
          whileTap={{ scale: 0.9 }}
        >
          <NavLink target="_blank" to={{ pathname: "https://www.dev.to/Seek4samurai" }}>
            <Dev width={25} height={25} fill="#ffffff"></Dev>
          </NavLink>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.6 }}
          whileTap={{ scale: 0.9 }}
        >
          <NavLink target="_blank" to={{ pathname: "https://www.behance.net/seek4samurai" }}>
            <Behance width={25} height={25} fill="#ffffff"></Behance>
          </NavLink>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.6 }}
          whileTap={{ scale: 0.9 }}
        >
          <NavLink target="_blank" to={{ pathname: "https://www.dribbble.com/seek4samurai" }}>
            <Dribble width={25} height={25} fill="#ffffff"></Dribble>
          </NavLink>
        </motion.div>
      </AllSvgs>
    </Icons>
  )
}

export default SocialIcons
