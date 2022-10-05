import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 2rem;
  min-width: 20%;
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background: #f0fbff;
  box-shadow: 5px 5px 10px #d1dade, -5px -5px 10px #ffffff;
`;

const ImgContainer = styled.div`
  overflow: hidden;
`;

const Img = styled.img`
  object-fit: cover;
  margin: 1rem;
  padding: 0.3rem;

  width: 240px;
  height: 260px;
  border: 2px solid #808080;
  border-radius: 100%;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: bold;
  font-family: "Vogue", serif;
  color: ${(props) => props.theme.text};

  padding: 0.5rem;
  background-color: #d1e3ff;

  @media (min-width: 940px) and (max-width: 1366px) {
    font-size: 20px;
  }
`;
const Post = styled.div`
  font-size: 18px;
  font-style: italic;
  font-weight: lighter;

  @media (min-width: 940px) and (max-width: 1366px) {
    font-size: 12px;
  }
`;

const ProfileCard = (props) => {
  const { id, img, name, position } = props.data;

  return (
    <Container>
      <ImgContainer>
        <Img src={img} alt="img"></Img>
      </ImgContainer>
      <Name>
        {id}. {name}
      </Name>
      <Post>{position}</Post>
    </Container>
  );
};

export default ProfileCard;
