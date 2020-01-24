import React from 'react';

import './task.styles.scss';

const Task = ({ name, desc, done }) => {
  return (
    <div className="task">
      <div className="task-title">
        <span>{name}</span>
      </div>
      <div className="task-actions">
        <button>X</button>
        <button>i</button>
      </div>
    </div>
  );
};

export default Task;
