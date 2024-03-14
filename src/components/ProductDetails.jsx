import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { auth, database } from "./Firebase";
import { ref, get, child, onValue } from "firebase/database";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Container = styled.div`
  background-color: #f5f7f9;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 150px;
  padding-right: 150px;
`;
const ProductConatiner = styled.div`
  background-color: #fff;
  height: 100vh;
`;

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProducts] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  function GetCurrentProduct() {
    useEffect(() => {
      const productId = id;
      const dbRef = ref(database, "Product/" + productId);
      onValue(dbRef, (snapshot) => {
        setProducts(snapshot.val());
        console.log(snapshot.val());
      });
    }, []);
  }
  GetCurrentProduct();
  return (
    <>
      <Navbar />
      <Container>
        <ProductConatiner>
          <h1>Hello</h1>
          <h1>{product.name}</h1>
          <h2>{product.amount}</h2>
        </ProductConatiner>
      </Container>

      <Footer />
    </>
  );
};

export default ProductDetails;
