import React, { useEffect, useState } from "react";
import TeamContext from "./team-context";

const TeamProvider = ({ children }) => {
  const [selectedTeam, setSelectedTeam] = useState([]);

  const fetchTeamData = async (id) => {
    const response = await fetch(
      "https://api.soccersapi.com/v2.2/teams/?user=bduszynski92&token=3742a318b07fbd2d2c34fe25d93b3bbf&t=info&id=" +
        id
    );
    const teamData = await response.json();
    setSelectedTeam({
      key: teamData.id,
      name: teamData.name,
      country: teamData.country,
      founded: teamData.founded,
      logo: teamData.img,
      coachID: teamData.coach_id,
      venueID: teamData.venue_id,
    });
    return teamData;
  };

  useEffect(() => {
    fetchTeamData();
  }, []);

  const teamContext = {
    selectTeam: fetchTeamData,
    team: selectedTeam,
  };

  return (
    <TeamContext.Provider value={teamContext}>{children}</TeamContext.Provider>
  );
};

export default TeamProvider;
