import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as ToDoTasks } from '../../assets/to-do-list.svg';
import { ReactComponent as FinishedTasks } from '../../assets/list.svg';

import './nav.styles.scss';

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="nav-link">
        <ToDoTasks className="icon"/>
      </div>
      <div className="nav-link">
        <FinishedTasks className="icon"/>
      </div>
    </div>
  );
};

export default BottomNav;
