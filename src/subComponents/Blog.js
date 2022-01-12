import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

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
`

const Blog = () => {
  return (
    <BLOG target="_blank" to="/blog">
      <h2>
        Blogs
      </h2>
    </BLOG>
  )
}

export default Blog