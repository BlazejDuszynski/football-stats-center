import React from "react";
import Dropdown from "./Dropdown";
import classes from "./Search.module.css";

function Search() {
  return (
    <div className={classes.searchContainer}>
      <h2>
        Choose league from the list below and check out the current table!
      </h2>
      <Dropdown />
      {}
    </div>
  );
}

export default Search;
