import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const PROJECT = styled(NavLink)`
  position: absolute;
  top: 20%;
  left: 2rem;
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;

  font-family: 'Vogue', serif;
  letter-spacing: -2px;
  font-weight: 800;
  font-weight: bold;

@media only screen and (max-width: 670px) {
  top: 25%;
  left: 0.5rem;
  font-size: 0.8rem;
}
`

const Projects = () => {
  return (
    <PROJECT to="/works">
      <motion.h2
        whileHover={{ scale: 1.6 }}
        whileTap={{ scale: 0.9 }}
      >
        Projects
      </motion.h2>
    </PROJECT>
  )
}

export default Projects