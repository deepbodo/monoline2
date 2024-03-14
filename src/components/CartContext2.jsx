// import React, { useEffect, useState, useContext } from "react";
// import { database } from "./Firebase";
// import { AuthContext } from "../components/Auth";
// import { ref, get, child, onValue } from "firebase/database";
// import Cart from "./Cart";
// export const CartContext = React.createContext();

// export const CartAmountProvider = ({ children }) => {
//   const { currentUser } = useContext(AuthContext);
//   const [currentAmount, setCurrentAmount] = useState([]);
//   const [length, setlength] = useState([]);
//   useEffect(() => {
//     const array = [];
//     const dbRef = ref(database, "Users/" + currentUser.uid + "/Cart/");
//     onValue(dbRef, (snapshot) => {
//       snapshot.forEach((childSnapshot) => {
//         const childData = childSnapshot.val();
//         array.push({ ...childData });
//       });
//       setlength(array);
//     });
//   }, []);

//   let total = length.reduce(
//     (prevTotal, nextElement) => prevTotal + nextElement.price,
//     0
//   );

//   //   setCurrentAmount(total);
//   return (
//     <CartContext.Provider value={{ total }}>{children}</CartContext.Provider>
//   );
// };
