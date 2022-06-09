import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../images/header-logo.png";

function Header(props) {
  return (
    <header className="header">
      <img src={headerLogo} alt="Across the U.S" className="header__image" />
      <p className="header__user">{props.loggedIn ? props.user : ""}</p>
      <Link to={`${props.link}`} className="header__link">
        Log Out
      </Link>
    </header>
  );
}

export default Header;
