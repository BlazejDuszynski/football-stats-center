import React from "react";
import classes from "./DropdownItem.module.css";

function DropdownItem({ name }) {
  return <li className={classes.dropdownItem}>{name}</li>;
}

export default DropdownItem;
