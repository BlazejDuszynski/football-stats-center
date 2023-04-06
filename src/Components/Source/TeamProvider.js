import React, { useEffect, useState } from "react";
import TeamContext from "./team-context";

const TeamProvider = ({ children }) => {
  const [teamID, setTeamID] = useState(null);

  const fetchTeamData = async (id) => {
    const response = await fetch(
      "https://api.soccersapi.com/v2.2/teams/?user=bduszynski92&token=3742a318b07fbd2d2c34fe25d93b3bbf&t=info&id=" +
        id
    );
    const teamData = await response.json();
    return teamData;
  };

  const selectTeamIDHandler = (id) => {
    setTeamID(id);
  };

  const fetchSquadHandler = async (id) => {
    const response = await fetch(
      "https://api.soccersapi.com/v2.2/teams/?user=bduszynski92&token=3742a318b07fbd2d2c34fe25d93b3bbf&t=squad&id=" +
        id
    );
    const squadData = await response.json();
    return squadData;
  };

  useEffect(() => {
    fetchTeamData();
    fetchSquadHandler();
  }, []);

  const teamContext = {
    selectTeam: fetchTeamData,
    selectTeamID: selectTeamIDHandler,
    teamID: teamID,
    selectSquad: fetchSquadHandler,
  };

  return (
    <TeamContext.Provider value={teamContext}>{children}</TeamContext.Provider>
  );
};

export default TeamProvider;
