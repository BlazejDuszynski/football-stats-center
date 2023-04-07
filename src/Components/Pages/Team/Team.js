import React, { Fragment, useContext, useEffect, useState } from "react";
import TeamContext from "../../Source/team-context";
import classes from "./Team.module.css";
import TeamContainer from "./TeamContainer";

const Team = () => {
  const teamCtx = useContext(TeamContext);
  const [isLoading, setIsLoading] = useState(false);
  const [teamData, setTeamData] = useState(null);
  const [squadData, setSquadData] = useState(null);
  const [matchesData, setMatchesData] = useState(null);

  const fetchTeamDataHandler = async () => {
    const fetchedData = await teamCtx.selectTeam(teamCtx.teamID);
    setTeamData(fetchedData);
  };

  const fetchSquadDataHandler = async () => {
    const fetchedSquadData = await teamCtx.selectSquad(teamCtx.teamID);
    setSquadData(fetchedSquadData);
  };

  async function fetchTeamManches() {
    const response = await fetch(
      "https://api.soccersapi.com/v2.2/fixtures/?user=bduszynski92&token=3742a318b07fbd2d2c34fe25d93b3bbf&t=last_next&team_id=" +
        teamCtx.teamID
    );
    const fetchedMatches = await response.json();
    setMatchesData(fetchedMatches);
  }

  useEffect(() => {
    setIsLoading(true);
    fetchTeamDataHandler();
    fetchSquadDataHandler();
    fetchTeamManches();
    setIsLoading(false);
  }, [teamCtx.teamID]);

  console.log(teamData);
  console.log(squadData);

  return (
    <Fragment>
      {teamData === null ||
      squadData === null ||
      squadData.data === undefined ||
      teamData.data === undefined ||
      squadData.data.length === 0 ||
      matchesData === null ||
      matchesData.data === undefined ||
      teamData.data.length === 0 ? (
        <p className={classes.initialScreen}>No data selected...</p>
      ) : (
        <TeamContainer
          key={teamData.data.id}
          name={teamData.data.name}
          country={teamData.data.country.name}
          founded={teamData.data.founded}
          logo={teamData.data.img}
          coachID={teamData.data.coach_id}
          venueID={teamData.data.venue_id}
          squad={squadData.data.squad}
          matches={matchesData.data}
        />
      )}
      {isLoading && <p className={classes.loadingContent}>Loading...</p>}
    </Fragment>
  );
};

export default Team;
