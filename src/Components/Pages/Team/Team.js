import React, { Fragment, useContext, useEffect, useState } from "react";
import TeamContext from "../../Source/team-context";
import classes from "./Team.module.css";

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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={classes.teamContainer}>
          <p></p>
        </div>
      )}
    </Fragment>
  );
};

export default Team;
