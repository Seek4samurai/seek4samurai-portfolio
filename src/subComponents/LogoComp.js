import React from 'react'
import styled from 'styled-components'

const Logo = styled.h1`
  display: inline-block;
  color: ${props => props.theme.text};
  font-family: 'Vogue', serif;
  letter-spacing: -2px;
  font-weight: 800;
  font-weight: bold;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;

  i{
    font-weight: 300;
  }
`

const LogoComp = () => {
  return (
    <Logo>
      Gourav Singh Rawat <br></br>
      <i>Seek4Samurai</i>
    </Logo>
  )
}

export default LogoComp
