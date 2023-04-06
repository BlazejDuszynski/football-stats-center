import React from "react";
import classes from "./Squad.module.css";
import SquadItem from "./SquadItem";

const Squad = ({ squad }) => {
  //   const sortedSquad = squad.reduce((a, b) => +a.number - +b.number);

  console.log(squad);

  return (
    <div className={classes.squadContainer}>
      <table className={classes.tableContent}>
        <thead>
          <tr>
            <td>Number</td>
            <td>Player</td>
            <td>Nationality</td>
            <td>Position</td>
            <td>Height</td>
            <td>Weight</td>
          </tr>
        </thead>
        <tbody>
          {squad.map((item) => {
            return (
              <SquadItem
                key={item.player.id}
                id={item.player.id}
                name={item.player.common_name}
                number={item.number}
                nationality={item.player.country.name}
                position={item.position}
                height={item.player.height}
                weight={item.player.weight}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Squad;
