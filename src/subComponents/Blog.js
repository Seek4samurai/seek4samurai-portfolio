import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const BLOG = styled(NavLink)`
  position: absolute;
  top: 30%;
  left: 2rem;
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;

  font-family: 'Vogue', serif;
  letter-spacing: -2px;
  font-weight: 800;
  font-weight: bold;

@media only screen and (max-width: 670px) {
  left: 0.5rem;
  font-size: 0.8rem;
}
`

const Blog = () => {
  return (
    <BLOG to="/blog">
      <motion.h2
        whileHover={{ scale: 1.6 }}
        whileTap={{ scale: 0.9 }}
      >
        Blogs
      </motion.h2>
    </BLOG>
  )
}

export default Blog