import { useState } from "react";
import classes from "./Dropdown.module.css";
import DropdownItem from "./DropdownItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Dropdown() {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const leagues = [
    "Premier League",
    "La Liga",
    "Bundesliga",
    "Serie A",
    "Ligue 1",
  ];

  const toggleDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  return (
    <div className={classes.dropdownContainer}>
      <div className={classes.dropdown}>
        <div className={classes.select} onClick={toggleDropdown}>
          <span className={classes.selection}>aaaa</span>
          <ArrowDropDownIcon
            className={isDropdownActive && classes.arrowIconRotated}
          />
        </div>
        <ul className={isDropdownActive ? classes.menu__active : classes.menu}>
          {leagues.map((league) => {
            return <DropdownItem name={league} />;
          })}
        </ul>
      </div>
      <button className={classes.button}>Search</button>
    </div>
  );
}

export default Dropdown;
