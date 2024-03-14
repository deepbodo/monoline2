import React from "react";
import styled from "styled-components";
import Signup from "./SignUp";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { device } from "./device";

const Container1 = styled.div`
  height: auto;
  padding: 0;
  @media ${device.laptop} {
    width: 60rem;
  }
`;
const Banner = styled.div`
  background-color: blue;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 50px;
  color: #fff;
`;
const Text = styled.h3`
  margin: 10px;
  color: white;
`;
const MyAccount = () => {
  return (
    <>
      <Navbar />
      <Container1>
        <Banner>
          <Title>My Account</Title>
          <Text>Welcome Back</Text>
        </Banner>
        <Signup />
      </Container1>
      <Footer />
    </>
  );
};

export default MyAccount;
