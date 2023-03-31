import React, { useContext } from "react";
import TableContext from "../../Source/table-context";
import Dropdown from "./Dropdown";
import classes from "./Search.module.css";
import Table from "./Table";

function Search() {
  const { table } = useContext(TableContext);
  console.log(table);

  return (
    <div className={classes.searchContainer}>
      <h2>
        Choose league from the list below and check out the current table!
      </h2>
      <Dropdown />
      {table.length > 0 && <Table table={table} />}
    </div>
  );
}

export default Search;
