import React from "react";
import styled from "styled-components";
import Abt from "../image/abtb.jpg";
import Db from "../image/db.png";
import banner2 from "../image/banner2.jpg";
import Card from "../components/Card";
import { device } from "./device";
import Section from "./Section";
import TrendingList from "./TrendingList";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Container1 = styled.div`
  height: auto;
  padding: 0;

  @media (max-width: 800px) {
    overflow-x: hidden;
  }
`;
const Banner = styled.div`
  background-image: url(${Abt});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 800px) {
    overflow-x: hidden;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 80px;
  color: #fff;
  @media (max-width: 800px) {
    font-size: 4rem;
  }
`;
const Who = styled.div`
  height: auto;
  background-color: #f5f7f9;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 80px;
  @media (max-width: 800px) {
    overflow-x: hidden;
    padding: 2rem;
    height: auto;
  }
`;
const Div = styled.div`
  height: 600px;
  background-color: white;
  display: flex;
  @media (max-width: 800px) {
    height: auto;
    width: auto;
    align-items: center;
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 50%;
  padding: 50px;
  align-items: center;
  justify-content: left;
  text-align: center;
  display: flex;
  @media (max-width: 800px) {
    padding: 1rem;
    width: 100%;
  }
`;
const InnerDiv = styled.div`
  text-align: left;
  @media (max-width: 800px) {
    text-align: center;
    height: auto;
  }
`;
const Right = styled.div`
  width: 50%;
  background-image: url(${Db});
  background-size: cover;
  @media (max-width: 800px) {
    align-items: center;
    background-size: cover;
    width: 20rem;
    height: 17rem;
    margin-bottom: 3rem;
  }
`;
const HTitle = styled.h1`
  @media (max-width: 800px) {
    font-size: 3rem;
    margin: 0.6rem;
  }
`;
const Para = styled.p`
  @media (max-width: 800px) {
    font-size: 1.5rem;
    width: 100%;
    font-weight: 470;
  }
`;
const FollowUs = styled.div`
  height: 70vh;
  color: white;
  @media (max-width: 800px) {
    overflow-x: hidden;
    height: auto;
  }
`;
const Banner2 = styled.div`
  margin-top: 200px;
  height: 70vh;
  background-image: url(${banner2});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  align-items: center;
  justify-content: center;
  display: flex;
  @media (max-width: 800px) {
    overflow-x: hidden;
    margin-top: 0px;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

const About = () => {
  return (
    <>
      <Navbar />
      <Container1>
        <Banner>
          <Title>About Us</Title>
        </Banner>
        <Who>
          <Div>
            <Left>
              <InnerDiv>
                <HTitle>Who We Are</HTitle>
                <Para>
                  Vintro is an E-Commerce company where a small group of
                  youngsters is trying to experiment with Fashion & Lifestyle to
                  make better products which looks fascinating yet minimal. We
                  sell Fashion & Lifestyle products starting from Bags to Jeans,
                  for Women.
                </Para>
              </InnerDiv>
            </Left>
            <Right />
          </Div>
        </Who>
        <FollowUs>
          <Banner2>
            <Card></Card>
          </Banner2>
        </FollowUs>
        <Section />
      </Container1>
    </>
  );
};

export default About;
