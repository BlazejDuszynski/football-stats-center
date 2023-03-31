import React from "react";
import SquadContext from "./squad-context";

const SquadProvider = (props) => {
  const [fetchedSquad, isFetchedSquad] = useState([]);

  const squadContext = {
    fetchSquad: fetchSquadHandler,
    squad: fetchedSquad,
  };

  return (
    <SquadContext.Provider value={squadContext}>
      {props.children}
    </SquadContext.Provider>
  );
};

export default SquadProvider;
