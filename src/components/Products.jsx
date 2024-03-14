import styled from "styled-components";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
const Card = styled.div`
  height: auto;
  width: 250px;
  margin-right: 20px;
  margin-left: 30px;
  margin-top: 50px;
  align-items: center;
  text-align: center;
  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    overflow-x: hidden;
    flex-direction: row;
    margin-right: 0rem;
    margin-left: 0rem;
    margin-top: 1rem;
  }
`;
const ProductImage = styled.img`
  width: 250px;
  height: 250px;
  @media (max-width: 800px) {
    width: 10rem;
    height: 80%;
  }
`;
const Title = styled.h1`
  color: black;
  text-align: left;
  font-size: 18px;
  margin-top: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 800px) {
    font-size: 0.9rem;
    white-space: normal;
    // overflow: hidden;
    text-overflow: initial;
  }
`;
const Para = styled.p`
  color: black;
  text-align: left;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;
const Price = styled.p`
  color: black;
  text-decoration: line-through;
  margin-right: 5px;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;
const Div = styled.div`
  display: flex;
`;
const Div1 = styled.div`
  text-align: left;
  @media (max-width: 800px) {
    margin-left: 0.5rem;
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
`;
const Products = (product, key) => {
  let p = product.product;
  // amount: "1499.00"
  // category: "Women's Bottomwear"
  // city: "dhubri"
  // image: "https://firebasestorage.googleapis.com/v0/b/monoline-815a2.appspot.com/o/Product%20First%20Image%2F1652026954139.null?alt=media&token=f4089d77-eba8-4495-a857-326b6bbe7152"
  // keyid: "20220508215238"
  // name: "Stretch Lounge"
  // sale: "999.00"
  // state: "assam
  return (
    <Card>
      <ProductImage src={p.image}></ProductImage>
      <NavLink to={`/store/${p.category}/${p.keyid}`}>
        <Div1>
          <Title>{p.name}</Title>
          <Para>{p.category}</Para>
          <Div>
            <Price>₹{p.amount}</Price>
            <Para>₹{p.sale}</Para>
          </Div>
        </Div1>
      </NavLink>
    </Card>
  );
};

export default Products;
