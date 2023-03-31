import React from "react";
import TableItem from "./TableItem";
import classes from "./Table.module.css";

const Table = ({ table }) => {
  return (
    <div className={classes.tableContainer}>
      <table className={classes.table}>
        <tr>
          <th>#</th>
          <th className={classes.teamHeader}>Team</th>
          <th>MP</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>G</th>
          <th>PTS</th>
        </tr>
        {table.map((item) => {
          return (
            <TableItem
              name={item.team_name}
              position={item.overall.position}
              games={item.overall.games_played}
              won={item.overall.won}
              draw={item.overall.draw}
              lost={item.overall.lost}
              goals_against={item.overall.goals_against}
              goals_scored={item.overall.goals_scored}
              points={item.overall.points}
            />
          );
        })}
      </table>
    </div>
  );
};

export default Table;
