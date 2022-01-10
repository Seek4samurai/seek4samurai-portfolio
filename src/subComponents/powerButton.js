import React from 'react'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: #f8a5c2;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem
`

const PowerButton = () => {
  return (
    <Power>
      <PowerBtn width={26} height={26}></PowerBtn>
    </Power>
  )
}

export default PowerButton
