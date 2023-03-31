import React from "react";

const LeagueContext = React.createContext({
  selectedLeague: {},
  selectLeague: () => {},
  availableLeagues: [],
});

export default LeagueContext;
