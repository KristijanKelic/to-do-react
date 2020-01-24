import React from 'react';
import { connect } from 'react-redux';

import Task from '../task/task.component';

import { ReactComponent as Add } from '../../assets/add.svg';

import './tasks.styles.scss';

const Tasks = ({ history, tasks }) => {
  const unfinishedTasks = tasks.filter(el => !el.done);
  console.log(tasks);
  return (
    <div className="tasks-container">
      <div className="info-text">
        <span>
          You have{' '}
          <span className="number-of-tasks">{unfinishedTasks.length}</span>{' '}
          tasks left to do!
        </span>
      </div>
      {tasks.map(task => (
        <Task
          name={task.taskName}
          desc={task.description}
          done={task.done}
          key={task.id}
        />
      ))}
      <Add className="add-task" onClick={() => history.push('/add-task')} />
    </div>
  );
};

const mapStateToProps = ({ tasks: { tasks } }) => ({
  tasks
});

export default connect(mapStateToProps)(Tasks);
