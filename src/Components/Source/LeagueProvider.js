import React, { useState } from "react";
import LeagueContext from "./league-context";

function LeagueProvider(props) {
  const leagues = [
    { name: "Premier League", id: 12516 },
    { name: "Bundesliga", id: 12570 },
  ];
  const [league, setLeague] = useState({});
  const selectLeagueHandler = (name, id) => {
    setLeague({ name: name, id: id });
  };

  console.log(league);

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
