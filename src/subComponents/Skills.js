import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SKILLS = styled(NavLink)`
  position: absolute;
  top: 50%;
  left: 2rem;
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;

  font-family: 'Vogue', serif;
  letter-spacing: -2px;
  font-weight: 800;
  font-weight: bold;
`


const Skills = () => {
  return (
    <SKILLS target="_blank" to="/skills">
      <h2>
        Skills
      </h2>
    </SKILLS>
  )
}

export default Skills
