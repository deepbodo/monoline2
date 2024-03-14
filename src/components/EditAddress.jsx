import React, { useContext, useEffect } from "react";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "./Auth";
import { database } from "./Firebase";
import {
  ref,
  get,
  child,
  onValue,
  query,
  limitToFirst,
  update,
} from "firebase/database";
import { useState } from "react";
const Div = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  background-color: #fff;
  padding: 50px;
  zindex: 1000;
`;

const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  zindex: 1000;
`;
const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 0 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;

const StyledForm = styled.form`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 0.2rem;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-wrap: wrap;
  //   flex-direction: column;
  //   justify-content: space-between;
`;

const StyledInput = styled.input`
  width: 15rem;
  background-color: #eee;
  height: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 1rem;
  padding: 20px;
  box-sizing: border-box;
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const StyledButton = styled.button`
  background-color: #4175fc;
  border-style: none;
  font-size: 0.8rem;
  width: 5rem;
  margin: 1rem;
  border-radius: 0.2rem;
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  color: #fff;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
`;
const Select = styled.select`
  font-size: 1.2rem;
  width: 35%;
  margin: 0.8rem;
  border-radius: 1px;
`;
const Label = styled.label`
  text-align: left;
  align-items: left;
`;
const EditAddress = ({ open, children, onClose }) => {
  const [values, setValues] = useState({
    apartment: "",
    area: "",
    city: "",
    landmark: "",
    houseno: "",
    pincode: "",
    road: "",
    state: "",
  });
  const [error, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  useEffect(() => {
    let array = [];
    const dBref = ref(database, "Available States/");
    onValue(dBref, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        array.push(childSnapshot.val());
      });
      setState(array);
    });
  }, []);
  useEffect(() => {
    let y = [];
    const dBref = ref(database, "Available Cities/");
    onValue(dBref, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        childSnapshot.forEach((bachaSnapshot) => {
          console.log(bachaSnapshot.val());
          y.push(bachaSnapshot.val());
        });
      });
      setCity(y);
    });
  }, []);
  const handleSubmission = () => {
    if (
      !values.apartment ||
      !values.city ||
      !values.apartment ||
      !values.state ||
      !values.pincode
    ) {
      setErrorMsg("Fill all fields");
    } else setSubmitButtonDisabled(true);
    update(ref(database, "Users/" + currentUser.uid + "/Address/"), {
      apartment: values.apartment,
      area: values.area,
      city: values.city,
      road: values.road,
      pincode: values.pincode,
      houseno: values.houseno,
      landmark: values.landmark,
      state: values.state,
    });
    setSubmitButtonDisabled(false);
    setValues("");
  };
  if (!open) return null;
  return (
    <>
      <Cover>
        <Div>
          {/* <StyledFormWrapper> */}

          <StyledForm>
            <ButtonWrapper>
              <h2>Edit Address</h2>{" "}
            </ButtonWrapper>
            {/* <Label htmlFor="apartment">Apartment</Label> */}
            <StyledInput
              type="text"
              name="apartment"
              placeholder="Apartment"
              required
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  apartment: event.target.value,
                }))
              }
              // value={state.name}
              // onChange={handleInput}
            />
            {/* <Label htmlFor="area">Area</Label> */}
            <StyledInput
              type="text"
              name="area"
              placeholder="Area"
              required
              onChange={(event) =>
                setValues((prev) => ({ ...prev, area: event.target.value }))
              }
              // value={state.email}
              // onChange={handleInput}
            />
            {/* <Label htmlFor="houseno">Houseno</Label> */}
            <StyledInput
              type="text"
              name="houseno"
              placeholder="HouseNo"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, houseno: event.target.value }))
              }
              // value={state.email}
              // onChange={handleInput}
            />
            {/* <Label htmlFor="landmark">Landmark</Label> */}
            <StyledInput
              type="text"
              name="landmark"
              placeholder="Landmark"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, landmark: event.target.value }))
              }
              // value={state.email}
              // onChange={handleInput}
            />
            {/* <Label htmlFor="pincode">Pincode</Label> */}
            <StyledInput
              type="number"
              name="pincode"
              placeholder="Pincode"
              required
              onChange={(event) =>
                setValues((prev) => ({ ...prev, pincode: event.target.value }))
              }
              // value={state.email}
              // onChange={handleInput}
            />
            {/* <Label htmlFor="road">Road</Label> */}
            <StyledInput
              type="text"
              name="road"
              placeholder="Road"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, road: event.target.value }))
              }
              // value={state.email}
              // onChange={handleInput}
            />
            <ButtonWrapper>
              <Select
                required
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, state: event.target.value }))
                }
              >
                <option>Select State</option>
                {state.map((data) => {
                  return <option>{data.state}</option>;
                })}
              </Select>
              <Select
                required
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, city: event.target.value }))
                }
              >
                <option>Select City</option>
                {city.map((result) => {
                  return <option>{result.city}</option>;
                })}
              </Select>
            </ButtonWrapper>
            <p>{error}</p>
            <ButtonWrapper>
              <StyledButton
                type="submit"
                onClick={handleSubmission}
                disabled={submitButtonDisabled}
              >
                Submit
              </StyledButton>
              <StyledButton onClick={onClose}>Close</StyledButton>
            </ButtonWrapper>
          </StyledForm>
          {/* </StyledFormWrapper> */}
        </Div>
      </Cover>
    </>
  );
};
export default EditAddress;
