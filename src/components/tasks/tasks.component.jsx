import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Task from '../task/task.component';

import './tasks.styles.scss';

const Tasks = ({ tasks }) => {
  return (
    <div className="tasks-container">
      <TransitionGroup>
        {tasks.map(el => (
          <CSSTransition classNames="anim-task" key={el.id} timeout={500}>
            <Task task={el} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

const mapStateToProps = ({ tasks: { tasks } }) => ({
  tasks
});

export default connect(mapStateToProps)(Tasks);
