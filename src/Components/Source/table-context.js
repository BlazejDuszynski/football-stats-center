import React from "react";

const TableContext = React.createContext({
  fetchSquad: () => {},
  squad: [],
});

export default TableContext;
