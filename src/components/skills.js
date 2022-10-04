import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes";
import { Palette, WebDev } from "../data/AllSvgs";
import SocialIcons from "../subComponents/SocialIcons";
import HomeButton from "../subComponents/HomeButton";
import { motion } from "framer-motion";
import BackText from "../subComponents/BigText";

const Box = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: ${(props) => props.theme.body};
  border-radius: 50px;
  background: linear-gradient(145deg, #e6d4da, #fffbff);
  box-shadow: 20px 20px 60px #d9c8ce, -20px -20px 60px #ffffff;

  padding: 2rem;
  width: 30vw;
  height: 60vh;

  z-index: 5;
  line-height: 1.5;
  @media only screen and (max-width: 300px) {
    height: 65vh;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: Center;
  align-items: Center;

  font-size: calc(1em + 1vw);
  color: ${(props) => props.theme.text};

  @media only screen and (max-width: 300px) {
    font-size: 0.8rem;
  }
`;

const Description = styled.div`
  font-size: calc(0.6em + 1vw);
  color: ${(props) => props.theme.text};

  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 670px) {
    font-size: calc(0.6em + 0.6vw);
    padding: 0rem 0;

    strong {
      margin-bottom: 1rem;
      text-transform: uppercase;
    }

    ul,
    p {
      margin-left: 1.2rem;
      font-size: 0.7rem;
    }
  }

  @media only screen and (max-height: 768px) {
    padding: 0rem 0;

    strong {
      margin-bottom: 1rem;
      text-transform: uppercase;
    }
    ul,
    p {
      margin-left: 1.2rem;
      font-size: 0.7rem;
    }
  }

  @media only screen and (max-width: 300px) {
    font-size: calc(0.6em + 0.6vw);
    padding: 0rem 0;

    strong {
      margin-bottom: 0.8rem;
      text-transform: uppercase;
    }

    ul,
    p {
      margin-left: 1rem;
      font-size: 0.7rem;
    }
  }
`;

const Skills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0 }}
      >
        <SocialIcons></SocialIcons>
        <HomeButton theme={"light"}></HomeButton>
        <Box>
          <Main>
            <Title>
              <Palette width={40} height={40} /> UI/UX Designer
            </Title>
            <Description>
              Simple, Satisfying and Sexy designs that speak and stands out.
            </Description>
            <Description>
              <strong>Prefers Designing</strong>
              <ul>
                <li>Web/mobile UI</li>
                <li>Admin dashboards</li>
              </ul>
            </Description>
            <Description>
              <strong>TOOLS</strong>
              <ul>
                <li>Figma</li>
                <li>Illustrator</li>
              </ul>
            </Description>
          </Main>
          <Main>
            <Title>
              <WebDev width={40} height={40} /> Developer
            </Title>
            <Description>
              Making UIs and developing them to real. Web/dApp-development,
              security ops & smart contracts.
            </Description>
            <Description>
              <strong>Prefers to work with</strong>
              <p>
                React/ Next.js/ Django/ DRF, Microservices architecture, C++/
                Python/ Solidity, AWS/ Azure/ Digital Ocean, Firebase/ Appwrite,
                Ethereum, Moralis and more!
              </p>
            </Description>
            <Description>
              <strong>TOOLS</strong>
              <ul>
                <li>Git & Github</li>
                <li>Docker</li>
              </ul>
            </Description>
          </Main>
          <BackText text="Skills" top="3%" right="25%"></BackText>
        </Box>
      </motion.div>
    </ThemeProvider>
  );
};

export default Skills;
