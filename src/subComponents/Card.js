import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github } from "../data/AllSvgs";

const Box = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${(props) => props.theme.text};

  width: 16rem;
  height: 400px;
  padding: 1.5rem 2rem;
  margin: 5rem;

  border-radius: 50px;
  background: linear-gradient(145deg, #e6d4da, #fffbff);
  box-shadow: 20px 20px 60px #d9c8ce, -20px -20px 60px #ffffff;

  @media (max-width: 1200px) {
    margin: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 1.4rem;
`;
const Description = styled.h2`
  font-size: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;

  border-top: 2px solid ${(props) => props.theme.text};
  padding-top: 0.5rem;
`;

const Tag = styled.span`
  font-size: 1rem;
  margin-right: 1rem;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Git = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: ${(props) => props.theme.body};
`;

const Card = (props) => {
  const { id, name, description, tags, github } = props.data;

  return (
    <Box key={id}>
      <Title>🚀{name}</Title>
      <Description>🌏{description}</Description>
      <Tags>
        {tags.map((tag, id) => {
          return <Tag key={id}>#{tag}</Tag>;
        })}
      </Tags>
      <Footer>
        <Git to={{ pathname: `${github}` }} target="_blank">
          <Github width={30} height={30}></Github>
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
