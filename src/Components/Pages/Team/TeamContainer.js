import React from "react";
import HeaderItem from "./HeaderItem";
import MatchesContainer from "./MatchesContainer";
import Squad from "./Squad";
import classes from "./TeamContainer.module.css";

const TeamContainer = (props) => {
  return (
    <div className={classes.teamContainer}>
      {/* header of team container */}
      <header className={classes.header}>
        <div className={classes.headerIntro}>
          <img className={classes.logo} src={props.logo} alt="Club logo"></img>
          <div className={classes.clubIntro}>
            <p className={classes.clubName}>{props.name}</p>
            <p className={classes.clubCountry}>{props.country}</p>
          </div>
        </div>
        <div className={classes.headerItemsContainer}>
          <HeaderItem label="coach" data="Erik ten Hag" />
          <HeaderItem label="stadium" data="Staint Mary's Stadium" />
          <HeaderItem label="founded" data={props.founded} />
        </div>
      </header>
      {/* stats container */}
      <div className={classes.statsContainer}>
        <Squad squad={props.squad} />
        <MatchesContainer />
      </div>
    </div>
  );
};

export default TeamContainer;
