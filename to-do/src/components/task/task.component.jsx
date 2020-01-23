import React from 'react';

import './task.styles.scss';

const Task = () => {
  return (
    <div className="task">
      <div className="task-title">
        <span>This must</span>
      </div>
      <div className="task-actions">
        <button>X</button>
        <button>i</button>
      </div>
    </div>
  );
};

export default Task;
