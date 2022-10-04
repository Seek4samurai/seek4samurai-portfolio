import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/Images/profile.png";

const Box = styled(motion.div)`
  position: absolute;
  width: 55vw;
  height: 45vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  background-repeat: no-repeat;

  border-radius: 50px;
  background: linear-gradient(145deg, #e6d8db, #ffffff);
  box-shadow: 5px 5px 10px #4c4c4c, -5px -5px 10px #ffffff;

  z-index: 3;
  border-radius: 10px;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .Image {
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 6px #57606f);
    transform: translate(-50%, 0%);
  }
  @media only screen and (max-width: 670px) {
    h1 {
      font-size: 2rem !important;
    }
  }
`;

const Text = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(1em + 1.5vw);
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.textRgba},0.5)`};
    font-size: calc(0.5rem + 1.2vw);
    font-weight: 300;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "45vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Hi👋🏾,
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            I'm Gourav
          </motion.h3>
          <motion.h6
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            I love making simple yet effective applications and designs!
            <br></br>
            <a
              style={{ fontSize: "calc(0.5rem + 1vw)", textDecoration: "none" }}
              href="/about"
            >
              know more
            </a>
          </motion.h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="Image" src={Me} alt="Profile"></img>
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
