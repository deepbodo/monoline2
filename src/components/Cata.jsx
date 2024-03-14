import React, { useState, useContext, useEffect } from "react";
import { auth, database } from "./Firebase";
import { ref, get, child, onValue } from "firebase/database";
import { useParams } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import { FaSearch } from "react-icons/fa";
import { device } from "./device";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    width: 100%;
  }
`;
const Div = styled.div`
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media (max-width: 800px) {
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    justify-content: center;
  }
`;
const Input = styled.input`
  width: 30%;
  padding: 10px;
  height: 35px;
  border: 2px solid #111d5e;
  border-radius: 10px 0 0 10px;
  border-right: none;
  // box-shadow: 0 0 10px #38b6ff;
  outline: none;
  font-size: 20px;
  // color: yellow;
  background: none;
  @media (max-width: 800px) {
    width: 14rem;
  }
`;
const Button = styled.button`
  text-align: center;
  height: 35px;
  width: 40px;
  outline: none;
  cursor: pointer;
  border: 2px solid #111d5e;
  border-radius: 0 10px 10px 0;
  // box-shadow: 0 0 10px #38b6ff;
  border-left: none;
  background: none;
  font-size: 20px;
  border-left: 4px solid #111d5e;
`;
const Div3 = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const Cata = () => {
  const [showPerPage, setShowPerPage] = useState(6);
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  let { categories } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = () => {
      let cloudData = [];
      const dbRef = ref(database, "Product Category Wise/" + categories);
      onValue(dbRef, (snapshot) => {
        // console.log(snapshot.val());
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          console.log(childData);
          cloudData.push({ ...childData });
        });
        setProducts(cloudData);
        console.log(products);
      });
    };

    getProducts();
  }, [categories]);
  return (
    <>
      <Container>
        <Div3>
          <Input
            type="text"
            placeholder="Search by name......"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button>
            <FaSearch />
          </Button>
        </Div3>
        <Div>
          {products
            .filter((user) =>
              user.name.toLowerCase().includes(search.toLowerCase())
            )
            .slice(pagination.start, pagination.end)
            .map((product) => {
              console.log(product);
              return <CategoryProduct product={product} key={product.keyid} />;
            })}
        </Div>
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={products.length}
        />
      </Container>
    </>
  );
};

export default Cata;
