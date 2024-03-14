import React, { useEffect, useState } from "react";
import { database } from "./Firebase";
import { ref, get, child, onValue } from "firebase/database";
import styled from "styled-components";
import Ing from "../image/int.png";
import { Background } from "react-parallax";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5rem;
  justify-content: space-between;
  @media (max-width: 800px) {
    justify-content: space-evenly;
    padding-top: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (max-width: 740px) {
    flex-wrap: nowarp;
  }
`;
const Div = styled.div`
  width: 25rem;
  height: 24rem;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
  @media (max-width: 740px) {
    width: 25rem;
    height: 24rem;
    margin: 0.2rem;
    padding: 0.1rem;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.9;
  filter: brightness(55%);
`;
const Button = styled.button`
  background-color: #fff;
  border-style: none;
  font-size: 1.2rem;
  width: 8rem;
  margin-left: 2rem;
  margin-right: 2rem;
  font-weight: 400;
  color: #000;
  zindex: 1000;
  position: absolute;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  text-align: center;
  @media (max-width: 740px) {
    margin-left: 2rem;
    font-size: 1.4rem;
    width: 80%;
  }
`;
const Title = styled.h2`
  font-size: 1.3rem;
  margin: 1.8rem;
  opacity: 0.99;
  color: #fff;
  font-weight: 490;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;
const Links = styled(Link)`
  text-decoration: none;
  color: #000;
  &:hover {
    color: #000;
  }
`;
const Categories = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    let array = [];
    const dbRef = ref(database, "Category/");
    onValue(dbRef, (snapShot) => {
      snapShot.forEach((query) => {
        array.push(query.val());
      });
      setCategory(array);
    });
  }, []);

  return (
    <>
      <Container>
        {category.map((categorys) => {
          return (
            <Div className="x">
              <div
                style={{
                  backgroundImage: `url(${categorys.image})`,
                  backgroundSize: "cover",
                  height: "100%",
                  textAlign: "center",
                  padding: "2rem",
                  textAlign: "left",
                  opacity: "0.9",
                  zIndex: "-1",
                  filter: "brightness(50%)",
                  marginBottom: "-10rem",
                }}
              ></div>

              <Title>{categorys.category}</Title>
              <Button>
                <Links to={"/store/" + categorys.category}>SHOP NOW</Links>
              </Button>
            </Div>
          );
        })}
      </Container>
    </>
  );
};

export default Categories;
