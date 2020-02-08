import React from 'react';
import { connect } from 'react-redux';

import Task from '../task/task.component';

import './tasks.styles.scss';

const Tasks = () => {
  return (
    <div className="tasks-container">
      <ul>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = ({ tasks: { tasks } }) => ({
  tasks
});

export default connect(mapStateToProps)(Tasks);
