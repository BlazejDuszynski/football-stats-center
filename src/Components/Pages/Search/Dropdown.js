import { Fragment } from "react";
import classes from "./Dropdown.module.css";
import DropdownItem from "./DropdownItem";

function Dropdown() {
  return (
    <Fragment>
      <div className={classes.dropdown}>
        <div className={classes.select}>
          <span className={classes.selection}>aaaa</span>
          <IoMdArrowDropdown />
        </div>
        <ul>
          <DropdownItem />
          <DropdownItem />
        </ul>
        <button className={classes.button}>Search</button>
      </div>
    </Fragment>
  );
}

export default Dropdown;
