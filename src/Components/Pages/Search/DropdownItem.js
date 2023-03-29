import React from "react";
import classes from "./DropdownItem.module.css";

function DropdownItem(props) {
  const selectLeagueHandler = () => {
    console.log(props.name);
    props.onClick(props.name);
  };

  return (
    <li className={classes.dropdownItem} onClick={selectLeagueHandler}>
      {props.name}
    </li>
  );
}

export default DropdownItem;
