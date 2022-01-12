import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const BLOG = styled(NavLink)`
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
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