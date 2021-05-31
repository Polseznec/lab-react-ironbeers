import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <NavLink exact to="/beers">Beers</NavLink>  | 
      <NavLink exact to="/random-beer">Random Beer</NavLink> | 
      <NavLink exact to="/new-beer">New Beer</NavLink> | 
    </div>
  );
};

export default Home;
