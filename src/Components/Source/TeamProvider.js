import React, { useState } from "react";
import TeamContext from "./team-context";

const TeamProvider = (props) => {
  const [selectedTeam, setSelectedTeam] = useState([]);

  async function selectTeamHandler(id) {
    const response = await fetch(
      "https://api.soccersapi.com/v2.2/teams/?user=bduszynski92&token=3742a318b07fbd2d2c34fe25d93b3bbf&t=info&id=" +
        id
    );
    const teamData = await response.json();
    console.log(teamData);
  }

  const teamContext = {
    selectTeam: selectTeamHandler,
    team: selectedTeam,
  };

  return (
    <TeamContext.Provider value={teamContext}>
      {props.children}
    </TeamContext.Provider>
  );
};

export default TeamProvider;
