import React from 'react';
import { connect } from 'react-redux';

import { toggleFinished } from '../../redux/tasks/tasks.actions';

import { ReactComponent as Delete } from '../../assets/delete.svg';

import './task.styles.scss';

const Task = ({ task, toggleFinished }) => {
  return (
    <div className="task-container">
      <label>
        <input type="checkbox" className="hidden-real-check" onClick={() => toggleFinished(task)}/>
        <div className="task" >
          <span className="custom-check">
            <span className="checkbox">
              <span className="internal-one"></span>
              <span className="internal-two"></span>
            </span>
          </span>
          <span className="task-title">{task.task}</span>
        </div>
      </label>
      <div className="delete">
        <Delete className="icon" />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleFinished: task => dispatch(toggleFinished(task))
});

export default connect(null, mapDispatchToProps)(Task);
