import React from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import BlackHole from "../subComponents/animate";
import HomeButton from "../subComponents/HomeButton";
import LogoComp from "../subComponents/LogoComp";
import SocialIcons from "../subComponents/SocialIcons";
import Contact from "../subComponents/Contact";
import Blog from "../subComponents/Blog";
import Projects from "../subComponents/Projects";
import About from "../subComponents/About.js";
import Skills from "../subComponents/Skills";
import Intro from "./Intro";
import { motion } from "framer-motion";

const MainContainer = styled.div`
  position: relative;
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Vogue", serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "84%" : "50%")};
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  z-index: 9;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 20s linear;
  }

  & > :last-child {
    padding-top: 2.5rem;
    font-size: 1rem;
    display: ${(props) => (props.click ? "none" : "inline-block")};
  }
  .outer-circle {
    height: ${(props) => (props.click ? "100px" : "200px")};
    width: ${(props) => (props.click ? "100px" : "200px")};
  }
  .outer-circle span {
    height: ${(props) => (props.click ? "100px" : "200px")};
    width: ${(props) => (props.click ? "100px" : "200px")};
  }
  .outer-circle .inner-circle {
    height: ${(props) => (props.click ? "80px" : "180px")};
    width: ${(props) => (props.click ? "80px" : "180px")};
  }

  @media only screen and (max-width: 670px) {
    .outer-circle {
      height: ${(props) => (props.click ? "50px" : "130px")};
      width: ${(props) => (props.click ? "50px" : "130px")};
    }
    .outer-circle span {
      height: ${(props) => (props.click ? "50px" : "130px")};
      width: ${(props) => (props.click ? "50px" : "130px")};
    }
    .outer-circle .inner-circle {
      height: ${(props) => (props.click ? "30px" : "110px")};
      width: ${(props) => (props.click ? "30px" : "110px")};
    }
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  background-color: #000000;
  border-radius: 8px;
  top: 10%;
  bottom: 0%;
  right: 50%;
  transform: translate(50%, 0);
  z-index: 1;
  width: ${(props) => (props.click ? "70%" : "0%")};
  height: ${(props) => (props.click ? "80%" : "80%")};
  transition: width 1s ease;

  @media only screen and (max-width: 670px) {
    width: ${(props) => (props.click ? "55vw" : "0%")}!important;
  }
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
    >
      <MainContainer>
        <DarkDiv className="Darkdiv" click={click}></DarkDiv>
        <Container>
          <HomeButton></HomeButton>
          <LogoComp></LogoComp>
          <SocialIcons></SocialIcons>
          <Center click={click} onClick={() => handleClick()}>
            <BlackHole width={200} height={200}></BlackHole>
            <span>Click Me!</span>
          </Center>
          <Contact></Contact>
          <Projects></Projects>
          <Blog></Blog>
          <About></About>
          <Skills></Skills>
        </Container>
        {click ? <Intro click={click}></Intro> : null}
      </MainContainer>
    </motion.div>
  );
};

export default Main;
