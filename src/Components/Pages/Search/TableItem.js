import React, { useContext } from "react";
import classes from "./TableItem.module.css";
import { NavLink } from "react-router-dom";
import TeamContext from "../../Source/team-context";

const TableItem = (props) => {
  const teamCtx = useContext(TeamContext);
  const selectTeamHandler = () => {
    teamCtx.selectTeam(props.id)
  }

  return (
    <tr className={classes.tableRow}>
      <td className={classes.centeredData}>{props.position + "."}</td>
      <td className={classes.teamName}>
        <NavLink
          to="/Team"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
          end
        >
          <p className={classes.teamName__text} onClick={selectTeamHandler}>
            {props.name}
          </p>
        </NavLink>
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
