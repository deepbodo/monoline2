import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Play from "../image/play.png";
import Int from "../image/int.png";
import Pnt from "../image/pnt.png";
import { device } from "./device";
import { AuthContext } from "./Auth";
const Container = styled.div`
  height: 400px;
  display: flex;
  padding: 40px;
  text-align: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    overflow-x: hidden;
    height: auto;
  }
  // @media ${device.laptop} {
  //   width: 70rem;
  //   flex-direction: column;
  //   align-items: center;
  //   height: auto;
  //   display: flex;
  //   padding: 5rem;
  //   text-align: center;
  //   align-items: center;
  //   justify-content: center;
  //   flex-direction: column;
  //   overflow-x: hidden;
  // }
`;
const Title = styled.h1`
  margin: 20px;
  font-size: 25px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;
const NavLink = styled(Link)`
  color: #000000;
  text-decoration: none;

  &:hover {
    color: #5271ff;
  }
  &:active {
    color: #38b6ff;
  }
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;
const QuickL = styled.div`
  width: 30%;
  margin-left: 40px;
  text-align: left;
  @media ${device.laptop} {
    width: 50rem;
    text-align: center;
    margin-left: 0px;
    margin-bottom: 20px;
  }
`;
const ForHer = styled.div`
  width: 30%;
  text-align: left;
  @media ${device.laptop} {
    width: 100%;
    text-align: center;
    margin-left: 0px;
    margin-bottom: 20px;
  }
`;
const ForHim = styled.div`
  width: 30%;
  text-align: left;
  @media ${device.laptop} {
    width: 100%;
    text-align: center;
    margin-left: 0px;
    margin-bottom: 20px;
  }
`;
const PlayLink = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    width: 50%;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;
const List = styled.li`
  list-style: none;
  margin-left: 25px;
  margin-bottom: 5px;
  @media (max-width: 800px) {
    margin-left: 0px;
    font-size: 1rem;
  }
`;
const PlayImg = styled.img`
  width: 60%;
`;
const PlayImg1 = styled.img`
  width: 15%;
  margin-top: 5rem;
`;
const Line = styled.hr`
  // @media ${device.laptop} {
  //   width: 70rem;
  // }
`;
const Div = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  @media (max-width: 800px) {
  }
  // @media ${device.laptop} {
  //   width: 70rem;
  //   height: 5rem;
  // }
`;
const P = styled.p`
  // margin: 110px;
  font-weight: bold;
  // @media ${device.laptop} {
  //   font-size: 2.5rem;
  // }
`;

const Footer = () => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return (
      <>
        <Container>
          <QuickL>
            <Title>Quick Links</Title>
            <NavLink to="/home/">
              <List>Home</List>
            </NavLink>
            <NavLink to="/store/">
              <List>Products</List>
            </NavLink>
            <NavLink to="/about">
              <List>About Us</List>
            </NavLink>
            <NavLink to="/contact">
              <List>Contact Us</List>
            </NavLink>
            <NavLink to="/privacy">
              <List>Privacy Policy</List>
            </NavLink>
            <NavLink to="/cancellation">
              <List>Cancellation Policy</List>
            </NavLink>
            <NavLink to="/terms">
              <List>Terms & Conditions</List>
            </NavLink>
            <NavLink to="/accountdetails">
              <List>My Account</List>
            </NavLink>

            {/* <List>
              <NavLink
                to={`cart/${currentUser.uid}/`}
                exact={true}
                activeClassName="active"
              >
                Cart
              </NavLink>
            </List> */}
          </QuickL>
          <ForHer>
            <Title>For Her</Title>
            <List>
              <NavLink to="/store/Women's%20Jeans">Women Jeans</NavLink>
            </List>
            <List>Women Jackets</List>
            <List>Women Bags</List>
          </ForHer>
          <ForHim>
            <Title>For Him</Title>
            <List>Coming Soon</List>
          </ForHim>
          <PlayLink>
            <PlayImg src={Play} />
            <PlayImg1 src={Int} />
            <PlayImg1 src={Pnt} />
          </PlayLink>
        </Container>
        <Line />
        <Div>
          <P>Copyright © 2022 Monoline</P>
          <P>Developed By Sane Infotech</P>
        </Div>
      </>
    );
  }
};

export default Footer;
