import React from "react";
import classes from "./Squad.module.css";
import SquadItem from "./SquadItem";

const Squad = ({ squad }) => {
//   const sortedSquad = squad.reduce((a, b) => +a.number - +b.number);

//   console.log(sortedSquad);

  return (
    <div className={classes.squadContainer}>
      <table className={classes.tableContent}>
        <thead>
          <tr>
            <td>Number</td>
            <td>Player</td>
            <td>Nationality</td>
            <td>Position</td>
            <td>Age</td>
            <td>Height</td>
          </tr>
        </thead>
        <tbody>
          <SquadItem />
        </tbody>
      </table>
    </div>
  );
};

export default Squad;
