import React from "react";

const LeagueContext = React.createContext({
  selectedLeague: "",
  selectLeagueHandler: () => {},
  availableLeagues: [
    "Premier League",
    "La Liga",
    "Bundesliga",
    "Serie A",
    "Ligue 1",
  ],
});

export default LeagueContext;
