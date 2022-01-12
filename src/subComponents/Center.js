import React from 'react'
import styled, { keyframes } from 'styled-components'
import BlackHole from '../subComponents/animate'

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`

const CENTER = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &>:first-child{
    animation: ${rotate} infinite 20s linear;
  }

  &>:last-child{
    padding-top: 1rem;
  }
`

const Center = () => {
  return (
    <CENTER target="_blank" to="/about">
      <BlackHole></BlackHole>
      <span>Click Me!</span>
    </CENTER>
  )
}

export default Center
