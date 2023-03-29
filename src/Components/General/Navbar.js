import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/Search"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <li>Search</li>
        </NavLink>
        <NavLink
          to="/Team"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <li>Team</li>
        </NavLink>
        <NavLink
          to="/Player"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <li>Player</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
