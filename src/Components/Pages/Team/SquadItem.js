import React from "react";
import classes from "./SquadItem.module.css";

const SquadItem = (props) => {
  return (
    <tr className={classes.tableRow}>
      <td>{props.number}</td>
      <td>{props.name}</td>
      <td>{props.nationality}</td>
      <td>{props.position}</td>
      <td>{props.height}</td>
      <td>{props.weight}</td>
    </tr>
  );
};

export default SquadItem;
