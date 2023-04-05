import React, { useContext, useEffect, useState } from "react";
import TeamContext from "../../Source/team-context";
import classes from "./Team.module.css";

const Team = () => {
  const teamCtx = useContext(TeamContext);
  const [teamData, setTeamData] = useState(null);

  const fetchTeamDataHandler = async () => {
    const fetchedData = await teamCtx.selectTeam(teamCtx.teamID);
    setTeamData(fetchedData);
  };

  useEffect(() => {
    fetchTeamDataHandler();
  }, [teamCtx.teamID]);

  console.log(teamData);

  return (
    <div className={classes.teamContainer}>
      <p></p>
    </div>
  );
};

export default Team;
