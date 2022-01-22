import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { HomeBtn } from '../data/AllSvgs'

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: #57606f;
  padding: 0.3rem;
  border-radius: 50%;
  border: 4px solid #f1f2f6;
  width: 2.5rem;
  height: 2.5rem;
  fill: #f1f2f6;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  cursor: pointer;

  transition: 0 background-color;
  transition: 0.5s box-shadow;

  &>*:{
    text-decoration: none;
    color: inherit;
  }

  &:hover{
    background-color: #57606f;
    box-shadow: 0 0 0 4px #57606f;
  }
`

const HomeButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <HomeBtn width={23} height={23} fill='#ffffff'></HomeBtn>
      </NavLink>
    </Power>
  )
}

export default HomeButton
