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
    font-size: 26px;
  }

@media only screen and (max-width: 670px) {
  left: 0.5rem;
  div{
    max-width: 120px;
  }
  span {
    font-size: 1.4rem;
  }
  i{
    font-size: 1.4rem;
  }
}
`

const LogoComp = () => {
  return (
    <Logo>
      <div>
        <span>
          Gourav Singh Rawat
        </span>
        <br></br>
        <i>Seek4Samurai</i>
      </div>
    </Logo>
  )
}

export default LogoComp
