import React from "react";
import classes from "./TeamContainer.module.css";

const TeamContainer = (props) => {
  return (
    <div className={classes.teamContainer}>
      {/* header of team container */}
      <header className={classes.header}>
        <div className={classes.headerIntro}>
          <img src={props.logo} alt="Club logo"></img>
          <div className={classes.clubIntro}>
            <p className={classes.clubName}>{props.name}</p>
            <p className={classes.clubCountry}>{props.country}</p>
          </div>
        </div>
        <div></div>
      </header>
      {/* stats container */}
      <div></div>
    </div>
  );
};

export default TeamContainer;
