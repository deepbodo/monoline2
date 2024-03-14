import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const CardFollow = styled.div`
  width: 450px;
  height: 70vh;
  background-color: #f5f7f9;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 90px;
  @media (max-width: 800px) {
    width: 30rem;
    height: auto;
  }
`;
const Line = styled.div`
  height: 5px;
  width: 100px;
  background-color: #1434a4;
  margin-bottom: 40px;
`;
const CardWrapper = styled.div`
  height: 50%;
`;

const Title = styled.h1`
  color: black;
  font-size: 55px;
  margin-bottom: 50px;
  font-family: "Roboto", sans-serif;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Container = styled.div``;
const Card = () => {
  return (
    <CardFollow>
      <Line></Line>
      <CardWrapper>
        <Title>Follow Us</Title>
        <Icons>
          <FaFacebook size={40} color="black" fill="black" />
          <FaTwitter size={40} color="black" />
          <FaInstagram size={40} color="black" />
        </Icons>
      </CardWrapper>
    </CardFollow>
  );
};

export default Card;
