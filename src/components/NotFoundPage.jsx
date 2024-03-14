import React from "react";
import styled from "styled-components";
import NFP from "../image/notfound.png";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Div = styled.div`
  background-image: url(${NFP});
  background-size: cover;
  height: 100vh;
  width: 100%;
`;

const NotFoundPage = () => {
  return (
    <>
      <Container>
        <h1>Please Sign-In to continue!</h1>
        <Div></Div>
      </Container>
    </>
  );
};

export default NotFoundPage;
