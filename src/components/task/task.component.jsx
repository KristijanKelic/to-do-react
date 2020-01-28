import React, { useState } from 'react';
import { connect } from 'react-redux';

import { markDone, markUndone } from '../../redux/tasks/tasks.actions';

import { ReactComponent as Check } from '../../assets/tick.svg';
import { ReactComponent as Expand } from '../../assets/down-arrow.svg';
import { ReactComponent as Undo } from '../../assets/undo.svg';
import { ReactComponent as Collapse } from '../../assets/up-arrow.svg';

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
            <button
              className="finish-action-button"
              onClick={() => markDone(task)}
            >
              <Check className="finish-action-icon" />
            </button>
          ) : (
            <button
              className="finish-action-button"
              onClick={() => markUndone(task)}
            >
              <Undo className="finish-action-icon" />{' '}
            </button>
          )}
          <button
            className="info-action-button"
            onClick={() => setToggleDesc(!toggleDesc)}
          >
            {!toggleDesc ? (
              <Expand className="info-action-icon" />
            ) : (
              <Collapse className="info-action-icon" />
            )}
          </button>
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
