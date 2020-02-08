import React from 'react';

import { ReactComponent as Delete } from '../../assets/delete.svg';

import './task.styles.scss';

const Task = () => {
  return (
    <div className="task-container">
      <label>
        <input type="checkbox" className="hidden-real-check" />
        <div className="task">
          <span className="custom-check">
            <span className="checkbox">
              <span className="internal-one"></span>
              <span className="internal-two"></span>
            </span>
          </span>
          <span className="task-title">Something important to do</span>
        </div>
      </label>
      {/* <div className="delete">
        <Delete className="icon" />
      </div> */}
    </div>
  );
};

export default Task;
