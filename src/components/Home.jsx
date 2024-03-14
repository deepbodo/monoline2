import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AfterNav from "./AfterNav";
import Section from "./Section";
import Listing from "./Listing";
import TrendingList from "./TrendingList";
import Navbar from "./Navbar";
import Footer from "./Footer";
import wall from "../image/wall.jpg";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import Categories from "./Categories";
const Container1 = styled.div`
  height: auto;
  padding: 0;
  @media (max-width: 800px) {
    overflow-x: hidden;
  }
`;
const Banner = styled.div`
  background: url(${wall});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 46rem;
  display: flex;
  padding: 6rem;
  align-items: left;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  @media (max-width: 800px) {
    overflow-x: hidden;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 25rem;
    background-size: 150% 100%;
  }
`;

const Title = styled.h1`
  margin: 0;
  text-align: left;
  width: 100%;
  font-size: 5rem;
  color: #fff;
  font-family: serif;
  @media (max-width: 800px) {
    font-size: 2.1rem;
    font-weight: bold;
    text-align: center;
  }
`;
const Div = styled.div`
  display: flex;
  width: 40%;
  align-items: left;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;
const Button = styled.button`
  background-color: #ffff;
  border-style: none;
  font-size: 1.2rem;
  width: 10rem;
  font-weight: 400;
  margin: 1rem;
  color: #000;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  text-align: center;
  @media (max-width: 800px) {
    font-size: 1.2rem;
    padding: 0.4rem;
    width: 100%;
    font-weight: bold;
    text-align: center;
  }
`;
const Button2 = styled.button`
  background-color: transparent;
  border: 0.2rem solid #000;
  font-size: 1.2rem;
  margin: 1rem;
  width: 10rem;
  font-weight: 400;
  color: #fff;

  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  text-align: center;
  @media (max-width: 800px) {
    font-size: 1.2rem;
    padding: 0.4rem;
    width: 100%;
    font-weight: bold;
    text-align: center;
  }
`;
const Flex = styled.div`
  display: flex;
  width: 60%;
  @media (max-width: 800px) {
    width: 100%;
    flex-direction:column;
    align-items:center;
`;
const HaLink = styled(HashLink)`
  text-decoration: none;
  color: #fff;
`;
const Title2 = styled.h2`
  margin: 2rem;
  font-size: 3rem;
  text-align: center;
  @media (max-width: 800px) {
    font-size: 2rem;
    margin: 1rem;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  letter-spacing: 0.2rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
  background-color: #f5f7f9;
`;
const Hr = styled.div`
  width: 10%;
  height: 1.5px;
  background-color: #4175fc;
`;
const H3 = styled.h3`
  color: #fff;
  margin: 0.8rem;
  font-size: 1.1rem;
`;
// linear-gradient(180deg, var( --e-global-color-astglobalcolor0 ) -50%, #000000 100%);
const Home = () => {
  const navigate = useNavigate();
  const navigateToStore = () => {
    navigate("/store/");
  };
  return (
    <>
      <Navbar />
      <Container1>
        <Banner>
          <Div>
            <Title>Raining In Hot Offers!</Title>
            <H3>Up to 30% OFF on all products</H3>
            <Flex>
              <Button onClick={navigateToStore}>SHOP NOW</Button>

              <Button2>
                <HaLink to="#listing">FIND MORE</HaLink>
              </Button2>
            </Flex>
          </Div>
        </Banner>
        <Categories />
        <Wrapper>
          <Title2>Featured Products!</Title2>
          <Hr />
          <TrendingList />
        </Wrapper>

        <Section />
        {/* <Listing /> */}
      </Container1>
    </>
  );
};

export default Home;
