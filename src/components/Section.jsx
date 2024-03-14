import React from "react";
import styled from "styled-components";
import World from "../image/w.png";
import Quality from "../image/quality.png";
import Offer from "../image/offer.png";
import Lock from "../image/lock-free-img.png";
import { device } from "./device";

const Container = styled.div`
  flex-direction: row;
  height: 350px;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  display: flex;
  padding: 20px;
  width: 100%;
  background-color: #fff;
  @media (max-width: 800px) {
    height: auto;

    overflow-x: hidden;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const Icon = styled.img`
  width: 20%;
`;
const Cont1 = styled.div`
  width: 300px;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 0px;
  @media ${device.laptop} {
    margin-bottom: 50px;
  }
`;
const Cont2 = styled.div`
  width: 300px;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 0px;
  @media ${device.laptop} {
    margin-bottom: 50px;
  }
`;

const Cont3 = styled.div`
  width: 300px;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 0px;
  @media ${device.laptop} {
    margin-bottom: 50px;
  }
`;
const Cont4 = styled.div`
  width: 300px;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 50px;
  @media ${device.laptop} {
    margin-bottom: 0px;
  }
`;
const Title = styled.h1`
  margin: 18px;
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  font-weight: bold;
`;
const P = styled.p`
  font-size: 15px;
`;
const Section = () => {
  return (
    <Container>
      <Cont1>
        <Icon src={World} />
        <Title>Worldwide Shipping</Title>
        <P>We ship our products to every city of India</P>
      </Cont1>
      <Cont2>
        <Icon src={Quality} />
        <Title>Best Quality</Title>
        <P>All products are manufactured by mainly focusing on quality</P>
      </Cont2>
      <Cont3>
        <Icon src={Offer} />
        <Title>Best Offer</Title>
        <P>
          You will only see deserving price of our products, neither too much
          high nor too much low
        </P>
      </Cont3>
      <Cont4>
        <Icon src={Lock} />
        <Title>Secure Payments</Title>
        <P>All payment methods are secured by SSL Protection</P>
      </Cont4>
    </Container>
  );
};

export default Section;
