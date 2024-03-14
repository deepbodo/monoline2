import React, { useState, useEffect, useContext } from "react";
import { auth, database } from "./Firebase";
import EditAddress from "./EditAddress";
import {
  ref,
  get,
  child,
  onValue,
  query,
  limitToFirst,
} from "firebase/database";
import styled from "styled-components";
import { AuthContext } from "../components/Auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AvataR from "../image/avatar.png";
import { device } from "./device";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Div = styled.div`
  align-items: center;
  text-align: center;
  padding-left: 8rem;
  padding-right: 8rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  margin-top: 7rem;
  // background-color: #f5f7f9;
  background-color: #e8e8e8;
  height: auto;
  @media (max-width: 800px) {
    overflow-x: hidden;
    padding: 8px;
    padding: 0;
    flex-direction: column;
    margin-top: 0rem;
  }
`;
// const ProfileContainer = styled.div`
//   height: auto;
//   width: 30%;
//   padding: 40px;
//   background-color: #ffff;
//   // background-image: linear-gradient(
//   //   to bottom,
//   //   #0f54ff,
//   //   #008dff,
//   //   #00b7ff,
//   //   #00dbff,
//   //   #00fbff
//   // );
//   border-radius: 0px;
//   @media (max-width: 800px) {
//     height: auto;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background-color: transparent;
//   }
// `;
const Title = styled.h1`
  // color: #db00ff;
  color: #000;
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  // margin-left: 30px;
  font-family: "Roboto Slab", serif;
  @media (max-width: 800px) {
    text-align: center;
    font-size: 1.5rem;
    margin-left: 0px;
  }
`;
// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   @media (max-width: 800px) {
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//   }
// `;
const Left = styled.div`
  padding: 20px;
  width: 30%;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35rem;
  box-shadow: 2px 2px 10px #4175fc;
  flex-direction: column;
  background-color: #ffff;
  @media (max-width: 800px) {
    align-items: center;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 0px;
  }
`;

