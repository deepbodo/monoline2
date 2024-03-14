import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { device } from "./device";
import { database } from "./Firebase";
import { ref, set, onValue } from "firebase/database";
import { AuthContext } from "../components/Auth";
import { BiPlusMedical, BiMinus } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RelatedProducts from "./RelatedProducts";
const Container = styled.div`
  background-color: #f5f7f9;
  padding-top: 5rem;
  margin-top: 7rem;
  padding-bottom: 5rem;
  padding-left: 15rem;
  padding-right: 15rem;
  @media (max-width: 800px) {
    padding-left: 1rem;
    overflow-x: hidden;
    padding-right: 1rem;
    margin-top: 0rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;
const ProductConatiner = styled.div`
  background-color: #fff;
  height: 40rem;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;
const Left = styled.div`
  width: 60%;
  align-items: center;
  padding: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 40%;
  padding-top: 70px;
  @media (max-width: 800px) {
    width: 100%;
    padding: 1rem;
  }
`;
const Img = styled.img`
  width: 90%;
  margin-left: 0;
  @media (max-width: 800px) {
    overflow: hidden;
    position: realtive;
  }
`;
const Title = styled.h2`
  font-size: 2rem;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;
const Div = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
`;
const Para = styled.p`
  color: black;
  text-align: left;
  font-size: 30px;
`;
const Price = styled.p`
  color: black;
  text-decoration: line-through;
  margin-right: 5px;
  font-size: 30px;
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  background: transparent;
  color: #ffff;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 20px;
  @media (max-width: 800px) {
    margin-right: 0.3rem;
  }
`;
const Div1 = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
const Quantity = styled.p`
  font-size: 20px;
  margin-top: 15px;
  margin-right: 20px;
  @media (max-width: 800px) {
    margin-right: 0.3rem;
  }
`;
const Select = styled.select`
  border-color: #4175fc;
  font-size: 1rem;
  border-color: #4175fc;
  box-shadow: 0 0 10px #4175fc;
  border-radius: 1px;
  margin-top: 30px;
`;
const Option = styled.option`
  background-color: #4175fc;
  color: #fff;
`;
const Button2 = styled.button`
  background-color: #4175fc;
  color: white;
  font-size: 20px;
  border: none;
  font-family: "serif";
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  margin-top: 30px;
  cursor: pointer;
`;

const CategoryProductDetail = () => {
  const { currentUser } = useContext(AuthContext);
  let { id, categories } = useParams();
  const [product, setProducts] = useState("");
  const [getSize, setGetSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [sizeData, setSizeData] = useState([]);
  const [size, setSize] = useState("");
  const [prices, setPrice] = useState("");
  const [error, setErrorMsg] = useState("");
  const [description, setDescription] = useState("");
  const productId = id;
  const [length, setlength] = useState([]);
  function GetCurrentProduct() {
    //geting current product details from product category wise
    useEffect(() => {
      const dbRef = ref(database, "Product/" + productId);
      onValue(dbRef, (snapshot) => {
        setProducts(snapshot.val());
      });
    }, []);
  }
  GetCurrentProduct();
  function GetDescription() {
    useEffect(() => {
      //getting current product description from Product description
      const dbRef = ref(database, "Product Description/" + id);
      onValue(dbRef, (snapshot) => {
        snapshot.forEach((querry) => {
          const Data = querry.val().description;
          setDescription(Data);
        });
      });
    }, []);
  }
  GetDescription();
  let array = [];
  function GetProductSizeData() {
    useEffect(() => {
      // getting data from product size

      const dbRef = ref(database, "Product Size/" + productId);
      onValue(dbRef, (snapshot) => {
        snapshot.forEach((querry) => {
          const Size = querry.val();
          array.push(Size);
        });
        setSizeData(array);
      });
    }, []);
  }
  GetProductSizeData();
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };
  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };
  const handleSelect = (e) => {
    const selectedSize = e.target.value;
    if (selectedSize !== "0") {
      setGetSize(selectedSize);
      console.log(selectedSize);
    } else {
      alert("select size");
      console.log("error select size");
    }
  };
  let x = getSize.toString().split(" ");
  const price = x[1];
  const sizeId = x[2];
  const sizes = x[0];
  const AddToCart = () => {
    if (getSize.length > 11) {
      console.log(price);
      console.log(size);
      if (currentUser) {
        set(ref(database, "Users/" + currentUser.uid + "/Cart/" + productId), {
          image: product.image,
          name: product.name,
          keyid: product.keyid,
          real: product.amount * quantity,
          price: price * quantity,
          singlereal: price,
          singleprice: product.amount,
          size: sizes,
          sizeId: sizeId,
          quantity: quantity,
        });
        set(ref(database, "Users/" + currentUser.uid + "/Cart_Amount"), {
          amount: total,
        });
        window.location.reload();
      } else {
        alert("Unable to Add to Cart!SignIn");
      }
    } else {
      toast.warn(
        "🦄 Select Size!",
        { containerId: "A" },
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
    setErrorMsg("");
  };
  function GetAmount() {
    useEffect(() => {
      const arrayx = [];
      const dbRef = ref(database, "Users/" + currentUser.uid + "/Cart/");
      onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          arrayx.push({ ...childData });
        });
        setlength(arrayx);
      });
    }, []);
  }
  GetAmount();
  let total = length.reduce(
    (prevTotal, nextElement) => prevTotal + nextElement.price,
    0
  );
  useEffect(() => {
    set(ref(database, "Users/" + currentUser.uid + "/Cart_Amount"), {
      amount: total,
    });
  }, [total]);
  return (
    <>
      <Navbar />
      <Container>
        <ProductConatiner>
          <Left>
            <Img src={product.image} />
          </Left>
          <Right>
            <Title>{product.name}</Title>
            <p>{categories}</p>
            <Div>
              <Price>{product.amount}</Price>
              <Para>{price || product.sale}</Para>
              {/* <p defaultValue={prices}>{price}</p> */}
            </Div>
            <Div1>
              <Button onClick={handleDecrement}>
                <BiMinus size={25} color={"black"} />
              </Button>
              <Quantity>{quantity}</Quantity>
              <Button onClick={handleIncrement}>
                <BiPlusMedical size={25} color={"black"} />
              </Button>
            </Div1>
            <Select defaultValue="hello" onChange={handleSelect}>
              <Option value={product.xx}>Select Size</Option>
              {sizeData.map((result) => (
                <Option
                  value={`${result.size} ${result.sale} ${result.sizeId}`}
                  key={result.sizeId}
                  default="select size"
                >
                  {result.size}@{result.sale}
                </Option>
              ))}
            </Select>
            <p>{error}</p>

            <Button2 onClick={AddToCart}>ADD TO CART</Button2>
          </Right>
        </ProductConatiner>
        <RelatedProducts />
        <ToastContainer enableMultiContainer containerId={"A"} />
        <ToastContainer
          enableMultiContainer
          containerId={"B"}
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    </>
  );
};

export default CategoryProductDetail;
