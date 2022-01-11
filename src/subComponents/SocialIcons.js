import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Github, Artstation, Dev, Behance, Dribble } from '../components/AllSvgs'

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: fixed;
  left: 2rem;
  bottom: 0;
  z-index: 3;

  svg{
  color: ${props => props.theme.text};
  }

  &>*:not(:last-child){
    margin: 0.5rem 0.3rem;
  }
`

const Line = styled.span`
  width: 8rem;
  height: 2px;
  background-color: ${props => props.theme.text};
`

const SocialIcons = () => {
  return (
    <Icons>
      <Line></Line>
      <div>
        <NavLink target="_blank" to={{ pathname: "https://www.github.com/Seek4samurai" }}>
          <Github width={25} height={25} fill="#ffffff"></Github>
        </NavLink>
      </div>
      <div>
        <NavLink target="_blank" to={{ pathname: "https://www.artstation.com/Seek4samurai" }}>
          <Artstation width={25} height={25} fill="#ffffff"></Artstation>
        </NavLink>
      </div>
      <div>
        <NavLink target="_blank" to={{ pathname: "https://www.dev.to/Seek4samurai" }}>
          <Dev width={25} height={25} fill="#ffffff"></Dev>
        </NavLink>
      </div>
      <div>
        <NavLink target="_blank" to={{ pathname: "https://www.behance.net/seek4samurai" }}>
          <Behance width={25} height={25} fill="#ffffff"></Behance>
        </NavLink>
      </div>
      <div>
        <NavLink target="_blank" to={{ pathname: "https://www.dribbble.com/seek4samurai" }}>
          <Dribble width={25} height={25} fill="#ffffff"></Dribble>
        </NavLink>
      </div>
    </Icons>
  )
}

export default SocialIcons
