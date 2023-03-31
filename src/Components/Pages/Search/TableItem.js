import React from "react";
import classes from "./TableItem.module.css";

const TableItem = (props) => {
  return (
    <tr className={classes.tableRow}>
      <td>{props.position + "."}</td>
      <td className={classes.teamName}>{props.name}</td>
      <td>{props.games}</td>
      <td>{props.won}</td>
      <td>{props.draw}</td>
      <td>{props.lost}</td>
      <td>{props.goals_scored + "-" + props.goals_against}</td>
      <td>{props.points}</td>
    </tr>
  );
};

export default TableItem;
