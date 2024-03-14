import React from "react";
import styled from "styled-components";
import Abt1 from "../image/banner2.jpg";
import Section from "./Section";
import { MdEmail } from "react-icons/md";
import { TbClock } from "react-icons/tb";
import { BsFillTelephoneFill } from "react-icons/bs";
import ContactForm from "./ContactForm";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { device } from "./device";
const Container1 = styled.div`
  height: auto;
  padding: 0;
  background-color: #f5f7f9;
  @media (max-width: 800px) {
    overflow-x: hidden;
  }
`;
const Banner = styled.div`
  background-image: url(${Abt1});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 500px;
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
const Wrapper = styled.div`
  height: auto;
  padding: 110px;
  display: flex;
  background-color: #f5f7f9;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media (max-width: 800px) {
    padding: 3rem;
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 40%;
  text-align: left;
  @media (max-width: 800px) {
    text-align: center;
    width: 100%;
  }
`;
const Title1 = styled.h1`
  margin: 18px;
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  font-weight: bold;
`;

const Right = styled.div`
  width: 60%;
  // background-color: #fff;
  // border-radius: 5px;
  align-items: center;
  text-align: center;
  @media (max-width: 800px) {
    text-align: center;
    width: 100%;

    margin-top: 2rem;
  }
`;
const Comps = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
const L = styled.div`
  width: 10%;
  margin-top: 10px;
`;
const R = styled.div`
  justify-content: center;
  text-align: left;
  margin-top: 10px;
`;
const ContactUs = () => {
  return (
    <>
      <Navbar />
      <Container1>
        <Banner>
          <Title>Contact Us</Title>
        </Banner>
        <Wrapper>
          <Left>
            <Title1>You tell us.We listen</Title1>
            <Comps>
              <L>
                <MdEmail />
              </L>
              <R>info@vintro.co.in</R>
            </Comps>
            <Comps>
              <L>
                <BsFillTelephoneFill />
              </L>
              <R>8135963695</R>
            </Comps>
            <Comps>
              <L>
                <TbClock />
              </L>
              <R>Monday to Saturday - 10:00 am to 5:00 pm</R>
            </Comps>
            <Comps>
              <L>
                <TbClock />
              </L>
              <R>Sunday - 10:00 am to 2:00 pm</R>
            </Comps>
          </Left>
          <Right>
            <ContactForm />
          </Right>
        </Wrapper>
        <Section />
      </Container1>
    </>
  );
};

export default ContactUs;
