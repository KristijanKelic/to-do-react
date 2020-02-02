import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <h4 className="title" onClick={() => history.push('/')}>
        TO DO
      </h4>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active" className="links">
              To do
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/finished-tasks"
              exact
              activeClassName="active"
              className="links"
            >
              Finished
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
