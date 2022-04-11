import React, { useState } from "react";
import "./Header.css";
import searchIcon from "../icons/search-icon.svg";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to={"/"}>
        <img src="logo.png" className="headerLogo" alt="amazon-logo" />
      </Link>
      <div className="headerSearch">
        <input className="headerSearchInput" type="text" />
        <img src={searchIcon} alt="search" className="searchLogo" />
      </div>

      <div className="headerNav">
        <div onClick={handleAuth} className="headerOption">
          <span className="headerOptionLine1">Hello Guest</span>
          <span className="headerOptionLine2">
            <Link to={!user && "/login"} className="signIn">
              {!user ? "Sign In" : "Sign Out"}
            </Link>
          </span>
        </div>
        <div className="headerOption">
          <span className="headerOptionLine1">Return</span>
          <span className="headerOptionLine2">& Orders</span>
        </div>
        <div className="headerOption">
          <span className="headerOptionLine1">Your</span>
          <span className="headerOptionLine2">Prime</span>
        </div>
        <div className="headerBasket">
          <Link to={"/checkout"}>
            <img
              src="basket-icon.png"
              alt="basket-icon"
              className="basketIcon"
            />
          </Link>
          <span className="headerOptionLine2 headerBasketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
