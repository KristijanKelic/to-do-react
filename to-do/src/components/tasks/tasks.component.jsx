import React from 'react';

import Task from '../task/task.component';

import './tasks.styles.scss';

const Tasks = () => {
  return (
    <div className="tasks-container">
      <div className="info-text">
        <span>
          You have <span className="number-of-tasks"> 4 </span> tasks left to
          do!
        </span>
      </div>
      <Task />
    </div>
  );
};

export default Tasks;
