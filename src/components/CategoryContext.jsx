import React, { useState, useContext, useEffect } from "react";
import { auth, database } from "./Firebase";
import { ref, get, child, onValue } from "firebase/database";
import Store from "./Store";
import CategoryComponet from "./CategoryComponent";
const CategoryContext = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategory = () => {
      let cloudData = [];
      const dbRef = ref(database, "Category/");
      onValue(dbRef, (snapshot) => {
        // console.log(snapshot.val());
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          // console.log(childData.category);
          cloudData.push(childData.category);
          //   cloudData.push({ ...childData });
        });
        setCategory(cloudData);
        // console.log(category);
      });
    };

    getCategory();
  }, []);
  return (
    <>
      {category.map((categories) => {
        console.log(categories);
        return <CategoryComponet categories={categories} />;
      })}
    </>
  );
};

export default CategoryContext;
