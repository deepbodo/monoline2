// import React, { createContext } from "react";
// import { auth, database } from "./Firebase";
// import { ref, get, child, onValue } from "firebase/database";

// export const ProductContext = createContext();
// export const ProductContextProvider = () => {
//   state = {
//     products: [],
//   }
//   componentDidMount() {
//     const dbRef = ref(database, "Products");

//       onValue(dbRef, (snapshot) => {
//         snapshot.forEach((childSnapshot) => {
//           const childKey = childSnapshot.key;
//           const childData = childSnapshot.val();
//           console.log(childData);
//           console.log(childKey);
//         });
//       });
//   }

//   return <div>ProductContext</div>;
// };
