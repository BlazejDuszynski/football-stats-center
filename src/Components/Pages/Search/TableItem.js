import React, { useContext, useState } from "react";
import classes from "./TableItem.module.css";
import { NavLink } from "react-router-dom";
import TeamContext from "../../Source/team-context";

const TableItem = (props) => {
  const teamCtx = useContext(TeamContext);
  const [team, setTeam] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const selectTeamHandler = () => {
    setIsLoading(true);
    fetchTeamDataHandler();
  };

  const fetchTeamDataHandler = async () => {
    const fetchedData = await teamCtx.selectTeam(props.id);
    console.log(fetchedData);
    setTeam(fetchedData);
    setIsLoading(false);
  };

  return (
    <tr className={classes.tableRow}>
      <td className={classes.centeredData}>{props.position + "."}</td>
      <td className={classes.teamName}>
        {/* <NavLink
          to="/Team"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
          end
        >
        </NavLink> */}
        <p className={classes.teamName__text} onClick={selectTeamHandler}>
          {props.name}
        </p>
      </td>
      <td className={classes.centeredData}>{props.games}</td>
      <td className={classes.centeredData}>{props.won}</td>
      <td className={classes.centeredData}>{props.draw}</td>
      <td className={classes.centeredData}>{props.lost}</td>
      <td className={classes.centeredData}>
        {props.goals_scored + "-" + props.goals_against}
      </td>
      <td className={classes.centeredData}>{props.points}</td>
    </tr>
  );
};

export default TableItem;
