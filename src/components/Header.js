import headerLogo from "../images/header-logo.png";

function Header() {
  return (
    <header className="header">
      <img src={headerLogo} alt="Across the U.S" className="header__image" />
    </header>
  );
}

export default Header;
