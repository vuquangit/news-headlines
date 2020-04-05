import React from "react";
import { NavLink } from "react-router-dom";

import CustomNews from "Container/CustomNews";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__item">
        <NavLink to="/">News Headlines</NavLink>
      </div>
      <div className="header__item">
        <CustomNews />
      </div>
      <div className="header__item">
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </div>
  );
};

export default Header;
