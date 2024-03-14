import React, { useState, useEffect, useContext, useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import { auth, database } from "./Firebase";
import { ref, get, child, onValue, set } from "firebase/database";
import styled from "styled-components";
import CartItems from "./CartItems";
import { AuthContext } from "../components/Auth";
import Summary from "./Summary";
import NavbarCart from "./NavbarCart";
import Footer from "./Footer";

const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #f5f7f9;
  padding-left: 70px;
  padding-right: 70px;
  margin-top: 7rem;
  @media (max-width: 800px) {
    margin-top: 0rem;
  }
`;

const Image = styled.img`
  height: 550px;
  width: 550px;
`;
const Title = styled.p`
  font-size: 27px;
  margin-left: 20px;
  color: #5271ff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  letter-spacing: 2px;
  word-spacing: 2px;
  font-weight: normal;
  text-decoration: underline;
  text-decoration-style: none;
  text-decoration-color: black;
  text-decoration-thickness: 1.5px;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
    transition-duration: 0.5s;
  }
`;
const Title2 = styled.h2`
  font-size: 23px;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  letter-spacing: 2px;
  margin-top: 2rem;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Container2 = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
  padding: 25px;
`;
const SummaryDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 3rem;
  paddin-right: 3rem;
  justify-content: space-around;
`;
const Flexer = styled.div`
  width: 40%;
  font-size: 2rem;
  align-items: center;
  text-align: center;
`;
const Div2 = styled.div`
  width: 57%;
  padding-left: 4rem;
  align-items: center;
  display: flex;
  justify-content: space-around;
`;
const H = styled.h2`
  font-size: 1.7rem;
  align-items: center;
  font-family: serif;
  text-align: center;
`;
const Hr = styled.div`
  width: 97%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  height: 0.3px;
  background-color: #000c;
`;
const Button = styled.button`
  background-color: #4175fc;
  border-style: none;
  font-size: 1.2rem;
  width: 10rem;
  font-weight: 400;
  color: #000;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  text-align: center;
`;
const P = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-left: auto;
`;
const Cart = () => {
  const { id } = useParams();
  const [length, setlength] = useState([]);
  function GetCart() {
    useEffect(() => {
      // const productId = id;
      const array = [];
      var price = 0;
      const dbRef = ref(database, "Users/" + id + "/Cart/");
      onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          array.push({ ...childData });
        });

        setlength(array);
      });
    }, []);
  }
  GetCart();
  let total = length.reduce(
    (prevTotal, nextElement) => prevTotal + nextElement.price,
    0
  );
  useEffect(() => {
    set(ref(database, "Users/" + currentUser.uid + "/Cart_Amount"), {
      amount: total,
    });
  }, [total]);
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return (
      <>
        <NavbarCart />
        {length.length ? (
          <Container>
            <Div>
              {/* <Title>Cart Items!</Title>
            <Title>Remove All!</Title> */}
            </Div>
            <Container2>
              <Wrapper>
                <SummaryDiv>
                  <Flexer>
                    <H>Product</H>
                  </Flexer>
                  <Div2>
                    <H>Size</H>
                    <H>Quantity</H>
                    <H>Price</H>
                    <H>Remove</H>
                  </Div2>
                </SummaryDiv>
                <Hr />
                {length.map((result) => {
                  return <CartItems key={result.keyId} result={result} />;
                })}
                <P>
                  <Button>
                    <Link
                      to={`/checkout/${currentUser.uid}/`}
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      PROCEED
                    </Link>
                  </Button>
                </P>
              </Wrapper>
            </Container2>
          </Container>
        ) : (
          <Container>
            <h1>Your Cart is Empty</h1>
          </Container>
        )}
      </>
    );
  }
};

export default Cart;
