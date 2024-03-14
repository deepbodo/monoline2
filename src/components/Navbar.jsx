import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Log from "../image/monlogo.png";
import { MdAccountCircle } from "react-icons/md";
import CartContext from "./CartContext";
import { BsCart3 } from "react-icons/bs";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/Auth";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  if (currentUser) {
    return (
      <Nav>
        <Img src={Log} />
        <TitleLogo>MONOLINE</TitleLogo>

        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <NavLink to="/home/">HOME</NavLink>

          <NavLink to="/store">STORE</NavLink>

          <NavLink to="/about/">ABOUT US</NavLink>

          <NavLink to="/contact">CONTACT US</NavLink>

          <NavLink to={"/cart/" + currentUser.uid}>
            <BsCart3 size={31} />
          </NavLink>

          <NavLink to="/accountdetails">
            <MdAccountCircle size={30} />
          </NavLink>
        </Menu>
      </Nav>
    );
  }
};

export default Navbar;

const NavLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;

  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: 1rem;

  font-family: "Libre Baskerville", serif;
  font-weight: bold;
  &:hover {
    color: #000;
  }
  @media (max-width: 800px) {
    width: 100%;
    color: #000;
    padding: 0.6rem;
    margin-top: 0.5rem;
  }
`;
const TitleLogo = styled.h2`
  display: none;

  @media (max-width: 800px) {
    font-size: 1.5rem;
    display: block;
    font-weight: bold;
  }
`;
const Hr = styled.hr`
  display: none;
  @media (max-width: 800px) {
    display: flex;
    letter-spacing: 30%;
    color: #000;
    width: 100%;
    margin: 0;
  }
`;
const Nav = styled.div`
  padding: 0 8rem;
  display: flex;
  height: 6rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  // background: transparent;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  @media (max-width: 800px) {
    background: #fff;
    padding: 0rem 1rem;
    position: relative;
    height: auto;
  }
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  @media (max-width: 800px) {
    display: flex;
    color: #000;
    align-items: center;
    text-decoration: none;
  }
`;
const Img = styled.img`
  width: 50%;
  @media (max-width: 800px) {
    width: 30%;
  }
`;
const Menu = styled.div`
  display: flex;

  align-items: center;
  // position: relative;
  @media (max-width: 800px) {
    overflow-x: hidden;
    padding: 0rem;
    background: #fff;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
  span {
    height: 4px;
    width: 28px;
    background: #000;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 800px) {
    display: flex;
  }
`;
