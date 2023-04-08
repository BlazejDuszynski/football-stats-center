import React from "react";
import classes from "./MatchResult.module.css";

const MatchResult = (props) => {
  return (
    <div className={classes.matchResultContainer}>
      <p>{props.homeTeamScore}</p>
      <p>WIN</p>
      <p>{props.awayTeamScore}</p>
    </div>
  );
};

export default MatchResult;
