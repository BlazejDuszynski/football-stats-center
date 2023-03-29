import React from "react";

const LeagueContext = React.createContext({
  selectedLeague: "",
  selectLeagueHandler: () => {},
});

export default LeagueContext;
