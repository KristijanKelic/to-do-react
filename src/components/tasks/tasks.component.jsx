import React from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

import Task from '../task/task.component';

import './tasks.styles.scss';

const Tasks = ({ tasks, toggleFinished }) => {
  return (
    <div className="tasks-container">
      <CSSTransitionGroup
        transitionName={{
          enter: 'task-enter',
          enterActive: 'task-enter-active',
          leave: 'task-leave',
          leaveActive: 'task-leave-active'
        }}
        transitionEnterTimeout={0}
        transitionLeaveTimeout={0}
      >
        {tasks.map(el => (
          <Task task={el} key={el.id} onClick={() => toggleFinished(el)} />
        ))}
      </CSSTransitionGroup>
    </div>
  );
};

const mapStateToProps = ({ tasks }) => ({
  tasks
});

export default connect(mapStateToProps)(Tasks);
