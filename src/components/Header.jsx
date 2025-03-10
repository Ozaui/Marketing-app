import React, { useState } from "react";
import logo from "../images/logo.png";
import "../css/Header.css";
import { FaShoppingBasket } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

function Header() {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    const root = document.getElementById("root");

    if (!theme) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }

    setTheme(!theme);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row">
        <img src={logo} alt="Logo" className="logo" />
        <p className="logo-text">YOBEX A.Ş.</p>
      </div>

      <div className="flex-row">
        <input type="text" placeholder="Search..." className="search-input" />
        <div>
          <FaShoppingBasket className="icon" />
          {theme ? (
            <FaMoon className="icon" onClick={changeTheme} />
          ) : (
            <CiLight className="icon" onClick={changeTheme} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
