import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/Auth";

function ProtectedRoutesAuth(props) {
  const { currentUser } = useContext(AuthContext);
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
}

export default ProtectedRoutesAuth;
