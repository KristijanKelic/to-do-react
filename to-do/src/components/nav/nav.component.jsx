import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as ToDoTasks } from '../../assets/to-do-list.svg';
import { ReactComponent as FinishedTasks } from '../../assets/list.svg';

import './nav.styles.scss';

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <NavLink className="nav-link" to="/" exact activeClassName="active">
        <ToDoTasks className="icon" />
      </NavLink>
      <NavLink
        className="nav-link"
        to="/finished-tasks"
        activeClassName="active"
        exact
      >
        <FinishedTasks className="icon" />
      </NavLink>
    </div>
  );
};

export default BottomNav;
