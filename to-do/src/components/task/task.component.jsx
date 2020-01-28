import React, { useState } from 'react';
import { connect } from 'react-redux';

import { markDone, markUndone } from '../../redux/tasks/tasks.actions';

import { ReactComponent as Check } from '../../assets/tick.svg';
import { ReactComponent as Info } from '../../assets/information.svg';
import { ReactComponent as Undo } from '../../assets/undo.svg';

import './task.styles.scss';

const Task = ({ task, markDone, markUndone }) => {
  const [toggleDesc, setToggleDesc] = useState(false);
  return (
    <>
      <div className="task">
        <div className="task-title">
          <span>{task.taskName}</span>
        </div>
        <div className="task-actions">
          {task.finishedAt === '' ? (
            <Check className="finish-action" onClick={() => markDone(task)} />
          ) : (
            <Undo className="undo-action" onClick={() => markUndone(task)} />
          )}
          <Info
            className="info-action"
            onClick={() => setToggleDesc(!toggleDesc)}
          />
        </div>
        <span className="task-time">
          {task.finishedAt === ''
            ? `created on: ${new Date(task.createdAt).toLocaleDateString()}`
            : `finished on: ${new Date(task.finishedAt).toLocaleDateString()}`}
        </span>
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
  markDone: task => dispatch(markDone(task)),
  markUndone: task => dispatch(markUndone(task))
});

export default connect(null, mapDispatchToProps)(Task);
