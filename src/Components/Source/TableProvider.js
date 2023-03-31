import React, { useState } from "react";
import TableContext from "./table-context";

const TableProvider = (props) => {
  const [fetchedTable, isFetchedTable] = useState([]);

  async function fetchTableHandler(seasonID) {
    const response = await fetch(
      "https://api.soccersapi.com/v2.2/leagues/?user=bduszynski92&token=3742a318b07fbd2d2c34fe25d93b3bbf&t=standings&season_id=" +
        seasonID
    );
    const table = await response.json();
    console.log(table.data.standings);
    isFetchedTable(table.data.standings);
  }

  const tableContext = {
    fetchTable: fetchTableHandler,
    table: fetchedTable,
  };

  return (
    <TableContext.Provider value={tableContext}>
      {props.children}
    </TableContext.Provider>
  );
};

export default TableProvider;
