import React from "react";
import classes from "./TableItem.module.css";

const TableItem = (props) => {
  return (
    <tr className={classes.tableRow}>
      <td className={classes.centeredData}>{props.position + "."}</td>
      <td className={classes.teamName}>
        <p className={classes.teamName__text}>{props.name}</p>
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
