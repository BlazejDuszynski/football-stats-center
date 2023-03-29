import React, { useState } from "react";
import LeagueContext from "./league-context";

function LeagueProvider(props) {
  const [league, setLeague] = useState(null);
  const selectLeagueHandler = (id) => {
    setLeague(id);
  };

  const leagueContext = {
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
