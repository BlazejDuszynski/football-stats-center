import React, { Fragment, useContext, useEffect, useState } from "react";
import TeamContext from "../../Source/team-context";
import classes from "./Team.module.css";
import TeamContainer from "./TeamContainer";

const Team = () => {
  const teamCtx = useContext(TeamContext);
  const [teamData, setTeamData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTeamDataHandler = async () => {
    setIsLoading(true);
    const fetchedData = await teamCtx.selectTeam(teamCtx.teamID);
    setTeamData(fetchedData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTeamDataHandler();
  }, [teamCtx.teamID]);

  console.log(teamData);

  return (
    <Fragment>
      {teamData === null || teamData.data.length === 0 ? (
        <p className={classes.initialScreen}>No data selected...</p>
      ) : (
        <TeamContainer
          key={teamData.id}
          name={teamData.name}
          country={teamData.country}
          founded={teamData.founded}
          logo={teamData.img}
          coachID={teamData.coach_id}
          venueID={teamData.venue_id}
        />
      )}
      {isLoading && <p className={classes.loadingContent}>Loading...</p>}
    </Fragment>
  );
};

export default Team;
