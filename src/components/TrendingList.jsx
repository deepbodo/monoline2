import React, { useState, useContext, useEffect } from "react";
import { auth, database } from "./Firebase";
import { ref, get, child, onValue } from "firebase/database";
import { AuthContext } from "../components/Auth";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
const Div = styled.div`
  text-alingn: center;
  width: 70rem;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  height: auto;
  width: 250px;
  margin-right: 20px;
  margin-left: 30px;
  margin-top: 50px;
  align-items: center;
  text-align: center;
  // @media (max-width: 800px) {
  //   width: 100%;
  //   display: flex;
  //   overflow-x: hidden;
  //   flex-direction: row;
  //   margin-right: 0rem;
  //   margin-left: 0rem;
  //   margin-top: 1rem;
  // }
`;
const ProductImage = styled.img`
  width: 250px;
  height: 250px;
  // @media (max-width: 800px) {
  //   width: 10rem;
  //   height: 80%;
  // }
`;
const Title = styled.h1`
  color: black;
  text-align: left;
  font-size: 18px;
  margin-top: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  // @media (max-width: 800px) {
  //   font-size: 0.9rem;
  //   white-space: normal;
  //   // overflow: hidden;
  //   text-overflow: initial;
  // }
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
  // @media (max-width: 800px) {
  //   font-size: 1rem;
  // }
`;
const Div3 = styled.div`
  display: flex;
`;
const Div1 = styled.div`
  text-align: left;
  // @media (max-width: 800px) {
  //   margin-left: 0.5rem;
  // }
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

const breakPoints = [
  { width: 10, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const TrendingList = () => {
  const { currentUser } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = () => {
      let cloudData = [];
      const dbRef = ref(database, "Trending List/");
      onValue(dbRef, (snapshot) => {
        console.log(snapshot.val());
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          console.log(childSnapshot.val());
          cloudData.push({ ...childData });
        });
        setProducts(cloudData);
      });
    };

    getProducts();
  }, []);
  if (currentUser) {
    return (
      <>
        <Div>
          <Carousel breakPoints={breakPoints}>
            {products.map((p) => {
              return (
                <Card>
                  <ProductImage src={p.image}></ProductImage>
                  <NavLink to={`/store/${p.category}/${p.keyid}`}>
                    <Div1>
                      <Title>{p.name}</Title>
                      <Para>{p.category}</Para>
                      <Div3>
                        <Price>₹{p.amount}</Price>
                        <Para>₹{p.sale}</Para>
                      </Div3>
                    </Div1>
                  </NavLink>
                </Card>
              );
            })}
          </Carousel>
        </Div>
      </>
    );
  }
};

export default TrendingList;
