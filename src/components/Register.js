import React, { useState } from "react";
import "./styles/Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="register">
      <h1 className="register__title">Sign up</h1>
      <form className="register__form">
        <input
          className="register__input"
          placeholder="Email"
          type="email"
          value={email}
          required
        ></input>
        <input
          className="register__input"
          placeholder="Password"
          type="text"
          value={password}
          required
        ></input>
      </form>
    </div>
  );
}
