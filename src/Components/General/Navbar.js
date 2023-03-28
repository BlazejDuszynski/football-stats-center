import React from "react";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <ul>
        <a href="/">
          <li className={classes.active}>Home</li>
        </a>
        <a href="/Search">
          <li>Search</li>
        </a>
        <a href="/Team">
          <li>Team</li>
        </a>
        <a href="/Player">
          <li>Player</li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
