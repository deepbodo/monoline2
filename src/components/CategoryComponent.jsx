import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Menu = styled.div`
  justify-content: space-evenly;
`;
const ListItems = styled.li`
  color: #000000;
  list-style: none;
  font-weight: bold;
  padding: 5px;
  text-align: left;
  margin-bottom: 8px;
`;
const NavLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-family: "Crimson Text", serif;
  font-family: "Roboto Slab", serif;
  &:hover {
    color: #5271ff;
  }
  &:active {
    color: #38b6ff;
  }
  @media (max-width: 800px) {
    font-weight: bold;
  }
`;
const CategoryComponent = (categories) => {
  console.log(categories);
  return (
    <>
      <ListItems>
        <NavLink to={"/store/" + categories.categories}>
          {categories.categories}
        </NavLink>
      </ListItems>
    </>
  );
};

export default CategoryComponent;
