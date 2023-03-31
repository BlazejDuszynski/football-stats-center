import React from "react";

const SquadContext = React.createContext({
  fetchSquad: () => {},
  squad: [],
});

export default SquadContext;
