import React, { useState, useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Login from "../components/Login";

const AuthScreen = () => {
  const [register, setRegister] = useState(false);
  const nameRef = useRef();
  const passRef = useRef();
  const dispatch = useDispatch();
  const toggle = () => setRegister(!register);


  const handleSubmit = (e) => {
    e.preventDefault();

    const bod = {
      username: nameRef.current.value,
      password: passRef.current.value,
    };
    axios
      .post(register ? "/api/register" : "/api/login", bod)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.data });
      })
      .catch((err) => console.error(err));

      nameRef.current.value = ''
      passRef.current.value = ''
    };

  return (
    <div>
      <h1>Auth</h1>
      <h1>{register ? "Register" : "Login"}</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Username" ref={nameRef} />
        <input type='password' placeholder="Password" ref={passRef} />
        <button>{register ? "Register" : "Login"}</button>
      </form>
      <button onClick={toggle}>
        Need to {!register ? "Register" : "Login"}?
      </button>{" "}
    </div>
  );
};

export default AuthScreen;
