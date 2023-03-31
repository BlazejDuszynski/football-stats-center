import { useContext, useState } from "react";
import classes from "./Dropdown.module.css";
import DropdownItem from "./DropdownItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LeagueContext from "../../Source/league-context";
import TableContext from "../../Source/table-context";

function Dropdown() {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const leagueCtx = useContext(LeagueContext);
  const { fetchTable } = useContext(TableContext);

  const toggleDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  console.log(leagueCtx.selectedLeague.id);

  const dropdownSubmitHandler = () => {
    fetchTable(leagueCtx.selectedLeague.id);
  };

  return (
    <div className={classes.dropdownContainer}>
      <div className={classes.dropdown}>
        <div className={classes.select} onClick={toggleDropdown}>
          <span className={classes.selection}>
            {leagueCtx.selectedLeague.name}
          </span>
          <ArrowDropDownIcon
            className={isDropdownActive && classes.arrowIconRotated}
          />
        </div>
        <ul className={isDropdownActive ? classes.menu__active : classes.menu}>
          {leagueCtx.availableLeagues.map((league) => {
            return (
              <DropdownItem
                league={league}
                name={league.name}
                key={league.id}
                id={league.id}
                onChooseLeague={leagueCtx.selectLeague}
                onToggleDropdown={toggleDropdown}
              />
            );
          })}
        </ul>
      </div>
      <button className={classes.button} onClick={dropdownSubmitHandler}>
        Search
      </button>
    </div>
  );
}

export default Dropdown;
