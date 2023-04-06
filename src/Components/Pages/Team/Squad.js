import React from "react";
import classes from "./Squad.module.css";

const Squad = () => {
  return (
    <div className={classes.squadContainer}>
      <table className={classes.tableContent}>
        <thead>
          <tr>
            <td>Number</td>
            <td>Player</td>
            <td>Position</td>
            <td>Age</td>
            <td>Height</td>
            <td>Joined</td>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Squad;
