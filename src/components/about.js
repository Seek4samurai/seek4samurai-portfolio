import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import { lightTheme } from "./themes";
import SocialIcons from "../subComponents/SocialIcons";
import HomeButton from "../subComponents/HomeButton";
import img from "../assets/Images/cuteAnimal.png";
import BackText from "../subComponents/BigText";

const Box = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  overflow: hidden;
`;

const float = keyframes`
  0%
  {
    transform: translateY(-15px);
  }
  50%
  {
    transform: translateY(-30px) translateX(15px);
  }
  100%
  {
    transform: translateY(-15px);
  }
`;

const disco = keyframes`
  0%
  {
    filter:hue-rotate(90deg);
  }
  50%
  {
    filter:hue-rotate(180deg);
  }
  100%
  {
    filter:hue-rotate(90deg);
  }
`;

const Meh = styled.div`
  position: absolute;
  top: 20%;
  right: 5%;
  width: 30vw;
  z-index: 99;

  animation: ${float} 4s ease infinite;

  img {
    transform: rotate(15deg);
    width: 100%;
    height: auto;
    animation: ${disco} 1s ease infinite;
    -webkit-user-drag: none;
    user-select: none;
  }
`;

const Main = styled.div`
  position: absolute;
  top: 10rem;
  left: calc(5rem + 5vw);

  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);

  color: ${(props) => props.theme.text};
  font-family: "poppins", sans-serif;
  font-size: calc(0.6rem + 0.8vw);
  line-height: 1.5;
  padding: 2rem;
  height: 50vh;
  width: 50vw;

  border-radius: 50px;
  background: linear-gradient(145deg, #e6c5c5, #ffeaea);
  box-shadow: 5px 5px 10px #d9baba, -5px -5px 10px #fffcfc;

  z-index: 5;

  @media only screen and (max-width: 548px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0 }}
      >
        <SocialIcons></SocialIcons>
        <HomeButton></HomeButton>
        <Box>
          <Meh>
            <img src={img} alt="Meh" />
          </Meh>
          <Main>
            Hi, nice to meet you👋🏾 <br></br>
            I'm Gourav Singh Rawat, from India. 20 years old kid 🧔(with lil
            beard for some reason) who keeps on looking for better opportunities
            👩‍💻 and great minds 👥 to work with. I like to work on
            Ethereum/Solana 💵, Web 🌎, dApp 🔗 development and with cloud
            technologies ☁️ like Firebase, Appwrite, AWS and Microsoft Azure.
            <br></br>
            <br></br>
            🚀 I'm a web3 & AI enthusiast.
            <br></br>
            <br></br>
            🚀 I also like to do maths ✏️ on weekends.
          </Main>
        </Box>
        <BackText text="About" top="3%" right="20%"></BackText>
      </motion.div>
    </ThemeProvider>
  );
};

export default AboutPage;
