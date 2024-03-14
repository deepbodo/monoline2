import React from 'react'
import { auth, database } from "./Firebase";

const Register = () => {
  return (
  email = document.getElementById("Email").value
  password = document.getElementById("Password").value
  phonenumber = document.getElementById("Phone-Number").value
  username = document.getElementById("Full-Name").value
  error = "hello";
  auth.createUserWithEmailAndPassword(email, password).then(function () {
    var user = auth.currentUser
    var database_ref = database.ref()
    var user_data = {
      email: email,
      name: username,
      phone: phonenumber,
    };
    database_ref.child("Users" + user.uid).set(user_data)
  });
  )
}

export default Register
