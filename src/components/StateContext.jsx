// import React, { useContext, useEffect, useState } from "react";
// import { auth, database } from "./Firebase";
// import {
//   ref,
//   get,
//   child,
//   onValue,
//   query,
//   limitToFirst,
// } from "firebase/database";
// import { AuthContext } from "./Auth";
// const StateContext = () => {
//   const {currentUser} = useContext(AuthContext);
//   const [state, setState] = useState([]);
//   //   useEffect(() => {
//   //     let array = [];
//   //     const dbRef = ref(
//   //       database,
//   //       "Users/" + currentUser.uid + "/Personal Details/"
//   //     );
//   //     onValue(dbRef, (snapshot) => {
//   //       snapshot.forEach((querry) => {
//   //         const Size = querry.val();
//   //         array.push(Size);
//   //       });
//   //       setState(array);
//   //     });
//   //   }, []);
//   return <div>StateContext</div>;
// };

// export default StateContext;
