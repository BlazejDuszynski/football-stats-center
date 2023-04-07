import React from "react";
import classes from "./MatchesContainer.module.css";

const Matches = (props) => {
  return (
    <div className={classes.matchesContainer}>
      <div className={classes.match}>First game</div>
      <div className={classes.match}>Second game</div>
    </div>
  );
};

export default Matches;
