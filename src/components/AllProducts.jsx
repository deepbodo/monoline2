import React, { useState, useContext, useEffect } from "react";
import { auth, database } from "./Firebase";
import { ref, get, child, onValue } from "firebase/database";
import { AuthContext } from "../components/Auth";
import styled from "styled-components";
import Products from "./Products";
import { Link, useNavigate } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import Pagination from "../components/Pagination";
import { device } from "./device";
import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Div = styled.div`
  margin-left: 20px;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
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
const Div2 = styled.div`
  // display: flex;
  width: 100%;
  padding: 10px;
  // justify-content: space-between;
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
const NavLink = styled(Link)``;
const AllProducts = () => {
  const [showPerPage, setShowPerPage] = useState(9);
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = () => {
      let cloudData = [];
      const dbRef = ref(database, "Product");
      onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();

          cloudData.push({ ...childData });
        });
        setProducts(cloudData);
      });
    };

    getProducts();
  }, []);
  // const sortedProducts = products.sort((a, b) => a.sale - b.sale);
  // console.log(sortedProducts);
  // function sortedProducts() {
  //   products.sort((a, b) => a.sale - b.sale);
  //   return products;
  // }

  const { currentUser } = useContext(AuthContext);
  const Navigate = useNavigate();
  if (!currentUser) {
    {
      return <NotFoundPage />;
    }
  }

  // const searchItems = (searchValue) => {
  //   setSearchInput(searchValue);
  //   if (searchInput == "") {
  //     const filteredData = products.filter((item) => {
  //       return Object.values(item)
  //         .join("")
  //         .toLowerCase()
  //         .includes(searchInput.toLowerCase());
  //     });
  //     setFilteredResults(filteredData);
  //   } else {
  //     setFilteredResults(products);
  //   }
  // };
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
        {/* <button onClick={sortedProducts}>Sort</button> */}
        <Div>
          {products
            .filter((user) =>
              user.name.toLowerCase().includes(search.toLowerCase())
            )
            .slice(pagination.start, pagination.end)
            .map((product) => {
              console.log(product);
              return <Products product={product} productId={product.keyId} />;
            })}
        </Div>
        <Div2>
          <Pagination
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            total={products.length}
          />
        </Div2>
      </Container>
    </>
  );
};

export default AllProducts;
