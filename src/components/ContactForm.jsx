import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0rem;
  background-color: #ffff;
  border-radius: 5px;
  color: #000;

  letter-spacing: 0.4rem;
  @media (max-width: 800px) {
    height: auto;
    padding: 1rem;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  font-weight: bold;
  @media (max-width: 800px) {
    font-size: 1rem;
    margin: 1rem 0 1rem 0;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  // background: rgba(255, 255, 255, 0.15);
  background: #f5f7f9;
  // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 0.1rem;
  width: 80%;
  height: 3rem;
  margin: 1rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #a6a6a6;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.1rem #000;
    backdrop-filter: blur(5rem);
  }
  &::placeholder {
    color: #a6a6a6;
    font-weight: 250;
    font-size: 1rem;
  }
  @media (max-width: 800px) {
    height: 2rem;
    width: 100%;
    margin: 0.3rem;
  }
`;
const Button = styled.button`
  background: #4175fc;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 25%;
  height: 3rem;
  border: none;
  color: #ffff;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 0 0.1rem #4175fc;
    backdrop-filter: blur(4rem);
  }
  @media (max-width: 800px) {
    letter-spacing: auto;
    width: 8rem;
  }
`;
const Textarea = styled.textarea`
  width: 80%;
  height: 14rem;
  margin: 1rem;
  padding: 1rem;
  background: #f5f7f9;
  &::placeholder {
    color: #a6a6a6;
    font-weight: 100;
    font-size: 1rem;
  }
  @media (max-width: 800px) {
    height: 4rem;
    width: 100%;
    margin: 0.3rem;
  }
`;
const ContactForm = () => {
  // const form = useRef(" ");
  function sendMail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4b884fa",
        "template_kn8osqw",
        e.target,
        "68i3bb6Z7YrN4FGYP"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("🦄 Query Submitted Successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <ToastContainer
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
      {/* Same as */}
      <ToastContainer />
      <form onSubmit={sendMail}>
        <MainContainer>
          <WelcomeText>Have any Queries? We're here to help.</WelcomeText>
          <InputContainer>
            <Input type="text" placeholder="NAME" name="from_name" required />
            <Input type="text" placeholder="SUBJECT" name="subject" required />
            <Input
              type="email"
              placeholder="EMAIL"
              name="user_email"
              required
            />
            <Textarea placeholder="MESSAGE" name="message" required></Textarea>
          </InputContainer>
          <ButtonContainer>
            <Button type="submit">SUBMIT</Button>
          </ButtonContainer>
        </MainContainer>
      </form>
    </>
  );
};

export default ContactForm;
