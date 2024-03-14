import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
const LogOut = () => {
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await signOut(auth)
        .then(() => {
          navigate("/signin");
          console.log("You are logged out");
        })
        .catch((error) => {
          // An error happened.
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default LogOut;
