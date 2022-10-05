import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TeamComp = styled(NavLink)`
  position: absolute;
  top: 90%;
  right: 2rem;
  transform: translateY(50%);
  right: 2%;
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

const Team = () => {
  return (
    <TeamComp to="/ourteam">
      <motion.h2
        whileHover={{ scale: 1.2 }}
        whileTap={{
          scale: 0.9,
        }}
      >
        Meet our Team!
      </motion.h2>
    </TeamComp>
  );
};

export default Team;
