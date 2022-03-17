import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SubHeader.module.css";

const SubHeader = () => {
  return (
    <div className={styles.nav}>
      <NavLink to="/top" activeClassName="active">
        Top Stories
      </NavLink>
      <NavLink to="/new" activeClassName="active">
        Latest Stories
      </NavLink>
      <NavLink to="/best" activeClassName="active">
        Best Stories
      </NavLink>
    </div>
  );
};

export default SubHeader;
