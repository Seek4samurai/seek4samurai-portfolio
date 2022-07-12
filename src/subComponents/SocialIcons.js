import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Github, Artstation, Discord, LinkedIn } from "../data/AllSvgs";

const Icons = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 99;

  svg {
    color: ${(props) => props.theme.text};
    padding-right: 1rem;
  }

  & > *:not(:last-child) {
    margin: 0.5rem 0.3rem;
  }
`;

const Line = styled.div`
  width: 18rem;
  height: 2px;
  background-color: ${(props) => props.theme.text};
`;

const AllSvgs = styled.span`
  display: flex;
  flex-direction: row;
`;

const SocialIcons = () => {
  return (
    <Icons>
      <Line></Line>
      <AllSvgs>
        <motion.div whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.9 }}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/Seek4samurai"
          >
            <Github width={25} height={25}></Github>
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.9 }}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.artstation.com/Seek4samurai"
          >
            <Artstation width={25} height={25}></Artstation>
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.9 }}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/seek4samurai/"
          >
            <LinkedIn width={25} height={25}></LinkedIn>
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.9 }}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/fj8BVc2ft7"
          >
            <Discord width={25} height={25}></Discord>
          </a>
        </motion.div>
      </AllSvgs>
    </Icons>
  );
};

export default SocialIcons;
