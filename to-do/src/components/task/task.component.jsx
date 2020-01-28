import React, { useState } from 'react';
import { connect } from 'react-redux';

import { markDone } from '../../redux/tasks/tasks.actions';

import { ReactComponent as Check } from '../../assets/tick.svg';
import { ReactComponent as Info } from '../../assets/information.svg';

import './task.styles.scss';

const Task = ({ task, markDone }) => {
  const [toggleDesc, setToggleDesc] = useState(false);
  return (
    <>
      <div className="task">
        <div className="task-title">
          <span>{task.taskName}</span>
        </div>
        <div className="task-actions">
          <Check className="finish-action" onClick={() => markDone(task)} />
          <Info
            className="info-action"
            onClick={() => setToggleDesc(!toggleDesc)}
          />
        </div>
        <span className="task-time">created at: {task.createdAt}</span>
      </div>
      <div
        className={
          toggleDesc ? 'toggle-description-visible' : 'toggle-description'
        }
      >
        <p className="toggle-description-text">{task.description}</p>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  markDone: task => dispatch(markDone(task))
});

export default connect(null, mapDispatchToProps)(Task);
