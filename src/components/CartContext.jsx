import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { database } from "./Firebase";
import { ref, set, onValue } from "firebase/database";
import { BsCart3 } from "react-icons/bs";
import { AuthContext } from "../components/Auth";
import { Link, useNavigate } from "react-router-dom";
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
    width: 100%;
  }
`;
const CartContext = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <NavLink to={"/cart/" + currentUser.uid}>
      <BsCart3 size={31} />
    </NavLink>
  );
};

export default CartContext;
