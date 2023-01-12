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
      <BiMenu className={style.menu} onClick={handleMenu} />
      <nav className={showMenu ? style.showMenu : style.hideMenu}>
        <Link to="/">
          <button onClick={handleMenu} className={style.navbtn}>
            Home
          </button>
        </Link>
        <Link to="/adventures">
          <button onClick={handleMenu} className={style.navbtn}>
            Adventures
          </button>
        </Link>
        <Link to="/travel-plans">
          <button onClick={handleMenu} className={style.navbtn}>
            Travel Plans
          </button>
        </Link>
        <Link to="/dee-lightful-destinations">
          <button onClick={handleMenu} className={style.navbtn}>
            Dee-Lightful Destinations
          </button>
        </Link>
        <Link to="/store">
          <button onClick={handleMenu} className={style.navbtn}>
            Store
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
