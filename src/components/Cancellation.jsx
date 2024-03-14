import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
const Div = styled.div`
  background-color: #f5f7f9;
  font-size: 2rem;
  padding: 5rem;
`;
const Wrapper = styled.div`
  background-color: #fff;
  margin-top: 7rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;
const H1 = styled.h1`
  margin: 3rem 0 2rem 0;
  font-family: "Roboto", sans-serif;
  font-size: 1.5;
  font-weight: bold;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;
const P = styled.p`
font-size: 1rem;
font-family: "Roboto", sans-serif;s
`;
const Cancellation = () => {
  return (
    <>
      <Navbar />
      <Div>
        <Wrapper>
          <H1>Cancellation Policy</H1>

          <P>
            <li>
              Our refund and returns policy lasts 7 days. If 7 days have passed
              since your purchase, we can’t offer you a full refund or exchange.
            </li>
            <li>
              To be eligible for a return, your item must be unused and in the
              same condition that you received it. It must also be in the
              original packaging.
            </li>
            <li>Non-returnable items: Gift cards Coupons</li>
            <li>
              Once your return is received and inspected, we will send you an
              email to notify you that we have received your returned item. We
              will also notify you of the approval or rejection of your refund.
            </li>
            <li>
              If you are approved, then your refund will be processed, and a
              credit will automatically be applied to your original method of
              payment, within a certain amount of days.
            </li>
          </P>
        </Wrapper>
      </Div>
    </>
  );
};

export default Cancellation;
