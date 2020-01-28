import React from 'react';
import { connect } from 'react-redux';

import Task from '../task/task.component';

import { ReactComponent as Add } from '../../assets/add.svg';

import './tasks.styles.scss';

const Tasks = ({ history, tasks }) => {
  return (
    <div className="tasks-container">
      <div className="info-text">
        <span>
          TO DO:
          <span className="number-of-tasks"> {tasks.length} </span>
          task(s)
        </span>
      </div>
      {tasks.map(task => (
        <Task task={task} key={task.id} />
      ))}
      <Add className="add-task" onClick={() => history.push('/add-task')} />
    </div>
  );
};

const mapStateToProps = ({ tasks: { tasks } }) => ({
  tasks
});

export default connect(mapStateToProps)(Tasks);
