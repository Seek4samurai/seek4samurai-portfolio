import { motion } from "framer-motion";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import HomeButton from "../subComponents/HomeButton";
import SocialIcons from "../subComponents/SocialIcons";
import { lightTheme } from "./themes";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import BackText from "../subComponents/BigText";

const Box = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.body};
`;

const Main = styled.ul`
  position: absolute;
  top: 26%;
  height: max-content;
  z-index: 7;

  display: flex;
  flex-direction: column;
`;

const Col = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  padding: 0 2rem;
  margin-bottom: 5rem;
`;

const WorkPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <SocialIcons></SocialIcons>
        <HomeButton></HomeButton>
        <Box>
          <Main>
            <Col>
              {Work.map((data) => (
                <Card key={data.id} data={data}></Card>
              ))}
            </Col>
            <Col>
              {Work.map((data) => (
                <Card key={data.id} data={data}></Card>
              ))}
            </Col>
          </Main>
          <BackText text="Projects" top="10%" right="20%"></BackText>
        </Box>
      </motion.div>
    </ThemeProvider>
  );
};

export default WorkPage;
