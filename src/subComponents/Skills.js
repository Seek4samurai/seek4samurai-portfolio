import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const SKILLS = styled(NavLink)`
  position: absolute;
  top: 30%;
  left: 2rem;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;

  font-family: "Vogue", serif;
  letter-spacing: -2px;
  font-weight: 800;
  font-weight: bold;

  @media only screen and (max-width: 670px) {
    top: 35%;
    left: 0.5rem;
    font-size: 0.8rem;
  }
`;

const Skills = () => {
  return (
    <SKILLS to="/skills">
      <motion.h2 whileHover={{ scale: 1.6 }} whileTap={{ scale: 0.9 }}>
        Skills
      </motion.h2>
    </SKILLS>
  );
};

export default Skills;
