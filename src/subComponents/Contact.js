import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const ContactMe = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;

@media only screen and (max-width: 670px) {
  top: 4rem;
  font-size: 0.8rem;
}
`

const Contact = () => {
  return (
    <ContactMe target="_blank" to={{ pathname: "mailto:grvrawat999@gmail.com" }}>
      <motion.h2
        whileHover={{ scale: 1.6 }}
        whileTap={{ scale: 0.9 }}
      >
        Say hi...
      </motion.h2>
    </ContactMe>
  )
}

export default Contact
