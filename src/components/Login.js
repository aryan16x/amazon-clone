import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userx = await signInWithEmailAndPassword(auth, email, password);
      if (auth) {
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (auth) {
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="loginBox">
      <Link to={"/"}>
        <img src="signInlogo.png" alt="companyLogo" className="loginLogo" />
      </Link>
      <div className="loginContainer">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="loginButton" onClick={signIn} type="submit">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON-CLONE conditions of Use & Sale.
          Please see out Privacy Notice, our Cookies Notice and out
          Interest-Based Ads notice.
        </p>

        <button className="createButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
