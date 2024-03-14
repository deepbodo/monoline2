import React, { useState, useContext, useEffect } from "react";
import { auth, database } from "./Firebase";
import { ref, get, child, onValue } from "firebase/database";
import { AuthContext } from "../components/Auth";
import Products from "./Products";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

// import "bootstrap/dist/css/bootstrap.css";
const Div = styled.div`
  align-items: center;
  text-align: center;
  // justify-content: center;
  // flex-direction: row;
  // align-items: center;
  // width: 100%;
  // background-color: transparent;
  // color: white;
  // font-size: 4em;
`;
const Img = styled.img`
  width: 100%;
  height: 90vh;
  @media (max-width: 800px) {
    width: 100%;
    height: auto;
  }
`;

const Listing = () => {
  const { currentUser } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = () => {
      let cloudData = [];
      const dbRef = ref(database, "List_1/");
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
        <Carousel variant="dark" id="listing">
          {products.map((product) => (
            <Carousel.Item interval={1000}>
              <Link to={"/store/" + product.category}>
                <Div>
                  <Img src={product.image} />
                </Div>
              </Link>
            </Carousel.Item>
          ))}
          {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
        </Carousel>
      </>
    );
  }
};

export default Listing;
