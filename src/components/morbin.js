import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes";
import SocialIcons from "../subComponents/SocialIcons";
import HomeButton from "../subComponents/HomeButton";
import { motion } from "framer-motion";
import BackText from "../subComponents/BigText";
import MorbinTime from "../assets/Images/MorbinTime.jpeg";

const Box = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;

const Container = styled.div``;

const Morbin = () => {
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
            <img src={MorbinTime} alt="MorbinTime"></img>
          </Container>
          <BackText text="Morbin Time" top="3%" right="10%"></BackText>
        </Box>
      </motion.div>
    </ThemeProvider>
  );
};

export default Morbin;
