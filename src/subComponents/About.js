import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ABOUT = styled(NavLink)`
  position: absolute;
  top: 40%;
  left: 2rem;
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;

  font-family: 'Vogue', serif;
  letter-spacing: -2px;
  font-weight: 800;
  font-weight: bold;

@media only screen and (max-width: 670px) {
  top: 45%;
  left: 0.5rem;
  font-size: 0.8rem;
}
`

const About = () => {
  return (
    <ABOUT to="/about">
      <motion.h2
        whileHover={{ scale: 1.6 }}
        whileTap={{ scale: 0.9 }}
      >
        About
      </motion.h2>
    </ABOUT>
  )
}

export default About
