import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const PROJECT = styled(NavLink)`
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: translate(-50%, -50%) rotate(-90deg);
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`

const Projects = () => {
  return (
    <PROJECT target="_blank" to="/works">
      <h2>
        Projects
      </h2>
    </PROJECT>
  )
}

export default Projects