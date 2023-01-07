import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import style from "./Header.module.css";
import logo from "../pictures/logo.jpg";
import header from "../pictures/header.jpg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => setShowMenu(!showMenu);
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" className={style.logo} />
      </Link>
      <img src={header} alt="ParoDeeJay" className={style.header} />
      <BiMenu
        size="50px"
        color="white"
        style={{ zIndex: 3 }}
        onClick={handleMenu}
      />
      <nav className={showMenu ? style.showMenu : style.hideMenu}>
        <Link to="/">
          <button onClick={handleMenu}>Home</button>
        </Link>
        <Link to="/adventures">
          <button onClick={handleMenu}>Adventures</button>
        </Link>
        <Link to="/travel-plans">
          <button onClick={handleMenu}>Travel Plans</button>
        </Link>
        <Link to="/dee-lightful-destinations">
          <button onClick={handleMenu}>Dee-Lightful Destinations</button>
        </Link>
        <Link to="/store">
          <button onClick={handleMenu}>Store</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
