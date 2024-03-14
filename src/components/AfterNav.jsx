import React from "react";
import { Parallax } from "react-parallax";
import Bg from "../image/homebanner.jpg";
import styled from "styled-components";
const Container = styled.div`
  height: auto;
`;

const Banner = styled.div`
  background-image: url(${Bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 80px;
  color: #fff;
`;
const AfterNav = () => {
  return (
    <Container>
      <Banner>
        <Title></Title>
      </Banner>
    </Container>
  );
};

export default AfterNav;
