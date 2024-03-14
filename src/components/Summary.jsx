import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { auth, database } from "./Firebase";
import { ref, get, child, set, onValue } from "firebase/database";
import styled from "styled-components";
import { AiOutlineReload } from "react-icons/ai";
import { AuthContext } from "../components/Auth";
import CashOnDeliver from "./CashOnDeliver";

const Div = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-right: 5rem;
  padding-left: 5rem;
`;
const Title2 = styled.h2`
  font-size: 23px;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  letter-spacing: 2px;
  margin-top: 2rem;
`;
const Title1 = styled.h2`
  font-size: 26px;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  letter-spacing: 2px;
  margin-top: 2rem;
`;
const Button = styled.button`
  border: none;
  margin-top: 1.5rem;
`;
const AddressWrapper = styled.div`
  background-color: #fff;
  height: auto;
  padding: 1rem;
  width: 50rem;
  padding-bottom: 1rem;
  border: 0.1rem solid;
`;
const Div2 = styled.div`
  border: 0.1rem solid;
  height: 5rem;
  width: 50rem;
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Summary = () => {
  const [apartment, setApartment] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [houseno, setHouseno] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");
  const [road, setRoad] = useState("");
  const [state, setState] = useState("");
  const { currentUser } = useContext(AuthContext);
  var price = 0;
  var real = 0;
  const [length, setlength] = useState([]);
  // const productId = id;
  useEffect(() => {
    const array = [];
    const dbRef = ref(database, "Users/" + currentUser.uid + "/Cart/");
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        array.push({ ...childData });
      });

      setlength(array);
    });
  }, []);

  length.map((result) => {
    price += result.singlereal * result.quantity;
    real += result.singleprice * result.quantity;
  });
  useEffect(() => {
    if (currentUser) {
      const starCountRef = ref(
        database,
        "Users/" + currentUser.uid + "/Address/"
      );
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          setApartment(snapshot.val().apartment);
          setArea(snapshot.val().area);
          setCity(snapshot.val().city);
          setHouseno(snapshot.val().houseno);
          setPincode(snapshot.val().pincode);
          setRoad(snapshot.val().road);
          setLandmark(snapshot.val().landmark);
          setState(snapshot.val().state);
          console.log(snapshot.val());
        }
      });
    }
  }, [currentUser]);
  if (length.length > 0) {
    return (
      <>
        <Div>
          <u>
            <Title1>Price Details</Title1>
          </u>
          <Title2>Total MRP:-------₹ {real}</Title2>
          <Title2>Discount on MRP:-₹ {price}</Title2>
          <AddressWrapper>
            <u>
              <Title1>Address Details</Title1>
            </u>
            <Title2>Apartment:{apartment}</Title2>
            <Title2>Area:{area}</Title2>
            <Title2>City:{city}</Title2>
            <Title2>House No:{houseno}</Title2>
            <Title2>Landmark:{landmark}</Title2>
            <Title2>Pincode:{pincode}</Title2>
            <Title2>Road:{road}</Title2>
            <Title2>State:{state}</Title2>
          </AddressWrapper>
          <Div2>
            <Link to={`/checkout/${currentUser.uid}/${price}`}>
              Pay On Delivery
            </Link>
            <Button>Pay Online</Button>
          </Div2>
        </Div>
      </>
    );
  }
};

export default Summary;
