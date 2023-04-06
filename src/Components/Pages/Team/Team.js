import React, { Fragment, useContext, useEffect, useState } from "react";
import TeamContext from "../../Source/team-context";
import classes from "./Team.module.css";
import TeamContainer from "./TeamContainer";

const Team = () => {
  const teamCtx = useContext(TeamContext);
  const [teamData, setTeamData] = useState(null);
  const [squadData, setSquadData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTeamDataHandler = async () => {
    const fetchedData = await teamCtx.selectTeam(teamCtx.teamID);
    setTeamData(fetchedData);
  };

  const fetchSquadDataHandler = async () => {
    const fetchedSquadData = await teamCtx.selectSquad(teamCtx.teamID);
    setSquadData(fetchedSquadData);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchTeamDataHandler();
    fetchSquadDataHandler();
    setIsLoading(false);
  }, [teamCtx.teamID]);

  // useEffect(() => {

  // }, [teamCtx.teamID]);

  console.log(teamData);
  console.log(squadData);

  return (
    <Fragment>
      {teamData === null || squadData === null || teamData.data.length === 0 ? (
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
        />
      )}
      {isLoading && <p className={classes.loadingContent}>Loading...</p>}
    </Fragment>
  );
};

export default Team;
