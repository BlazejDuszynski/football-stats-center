import React, { useContext } from "react";
import TeamContext from "../../Source/team-context";
import classes from "./Match.module.css";
import MatchResult from "./MatchResult";

const Match = (props) => {
  const { teamID } = useContext(TeamContext);

  return (
    <div className={classes.match}>
      <header className={classes.header}>{props.title}</header>
      <div className={classes.matchDetails}>
        <div className={classes.logosContainer}>
          <img src={props.homeLogo}></img>
          <p>vs</p>
          <img src={props.awayLogo}></img>
        </div>
        <div className={classes.namesContainer}>
          <p
            className={
              props.homeTeamID === +teamID
                ? classes.selectedTeamName
                : classes.oponentTeamName
            }
          >
            {props.homeName}
          </p>
          <p
            className={
              props.awayTeamID === +teamID
                ? classes.selectedTeamName
                : classes.oponentTeamName
            }
          >
            {props.awayName}
          </p>
        </div>
        <MatchResult
          homeTeamScore={props.homeTeamScore}
          awayTeamScore={props.awayTeamScore}
        />
      </div>
    </div>
  );
};

export default Match;
