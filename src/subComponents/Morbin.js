import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MorbinTime = styled(NavLink)`
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  right: 2%;
  writing-mode: vertical-rl;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 99;

  font-family: "Vogue", serif;
  font-weight: 800;
  font-weight: bold;

  @media only screen and (max-width: 670px) {
    font-size: 0.8rem;
  }
`;

const Morbin = () => {
  return (
    <MorbinTime to="/morbin-time">
      <motion.h2
        whileHover={{ scale: 1.2 }}
        whileTap={{
          scale: 0.9,
        }}
      >
        Wanna see something Empty?
      </motion.h2>
    </MorbinTime>
  );
};

export default Morbin;
