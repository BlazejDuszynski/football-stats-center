import React from "react";

const TeamContext = React.createContext({
  selectTeam: (id) => {},
  team: [],
});

export default TeamContext;
