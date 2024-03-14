import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { BiPlusMedical, BiMinus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useParams } from "react-router-dom";

import { database } from "./Firebase";
import { ref, set, onValue, remove, update } from "firebase/database";
const Wrapper = styled.div`
  height: auto;
  align-items: center;
  display: flex;
  padding-right: 4rem;
  justify-content: space-between;
`;
const Image = styled.img`
  height: 15%;
  display: block;
  margin: 15px;
  width: 16%;
`;
const Div = styled.div`
  width: 20%;
`;
const Title = styled.p`
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Price = styled.p`
  color: black;
  font-size: 15px;
  text-decoration: line-through;
`;
const Div2 = styled.div`
  width: 6rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  padding: 0 0 1.2rem 1rem;
  border: none;
  cursor: pointer;
  align-items: center;
  margin-right: 10px;
  background-color: transparent;
  cursor: pointer;
`;
const Quant = styled.p`
  text-align: center;
  align-items: center;
`;
const Delete = styled.button`
  padding: 0 0 1.2rem 1rem;
  border: none;
  background-color: transparent;
  &:hover {
    transform: scale(1.5);
    transition-duration: 0.5s;
  }
`;

const CartItems = (result) => {
  let p = result.result;
  const x = p.quantity;
  const keyId = p.keyid;
  const { id } = useParams();

  const [quantity, setQuantity] = useState("");
  useEffect(() => {
    setQuantity(x);
  }, []);

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

  const DeleteItem = () => {
    remove(ref(database, "Users/" + id + "/Cart/" + keyId));
    console.log("sucess");
    window.location.reload();
  };

  update(ref(database, "Users/" + id + "/Cart/" + keyId), {
    real: p.singleprice * quantity,
    price: p.singlereal * quantity,
    quantity: quantity,
  });

  return (
    <>
      <Wrapper>
        <Image src={p.image} />
        <Div>
          <Title>{p.name}</Title>
        </Div>
        <Title>{p.size}</Title>
        <Div2>
          <Button onClick={handleDecrement}>
            <BiMinus size={15} color={"black"} />
          </Button>
          <Quant>{quantity}</Quant>
          <Button onClick={handleIncrement}>
            <BiPlusMedical size={15} color={"black"} />
          </Button>
        </Div2>
        {/* <Title>{p.quantity}</Title> */}
        {/* <Price>₹{p.singleprice * quantity}.000</Price> */}
        <Title>₹{p.singlereal * quantity}.000</Title>
        <Delete onClick={DeleteItem}>
          <MdDelete size={25} color={"#5271ff"} />
        </Delete>
      </Wrapper>
    </>
  );
};

export default CartItems;
