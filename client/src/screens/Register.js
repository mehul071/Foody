import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/UserAction";
import Button from "react-bootstrap/Button";
import "./Register.css";
import { FormControl, InputGroup } from "react-bootstrap";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassowrd, setCPassword] = useState("");
  const dispatch = useDispatch();

  function register() {
    if (password !== cpassowrd) {
      alert("Email or password wrong");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  return (
    <div className="register">
      <div className="box">
        <h1 className="text-3xl mb-3">Register</h1>
        <InputGroup className="mb-4">
          <FormControl
            placeholder="UserName"
            aria-label="UserName"
            aria-describedby="basic-addon1"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup className="mb-4">
          <FormControl
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup className="mb-4">
          <FormControl
            placeholder="Password"
            aria-label="password"
            aria-describedby="basic-addon1"
            value={password}
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup className="mb-4">
          <FormControl
            placeholder="Confirm Password"
            aria-label="confirm Password"
            aria-describedby="basic-addon1"
            type="password"
            value={cpassowrd}
            onChange={(e) => {
              setCPassword(e.target.value);
            }}
          />
        </InputGroup>

        <Button variant="dark" className="sign-btn border-2" onClick={register}>
          Register
        </Button>
        <h1 className="mt-2 redirect_login">
          <a href="/login" className="text-xl hover:text-black back_login">
            Back to Login
          </a>
        </h1>
      </div>
    </div>
  );
}

export default Register;
