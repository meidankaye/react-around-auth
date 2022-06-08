import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
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
    onLogin(values);
  };

  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <form className="login__form">
        <input
          className="login__input"
          placeholder="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          required
        ></input>
        <input
          className="login__input"
          placeholder="Password"
          type="text"
          value={values.password}
          onChange={handleChange}
          required
        ></input>
        <button className="login__button" type="submit" onSubmit={handleSubmit}>
          Login
        </button>
      </form>
      <Link to="/signup" className="login__message">
        Not a member yet? Sign up here!
      </Link>
    </div>
  );
}

export default Login;
