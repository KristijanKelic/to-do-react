import React from 'react';
import { connect } from 'react-redux';

import Task from '../task/task.component';

import './tasks.styles.scss';

const FinishedTasks = ({ finished }) => {
  return <></>;
};

const mapStateToProps = ({ tasks: { finished } }) => ({
  finished
});

export default connect(mapStateToProps)(FinishedTasks);
