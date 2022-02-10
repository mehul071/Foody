import React, { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { loginUser } from "../actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Components/Loading";
import "./Login.css";
import { FormControl, InputGroup, Button } from "react-bootstrap";

function Login() {
  const clientId =
    "714834901268-7sh4qc0c97lcacouvtmv97fiq724urad.apps.googleusercontent.com";

  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginUserReducer);
  const { success, loading, error } = loginState;
  useEffect(() => {
    if (localStorage.getItem("current_user")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    // e.preventDefault();
    const user = {
      email: userEmail,
      password: userPassword,
    };
    dispatch(loginUser(user));
  }
  return (
    <div className="sign-in-box flex flex-col justify-center items-center mt-8">
      {loading && <Loading />}
      <div className="flex flex-col items-center box bg-white">
        <h1>Sign in.</h1>
        <InputGroup className="mb-4">
          <FormControl
            placeholder="UserName"
            aria-label="UserName"
            aria-describedby="basic-addon1"
            value={userEmail}
            onChange={(e) => {
              setuserEmail(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup className="mb-4">
          <FormControl
            placeholder="Password"
            aria-label="password"
            aria-describedby="basic-addon1"
            type="password"
            value={userPassword}
            onChange={(e) => {
              setuserPassword(e.target.value);
            }}
          />
        </InputGroup>
        <button
          variant="dark"
          className="mb-4"
          onClick={(e) => {
            login(e);
          }}
        >
          Sign in
        </button>
        <p className="new_account">
          Don't have an account?
          <a href="/register" className="redirect_register">
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
