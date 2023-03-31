import React from "react";

const LeagueContext = React.createContext({
  selectedLeague: {},
  selectLeague: () => {},
  availableLeagues: [
    "Premier League",
    "La Liga",
    "Bundesliga",
    "Serie A",
    "Ligue 1",
  ],
});

export default LeagueContext;
