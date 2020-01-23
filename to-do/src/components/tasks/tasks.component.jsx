import React from 'react';

import Task from '../task/task.component';

import { ReactComponent as Add } from '../../assets/add.svg';

import './tasks.styles.scss';

const Tasks = ({ history }) => {
  return (
    <div className="tasks-container">
      <div className="info-text">
        <span>
          You have <span className="number-of-tasks">4</span> tasks left to
          do!
        </span>
      </div>
      <Task />
      <Add className="add-task" onClick={() => history.push('/add-task')} />
    </div>
  );
};

export default Tasks;
