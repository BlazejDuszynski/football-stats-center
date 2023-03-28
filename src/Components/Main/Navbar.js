import React from "react";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <ul>
        <a>
          <li className={classes.active}>Home</li>
        </a>
        <a>
          <li>Search</li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
