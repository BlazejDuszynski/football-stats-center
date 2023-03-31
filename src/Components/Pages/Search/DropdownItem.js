import React from "react";
import classes from "./DropdownItem.module.css";

function DropdownItem(props) {
  const selectLeagueHandler = () => {
    props.onChooseLeague(props.league);
    props.onToggleDropdown();
  };

  return (
    <li className={classes.dropdownItem} onClick={selectLeagueHandler}>
      {props.league.name}
    </li>
  );
}

export default DropdownItem;
