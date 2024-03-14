import React, { useState, useEffect, useContext } from "react";
import { auth, database } from "./Firebase";
import { ref, set, get, child, onValue } from "firebase/database";
const SizeBar = (productId) => {
  // const id = productId;
  console.log(productId);
  const array = [];
  const [sizes, setSize] = useState("");

  useEffect(() => {
    const dbRef = ref(database, "Product Size/" + productId.productId);
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((querry) => {
        const Size = querry.val();
        array.push(Size);
      });
      setSize(array);
    });
  }, []);

  return (
    <>
      <h1>heloo</h1>
      {sizes.map((result) => (
        <button value={result.sale} key={result.sizeId}>
          {result.size}
        </button>
      ))}
      ;
    </>
  );
};

export default SizeBar;
