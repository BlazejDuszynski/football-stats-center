import React, { useState } from "react";
import LeagueContext from "./league-context";

function LeagueProvider(props) {
  const leagues = [
    { name: "Premier League", id: 583 },
    { name: "Bundesliga", id: 594 },
  ];
  const [league, setLeague] = useState();
  const selectLeagueHandler = (name) => {
    setLeague(name);
  };

  const leagueContext = {
    availableLeagues: leagues,
    selectedLeague: league,
    selectLeague: selectLeagueHandler,
  };

  console.log(league);

  return (
    <LeagueContext.Provider value={leagueContext}>
      {props.children}
    </LeagueContext.Provider>
  );
}

export default LeagueProvider;
