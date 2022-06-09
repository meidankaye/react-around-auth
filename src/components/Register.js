import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Register.css";

function Register({ onRegister }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  
  function handleChange(e) {
    const { type, value } = e.target;
    setValues({ ...values, [type]: value });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  return (
    <div className="auth">
      <h1 className="auth__title">Sign up</h1>
      <form className="auth__form">
        <input
          className="auth__input"
          placeholder="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          required
        ></input>
        <input
          className="auth__input"
          placeholder="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          required
        ></input>
        <button
          className="auth__button"
          type="submit"
          onSubmit={handleSubmit}
        >
          Sign Up
        </button>
      </form>
      <Link to="/signin" className="auth__message">
        Already a member? Log in here!
      </Link>
    </div>
  );
}

export default Register;
