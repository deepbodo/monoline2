import React, { useCallback, useEffect, useContext } from "react";
import styled from "styled-components";
import { auth, database } from "./Firebase";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
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

const SignIn = ({ history }) => {
  const Navigate = useNavigate();
  // const [values, setValues] = useState({
  //   email: "",
  //   pass: "",
  // });
  // const [errorMsg, setErrorMsg] = useState("");
  // const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  // const handleSubmission = () => {
  //   if (!values.email || !values.pass) {
  //     setErrorMsg("Fill all fields");
  //     return;
  //   }
  //   setErrorMsg("Error Occured.");
  //   setSubmitButtonDisabled(true);
  //   signInWithEmailAndPassword(values.email, values.pass).catch((err) => {
  //     setSubmitButtonDisabled(false);
  //     Navigate("/accountdetails");
  //     setErrorMsg(err.message);
  //   });
  // };
  // const { currentUser } = useContext(AuthContext);

  // if (currentUser) {
  //   return Navigate("/accountdetails");
  // }
  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      Navigate("/home/");
    } catch (error) {
      alert(error);
    }
  });

  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    if (currentUser) {
      return Navigate("/accountdetails");
    }
  }, []);

  return (
    <Container>
      <Wrapper>
        <StyledForm onSubmit={handleLogin}>
          <h1>Sign-In</h1>
          <StyledInput
            name="email"
            type="email"
            placeholder="Email"
            id="Email"
          />
          <StyledInput
            name="password"
            type="password"
            placeholder="Password"
            id="Password"
          />
          <button type="submit">SignIn</button>
          <p>
            Don't have an account.
            <Link to="/signup">SignUp</Link>
          </p>
        </StyledForm>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
