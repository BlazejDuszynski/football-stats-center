import React from "react";

const TeamContext = React.createContext({
  selectTeam: (id) => {},
  team: [],
  selectTeamID: (id) => {},
  teamID: "",
});

export default TeamContext;
