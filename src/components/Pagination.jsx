import React, { useState, useEffect } from "react";
import styled from "styled-components";
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;
const Button = styled.button`
  padding: 0.5rem;
  color: #fff;
  width: 3rem;
  background: #000;
  font-size: 1.2rem;
`;
const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <Div>
      <Button onClick={() => onButtonClick("prev")}>&#8249;</Button>
      <Button onClick={() => onButtonClick("next")}>&#8250;</Button>
    </Div>
  );
};

export default Pagination;
