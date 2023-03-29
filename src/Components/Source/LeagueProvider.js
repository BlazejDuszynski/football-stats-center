import React, { useState } from "react";
import LeagueContext from "./league-context";

function LeagueProvider(props) {
  const leagues = [
    "Premier League",
    "La Liga",
    "Bundesliga",
    "Serie A",
    "Ligue 1",
  ];
  const [league, setLeague] = useState(leagues[0]);
  const selectLeagueHandler = (name) => {
    setLeague(name);
  };

  const leagueContext = {
    availableLeagues: leagues,
    selectedLeague: league,
    selectLeague: selectLeagueHandler,
  };

  return (
    <LeagueContext.Provider value={leagueContext}>
      {props.children}
    </LeagueContext.Provider>
  );
}

export default LeagueProvider;
