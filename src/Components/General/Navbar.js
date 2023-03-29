import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <ul>
        <Link to="/">
          <li className={classes.active}>Home</li>
        </Link>
        <Link to="/Search">
          <li>Search</li>
        </Link>
        <Link to="/Team">
          <li>Team</li>
        </Link>
        <Link to="/Player">
          <li>Player</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
