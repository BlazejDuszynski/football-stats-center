import React from "react";

const TableContext = React.createContext({
  fetchTable: () => {},
  squad: [],
});

export default TableContext;
