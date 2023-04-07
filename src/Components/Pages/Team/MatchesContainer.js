import React from "react";
import Match from "./Match";
import classes from "./MatchesContainer.module.css";

const Matches = (props) => {
  const lastMatch = props.matches.last[0];
  const nextMatch = props.matches.next[0];

  console.log(lastMatch);

  return (
    <div className={classes.matchesContainer}>
      <Match
        title="Last Match"
        homeLogo={lastMatch.teams.home.img}
        awayLogo={lastMatch.teams.away.img}
        homeName={lastMatch.teams.home.name}
        awayName={lastMatch.teams.away.name}
        homeTeamID={lastMatch.teams.home.id}
        awayTeamID={lastMatch.teams.away.id}
      />
      <Match
        title="Next Match"
        homeLogo={nextMatch.teams.home.img}
        awayLogo={nextMatch.teams.away.img}
        homeName={nextMatch.teams.home.name}
        awayName={nextMatch.teams.away.name}
        homeTeamID={nextMatch.teams.home.id}
        awayTeamID={nextMatch.teams.away.id}
      />
    </div>
  );
};

export default Matches;
