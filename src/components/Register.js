import React from "react";
import { Link, withRouter, useState, useHistory } from "react-router-dom";
import * as auth from "../utils/auth";
import "./styles/Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.register(password, email).then((res) => {
      if (res) {
        history.push("/signin");
      } else {
        console.log("Something went wrong.");
      }
    });
  };

  return (
    <div className="register">
      <h1 className="register__title">Sign up</h1>
      <form className="register__form">
        <input
          className="register__input"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          className="register__input"
          placeholder="Password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button className="register__button" type="submit" onSubmit={handleSubmit}>
          Sign Up
        </button>
      </form>
      <p className="register__message">Already a member? Log in here!</p>
    </div>
  );
}

export default withRouter(Register);
