import React from "react";
import classes from "./Home.module.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className={classes.landingPage}>
      <div className={classes.content}>
        <h1 className={classes.mainHeader}>
          Welcome to football stats center{" "}
        </h1>
        <h2 className={classes.secondaryHeader}>
          Find the most accurate statistics from TOP 5 european leagues! Check
          out teams' and player's high quality statistics!
        </h2>
        <NavLink to="/Search" end>
          <button className={classes.getStartedButton}>Get started</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
