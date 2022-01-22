import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0%
  {
    transform: translateY(2px);
  }
  10%
  {
    transform: translateY(5px) ;
  }
  20%
  {
    transform: translateY(2px);
  }
  30%
  {
    transform: translateY(5px) ;

  }
  40%
  {
    transform: translateY(2px);
  }
  50%
  {
    transform: translateY(5px) ;
  }
  60%
  {
    transform: translateY(2px);
  }
  70%
  {
    transform: translateY(5px) ;
  }
  80%
  {
    transform: translateY(2px);
  }
  90%
  {
    transform: translateY(5px) ;
  }
  100%
  {
    transform: translateY(2px);
  }
`

const Box = styled(NavLink)`
  height: 20rem;
  width: calc(8rem + 15vw);
  padding: 1rem;
  text-decoration: none;
  cursor: pointer;

  color: ${props => props.theme.body};
  border-radius: 10px;
  border: 2px solid ${props => props.theme.body};
  backdrop-filter: blur(15px);
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover{
    color: ${props => props.theme.text};
    background-color: #ffffff;
    transition: all 0.3s ease;
    animation: ${float} 1s ease infinite;  
    }

@media only screen and (max-width: 670px) {
  width: calc(8rem + 25vw);
}
`

const Image = styled.div`
  background-image: ${props => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border-radius: 10px;
  border: 2px solid #ffffff;
  background-position: center center;

  ${Box}:hover &{
    border: 2px solid ${props => props.theme.text};
  }
`

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: 'Vogue', serif;
  font-weight: 500;
  margin-top: 1rem;
  border-bottom: 3px solid ${props => props.theme.body};
`

const HashTags = styled.div`
  padding: 0.5rem 0;
`

const Tag = styled.span`
  padding-right: 0.5rem;
`

const Date = styled.div`
  padding: 0.5rem 0;
`

const BlogComponent = (props) => {
  const { id, name, tags, date, imgSrc, link } = props.blog;

  return (
    <Box target="_blank" to={{ pathname: link }}>
      <Image img={imgSrc}></Image>
      <Title>{id}. {name}</Title>
      <HashTags>
        {
          tags.map((tag, id) => {
            return <Tag key={id}>#{tag}</Tag>
          })
        }
      </HashTags>
      <Date>
        {date}
      </Date>
    </Box>
  )
}

export default BlogComponent
