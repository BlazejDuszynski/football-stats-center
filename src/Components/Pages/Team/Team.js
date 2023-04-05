import React, { useContext } from "react";
import TeamContext from "../../Source/team-context";
import classes from "./Team.module.css";

const Team = () => {
  const { team } = useContext(TeamContext);

  console.log(team);

  return (
    <div className={classes.teamContainer}>
      <p>{team.name}</p>
    </div>
  );
};

export default Team;
