import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LinkOpen } from "../data/AllSvgs";

const BLOG = styled.a`
  position: absolute;
  top: 40%;
  left: 2rem;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;

  font-family: "Vogue", serif;
  letter-spacing: -2px;
  font-weight: 800;
  font-weight: bold;

  @media only screen and (max-width: 670px) {
    top: 45%;
    left: 0.5rem;
    font-size: 0.8rem;
  }
`;

const Blog = () => {
  return (
    <BLOG href="https://dev.to/seek4samurai" target="_blank">
      <motion.h2
        style={{ display: "flex", alignItems: "center" }}
        whileHover={{ scale: 1.6 }}
        whileTap={{ scale: 0.9 }}
      >
        Blogs
        <LinkOpen
          style={{ paddingLeft: "0.5rem" }}
          width={20}
          height={20}
        ></LinkOpen>
      </motion.h2>
    </BLOG>
  );
};

export default Blog;
