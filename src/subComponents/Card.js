import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../data/AllSvgs';

const Box = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};

  width: 16rem;
  height: 50vh;
  padding: 1.5rem 2rem;
  margin-right: 5rem; 

  border-radius: 15px;
  border: 2px solid ${props => props.theme.text};

  transition: all 0.2s ease;
  &:hover{
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
  border: 2px solid ${props => props.theme.body};
  }
`

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`
const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: 'Karla', sans-serif;
  font-weight: 500;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;

  border-top: 2px solid ${props => props.theme.text};
  padding-top: 0.5rem;

  ${Box}:hover &{
  border-top: 2px solid ${props => props.theme.body};
  }
`

const Tag = styled.span`
  font-size: calc(0.8em + 0.3vw);
  margin-right: 1rem;
`

const Footer = styled.footer`
  display:flex;
  justify-content: space-between;
`

const Git = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: ${props => props.theme.body};
  ${Box}:hover &{
    color: ${props => props.theme.body};
  }
`

const Card = (props) => {
  const { id, name, description, tags, github } = props.data;

  return (
    <Box key={id}>
      <Title>
        🚀{name}
      </Title>
      <Description>
        🌏{description}
      </Description>
      <Tags>{
        tags.map((tag, id) => {
          return <Tag key={id}>#{tag}</Tag>
        })
      }
      </Tags>
      <Footer>
        <Git to={{ pathname: `${github}` }} target="_blank">
          <Github width={30} height={30}></Github>
        </Git>
      </Footer>
    </Box>
  )
}

export default Card
