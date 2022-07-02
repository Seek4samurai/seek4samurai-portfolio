import React from "react";
import styled from "styled-components";

const ANIMATE = styled.div`
  .outer-circle {
    position: relative;
    display: flex;
    justify-content: center;
    height: 200px;
    width: 200px;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#14ffe9),
      color-stop(#ffeb3b),
      to(#ff00e0)
    );
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
    border-radius: 50%;
    -webkit-animation: rotate 1.5s linear infinite;
    animation: rotate 1.5s linear infinite;
  }

  .outer-circle span {
    position: absolute;
    height: 200px;
    width: 200px;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#14ffe9),
      color-stop(#ffeb3b),
      to(#ff00e0)
    );
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
    border-radius: 50%;
  }

  .outer-circle span:nth-child(1) {
    filter: blur(5px);
  }

  .outer-circle span:nth-child(2) {
    filter: blur(10px);
  }

  .outer-circle span:nth-child(3) {
    filter: blur(25px);
  }

  .outer-circle span:nth-child(4) {
    filter: blur(150px);
  }

  .outer-circle .inner-circle {
    height: 180px;
    width: 180px;
    position: absolute;
    background: black;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    z-index: 9;
  }

  @-webkit-keyframes rotate {
    0% {
      -webkit-filter: hue-rotate(0deg);
      filter: hue-rotate(0deg);
    }
    100% {
      -webkit-filter: hue-rotate(360deg);
      filter: hue-rotate(360deg);
    }
  }

  @keyframes rotate {
    0% {
      -webkit-filter: hue-rotate(0deg);
      filter: hue-rotate(0deg);
    }
    100% {
      -webkit-filter: hue-rotate(360deg);
      filter: hue-rotate(360deg);
    }
  }
`;

const BlackHole = () => {
  return (
    <ANIMATE>
      <div className="outer-circle">
        <div className="inner-circle"></div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </ANIMATE>
  );
};

export default BlackHole;
