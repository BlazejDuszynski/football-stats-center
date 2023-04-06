import React from "react";
import classes from "./HeaderItem.module.css";

const HeaderItem = (props) => {
  return (
    <div className={classes.headerItem}>
      <p className={classes.label}>{props.label}</p>
      <div className={classes.content}>{props.data}</div>
    </div>
  );
};

export default HeaderItem;
