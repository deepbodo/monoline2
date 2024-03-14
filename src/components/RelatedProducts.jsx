import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { database } from "./Firebase";
import { ref, set, onValue, query, limitToLast } from "firebase/database";
import CategoryProduct from "./CategoryProduct";
import RelatedProductList from "./RelatedProductList";
import { device } from "./device";
import Products from "./Products";
import Carousel from "react-multi-carousel";
import styled from "styled-components";
import "react-multi-carousel/lib/styles.css";
const Line = styled.hr`
  @media ${device.laptop} {
    width: 70rem;
  }
`;
const Wrap = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  background-color: #fff;
`;
const Title3 = styled.h1`
  margin-left: 2rem;
  font-size: 2rem;
  position: realtive;
  @media (max-width: 800px) {
    margin-left: 0.5rem;
  }
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Card = styled.div`
  height: auto;
  width: 280px;
  margin-right: 20px;
  margin-left: 30px;
  margin-top: 50px;
  align-items: center;
  text-align: center;
`;
const ProductImage = styled.img`
  width: 300px;
  height: 350px;
`;
const Title = styled.h1`
  color: black;
  text-align: left;
  font-size: 18px;
  margin-top: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Para = styled.p`
  color: black;
  text-align: left;
`;
const Price = styled.p`
  color: black;
  text-decoration: line-through;
  margin-right: 5px;
`;
const Div = styled.div`
  display: flex;
`;
const Div1 = styled.div`
  text-align: left;
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
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5,
  },
};
const RelatedProducts = () => {
  const { id, categories } = useParams();
  const x = id;
  const [products, setProducts] = useState([]);
  function GetCurrentProduct() {
    //geting current product details from product category wise
    useEffect(() => {
      let cloudData = [];
      const dbRef = query(
        ref(database, "Product Category Wise/" + categories),
        limitToLast(3)
      );
      onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          cloudData.push({ ...childData });
        });

        setProducts(cloudData);
      });
    }, []);
  }
  GetCurrentProduct();

  return (
    <>
      <Wrap>
        <Title3>Related Products</Title3>
        <Container>
          {products.map((product) => {
            return (
              <Card>
                <NavLink
                  to={`/store/${product.category}/` + product.keyid}
                  target="_blank"
                >
                  <ProductImage src={product.image}></ProductImage>
                  <Div1>
                    <Title>{product.name}</Title>
                    <Para>{product.category}</Para>
                    <Div>
                      <Price>₹{product.amount}</Price>
                      <Para>₹{product.sale}</Para>
                    </Div>
                  </Div1>
                </NavLink>
              </Card>
            );
          })}
        </Container>
      </Wrap>
    </>
  );
};

export default RelatedProducts;