const Avatar = styled.img`
  vertical-align: middle;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  @media (max-width: 800px) {
    text-align: center;
    width: 5rem;
    height: 5rem;
  }
`;
const Right = styled.div`
  width: 65%;
  display: flex;
  justify-content: space-between;

  padding: 20px 20px 20px 20px;
  height: auto;

  flex-direction: column;
  background-color: #ffff;
  @media (max-width: 800px) {
    align-items: center;
    width: 100%;
    height: auto;
  }
`;
const Label = styled.p`
  color: black;
  text-align: left;
  // margin-left: 20px;
  font-size: 25px;
  margin-top: 10px;
  font-family: "serif";
  margin-bottom: 2px;
  @media (max-width: 800px) {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 1px;
  }
`;
const Details = styled.div`
  // border-style: solid;
  // margin-left: 20px;
  font-size: 1.4rem;
  text-align: center;
  // padding-left: 10px;
  padding-top: 1px;
  padding-bottom: 1px;
  overflow: hidden;
  width: auto;
  // border-radius: 10px;
  border-color: #000;
  font-family: "Roboto Slab", serif;
  position: relative;
  @media (max-width: 800px) {
    font-size: 1.5rem;
    text-align: center;
    padding: 0;
    align-items: center;
    margin-left: 0px;
    width: 15em;
  }
`;
const Button = styled.button`
  background-color: #4175fc;
  border-style: none;
  font-size: 1rem;
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  color: #fff;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  tetx-align: center;
`;
const Address = styled.div`
  border: 1px solid;
  padding: 1rem;
  width: 100%;
  margin-top: 1rem;
`;
const MyOrders = styled.div`
  border: 1px solid;
  padding: 1rem;
  margin-top: 1rem;
  width: 100%;
`;
const P = styled.p`
  text-align: right;
  font-size: 1rem;
  color: #000;
  font-weight: bold;
  letter-spacing: 0.1rem;
  cursor: pointer;
  font-family: "Roboto Slab", serif;
`;
const OrdId = styled.p`
  letter-spacing: 0.2rem;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
  font-family: "Roboto Slab", serif;
`;
const NavLink = styled(Link)`
  text-decoration: none;
`;
const AccountDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [userid, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhoneNumber] = useState("");
  const [avatar, setAvatar] = useState("");
  const [apartment, setApartment] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [houseno, setHouseno] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");
  const [road, setRoad] = useState("");
  const [state, setState] = useState("");
  const [orders, setOrder] = useState([]);
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState("");
  useEffect(() => {
    if (currentUser) {
      setUserId(currentUser.uid);
      const starCountRef = ref(
        database,
        "Users/" + currentUser.uid + "/Personal Details/"
      );
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          setUserName(snapshot.val().name);
          setAvatar(snapshot.val().avatar);
          setPhoneNumber(snapshot.val().phone);
          setEmail(snapshot.val().email);
          // console.log(snapshot.val());
        }
      });
    }
  }, [currentUser]);
  useEffect(() => {
    if (currentUser) {
      setUserId(currentUser.uid);
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
          // console.log(snapshot.val());
        }
      });
    }
  }, [currentUser]);
  useEffect(() => {
    let cloudData = [];
    if (currentUser) {
      setUserId(currentUser.uid);
      const starCountRef = query(
        ref(database, "Users/" + currentUser.uid + "/Orders/"),
        limitToFirst(2)
      );
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.key;
            // console.log(childSnapshot.key);
            cloudData.push(childSnapshot.key);
          });
          setOrder(cloudData);
          console.log(orders);
        }
      });
    }
  }, [currentUser]);
  const Navigate = useNavigate();
  useEffect(() => {
    let cloudData = [];
    if (currentUser) {
      setUserId(currentUser.uid);
      const starCountRef = ref(database, "Users/" + currentUser.uid + "/Cart/");

      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            cloudData.push({ ...childSnapshot.val() });
          });
        }
        setCart(cloudData);
      });
    }
  }, [currentUser]);
  useEffect(() => {
    if (currentUser) {
      setUserId(currentUser.uid);
      const starCountRef = ref(
        database,
        "Users/" + currentUser.uid + "/Cart_Amount/"
      );
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          setAmount(snapshot.val().amount);
        }
      });
    }
  }, [currentUser]);
  const clickLogin = () => {
    if (currentUser) {
      signOut(auth);
      Navigate("/");
    }
  };
  if (currentUser) {
    return (
      <>
        <Navbar />
        <Div>
          {/* <Wrapper> */}
          <Left>
            <Title>Personal Details</Title>
            <Avatar src={AvataR} />
            <Label>Name:</Label>
            <Details>{userName}</Details>
            <Label>Email:</Label>
            <Details>{email}</Details>
            <Label>Phone:</Label>
            <Details>{Phone}</Details>
            <Button onClick={clickLogin}>LOG OUT</Button>
          </Left>

          <Right>
            <Address>
              <Label>
                Address: {apartment},{area}, {road},{pincode}, {city},{state}{" "}
              </Label>
              <P onClick={() => setIsOpen(true)}>Edit....</P>
              <EditAddress open={isOpen} onClose={() => setIsOpen(false)} />

              {/* <Details>
                {apartment},{area},{city},{pincode}......
              </Details> */}
            </Address>
            <MyOrders>
              <Label>My Orders:</Label>
              {orders.map((order, key) => {
                return <OrdId key={order}>Order ID: {order}</OrdId>;
              })}
              <P>Check All Orders...</P>
            </MyOrders>
            <MyOrders>
              <Label>My Cart</Label>
              <OrdId>Total Items: {cart.length}</OrdId>
              <OrdId>Cart Amount: ₹{amount}.00</OrdId>
              <NavLink to={"/cart/" + currentUser.uid}>
                <P>More Details...</P>
              </NavLink>
            </MyOrders>
          </Right>
        </Div>
      </>
    );
  } else {
    Navigate("/");
  }
};

export default AccountDetails;
