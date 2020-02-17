import React from "react";
import { NavLink } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <h4 className="title">TO DO</h4>
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact>To do</NavLink>
        </li>
        <li>
          <NavLink to="/finished">Finished</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
