import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { database } from "./Firebase";
import { ref, set, onValue, remove, update } from "firebase/database";
import styled from "styled-components";
const Div = styled.div`
  height: 5rem;
  background-color: red;
  text-align: center;
`;
const CashOnDeliver = () => {
  var showdate = new Date();
  const Navigate = useNavigate();
  const { id, price } = useParams();
  const [amount, setAmount] = useState("");

  const array = [];
  var Uid =
    showdate.getFullYear() +
    "" +
    showdate.getMonth() +
    "" +
    showdate.getDate() +
    "" +
    showdate.getHours() +
    "" +
    showdate.getMinutes() +
    "" +
    showdate.getSeconds();
  var Time = showdate.getDate() + " @ " + showdate.getTime();

  const Move = () => {
    const starCountRef = ref(database, "Users/" + id + "/Personal Details/");
    onValue(starCountRef, (snapshot) => {
      const Data = snapshot.val();
      set(
        ref(database, "Orders/" + id + "/" + Uid + "/Personal Details/"),
        Data
      );
    });
    const starCountRef2 = ref(database, "Users/" + id + "/Address/");
    onValue(starCountRef2, (snapshot) => {
      const Data = snapshot.val();
      set(ref(database, "Orders/" + id + "/" + Uid + "/Address/"), Data);
    });
    const dbRef = ref(database, "Users/" + id + "/Cart/");
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        console.log(childSnapshot.val());
        set(
          ref(
            database,
            "Users/" + id + "/Orders/" + Uid + "/Items/" + childKey
          ),
          childData
        );
        const ord = ref(
          database,
          "Orders/" + id + "/" + Uid + "/Items" + "/" + childKey
        );
        set(ord, childData);
      });
    });
    update(ref(database, "Orders/" + id + "/" + Uid), {
      amount: price,
      date: Time,
      status: "confirmed",
      way: "Pay On Delivery",
    });

    update(ref(database, "Users/" + id + "/Orders/" + Uid), {
      amount: price,
      date: Time,
      status: "confirmed",
      way: "Pay On Delivery",
    });
    remove(ref(database, "Users/" + id + "/Cart_Amount/"));
    remove(ref(database, "Users/" + id + "/Cart/"));
    Navigate("/home/");
  };

  // const  Move = () => {
  //   set(ref(database, "Users/" + id + "/Orders/" + Uid + "/Items/"), {
  //     length,
  //   });
  //   // remove(ref(database, "Users/" + id + "/Cart/"));
  // };
  if (price === "0") {
    Navigate("/404");
  } else
    return (
      <Div>
        <button onClick={Move}>Click</button>
      </Div>
    );
};

export default CashOnDeliver;
