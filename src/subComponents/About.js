import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

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
`

const About = () => {
  return (
    <ABOUT target="_blank" to="/about">
      <h2>
        About
      </h2>
    </ABOUT>
  )
}

export default About
