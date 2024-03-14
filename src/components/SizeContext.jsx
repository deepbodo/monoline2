// import React, { useState, useEffect, useContext } from "react";
// import styled from "styled-components";
// import { auth, database } from "./Firebase";
// import { ref, set, get, child, onValue } from "firebase/database";
// import SizeBar from "./SizeBar";
// import CategoryProductSizePrice from "./CategoryProductSizePrice";
// const Div = styled.div`
//   display: flex;
// `;

// const SizeContext = (productId, props) => {
//   console.log(productId.productId);
//   const [size, setSize] = useState([]);
//   const Id = productId.productId;
//   useEffect(() => {
//     const sizeArray = [];
//     const dbRef = ref(database, "Product Size/" + Id);
//     onValue(dbRef, (snapshot) => {
//       // console.log(snapshot.val());
//       snapshot.forEach((querry) => {
//         //   const childKey = childSnapshot.key;
//         const Size = querry.val();
//         sizeArray.push(Size);
//         console.log(sizeArray);
//         // setSize(Size);
//       });
//       setSize(sizeArray);
//       console.log(size);
//     });
//   }, []);
//   return (
//     <Div>
//       <p>Available Sizes Are:</p>
//       {size.map((sizes) => {
//         console.log(sizes);
//         return <SizeBar sizes={sizes} key={sizes.sizeId} />;
//       })}
//     </Div>
//   );
// };

// export default SizeContext;
