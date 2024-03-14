import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { AuthContext } from "../components/Auth";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AllProducts from "./AllProducts";
import { device } from "./device";
import CategoryContext from "./CategoryContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Container = styled.div`
  background-color: #f5f7f9;
  height: auto;
  width: auto;
  margin-top: 7rem;
  padding-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.01rem solid #000;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    padding-right: 0rem;
    padding-left: 0px;
    overflow-x: hidden;
    margin-top: 0rem;
  }
`;
const Left = styled.div`
  width: 19%;
  text-align: center;
  align-items: center;
  padding-top: 15px;
  height: 38rem;
  display: flex;
  background-image: linear-gradient(
    to right top,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
  background-color: #fff;
  flex-direction: column;

  border-radius: 5px;
  // @media (max-width: 800px) {
  //   background-image: none;
  //   width: 100%;
  //   flex-direction: row;
  //   justify-content: space-between;
  //   height: auto;
  // }
  @media (max-width: 800px) {
    background-image: none;
    width: 100%;
    padding: 1rem;
    height: 100%;
  }
`;
const Menu = styled.div`
  justify-content: space-evenly;
  @media (max-width: 800px) {
    display: none;
    height: auto;
  }
`;
const ListItems = styled.li`
  color: #000000;
  list-style: none;
  font-weight: bold;
  padding: 5px;
  text-align: left;
  margin-bottom: 8px;
  font-family: "Roboto Slab", serif;s
`;
const NavLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-weight: bold;
  text-align: left;

  font-family: "Crimson Text", serif;
  font-family: "Roboto Slab", serif;
  &:hover {
    color: #5271ff;
  }
  &:active {
    color: #38b6ff;
  }
`;
const Right = styled.div`
  width: 80%;
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  @media (max-width: 800px) {
    overflow-x: hidden;

    width: 100%;
    justify-content: center;
    // margin-top: 2rem;
    align-items: center;
    padding: 0;
  }
  // @media ${device.laptop} {
  //   width: 75rem;
  // }
`;
const Div = styled.div`
  height: 10rem;
  width: 15rem;
  border-radius: 8px;
  text-items: center;
  display: flex;
  padding: 0.8rem;
  background-color: #fff;
  flex-direction: column;
  @media (max-width: 800px) {
    display: none;
  }
`;
const Title = styled.h3`
  font-weight: bold;
  font-family: "Roboto Slab", serif;
  @media (max-width: 800px) {
    margin-left: 0.5rem;
    font-family: "Open Sans";
    font-size: 2rem;
  }
`;
const ShowSort = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: flex;
  }
`;
const ShowCtaegoty = styled.div`
  display: none;
  @media (max-width: 800px) {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
const Store = () => {
  // console.log(categories.categories.category);
  // let c = categories.categories;
  const Navigate = useNavigate();
  const [sort, setSort] = useState("");

  // useEffect(() => {

  // }, []);
  return (
    <>
      <Navbar />
      <Container>
        <Left>
          <Menu>
            <Title>Categories</Title>
            <ListItems>
              <NavLink to="/store/">All Products</NavLink>
            </ListItems>
            <CategoryContext />
          </Menu>
          <Div>
            <Title>Sort Items</Title>
            <ListItems>
              <NavLink to="/store/sorthw/">Price---High To Low</NavLink>
            </ListItems>
            <ListItems>
              <NavLink to="/store/sortlw/">Price---Low To High</NavLink>
            </ListItems>
          </Div>
          <ShowSort>
            <ListItems>
              <NavLink to="/store/">|All Products|</NavLink>
            </ListItems>
            <ListItems>
              <NavLink to="/store/sorthw/">|High To Low|</NavLink>
            </ListItems>
            <ListItems>
              <NavLink to="/store/sortlw/">|Low To High|</NavLink>
            </ListItems>
          </ShowSort>
        </Left>
        <Right>
          {/* <ListItems>
              <NavLink to="/store/sorthw/">Price---High To Low</NavLink>
            </ListItems>
            <ListItems>
              <NavLink to="/store/sortlw/">Price---Low To High</NavLink>
            </ListItems> */}

          <Outlet />
        </Right>
        <ShowCtaegoty>
          <Title>Categories</Title>
          <ListItems>
            <NavLink to="/store/">All Products</NavLink>
          </ListItems>
          <CategoryContext />
        </ShowCtaegoty>
      </Container>
    </>
  );
};

export default Store;
