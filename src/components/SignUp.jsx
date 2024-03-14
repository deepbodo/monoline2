import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { auth, database } from "./Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, set } from "firebase/database";
import { AuthContext } from "../components/Auth";
const Container = styled.div`
  height: 600px;
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: #fff;
  padding: 100px;
`;
const Wrapper = styled.div`
  height: auto;
  width: 500px;
  background-color: #fff;
`;
const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 60px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;
const StyledInput = styled.input`
  display: block;
  width: 100%;
  border: 1px dotted;
  border-color: black;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const SignUp = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
    phone: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("Error Occured.");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        set(ref(database, "Users/" + user.uid + "/Personal Details/"), {
          name: values.name,
          email: values.email,
          phone: values.phone,
        });
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/accountdetails");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return navigate("/accountdetails");
  }
  return (
    <Container>
      <Wrapper>
        <StyledForm>
          <h1>Sign-Up</h1>
          <StyledInput
            type="text"
            placeholder="Name"
            id="Full-Name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
          <StyledInput
            type="email"
            placeholder="Email"
            id="Email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <StyledInput
            type="number"
            placeholder="Phone Number"
            id="Phone-Number"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, phone: event.target.value }))
            }
          />
          <StyledInput
            type="password"
            placeholder="Password"
            id="Password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />
          {/* {errorMsg} */}
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            If you already have an account.
            <Link to="/signin">LogIn</Link>
          </p>
        </StyledForm>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
