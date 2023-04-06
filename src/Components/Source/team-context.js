import React from "react";

const TeamContext = React.createContext({
  selectTeam: (id) => {},
  selectTeamID: (id) => {},
  teamID: "",
  selectSquad: () => {},
});

export default TeamContext;
