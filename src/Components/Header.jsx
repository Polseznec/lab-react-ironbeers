import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <NavLink exact to="/">Home</NavLink>
    </header>
  );
};

export default Header;