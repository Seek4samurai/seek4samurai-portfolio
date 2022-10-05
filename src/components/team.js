import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes";
import SocialIcons from "../subComponents/SocialIcons";
import HomeButton from "../subComponents/HomeButton";
import { motion } from "framer-motion";
import BackText from "../subComponents/BigText";
import Profile from "../data/Profile";
import ProfileCard from "../subComponents/ProfileCard";

const Box = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;

  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: absolute;
  top: 12%;
  z-index: 5;
`;
const Title = styled.h2`
  font-style: italic;
  font-family: "Vogue", serif;
  color: ${(props) => props.theme.text};
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 6rem 0;
`;

const Team = () => {
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
          <Container>
            <Title>I'm a Fullstack developer!</Title>
            <CardContainer>
              {Profile.map((data) => {
                return <ProfileCard data={data} key={data.id}></ProfileCard>;
              })}
            </CardContainer>
          </Container>
          <BackText text="Our Team" top="3%" right="10%"></BackText>
        </Box>
      </motion.div>
    </ThemeProvider>
  );
};

export default Team;
