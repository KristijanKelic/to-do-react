import React, { useState } from 'react';
import { connect } from 'react-redux';
import generateUniqueId from 'generate-unique-id';

import { addTask } from '../../redux/tasks/tasks.actions';

import { ReactComponent as Tasks } from '../../assets/list.svg';

import './add-task.styles.scss';

const AddTask = ({ history, addTask }) => {
  const [taskData, setTaskData] = useState({
    taskName: '',
    description: ''
  });
  const handleSubmit = e => {
    e.preventDefault();
    const { taskName, description } = taskData;
    const task = {
      id: generateUniqueId(),
      taskName,
      description,
      done: false,
      createdAt: new Date().toLocaleDateString(),
      finishedAt: ''
    };
    addTask(task);
    history.push('/');
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setTaskData({ ...taskData, [name]: value });
  };
  return (
    <>
      <form className="add-task-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="taskName"
            className="form-input"
            value={taskData.taskName}
            onChange={handleChange}
            required
          />
          <label
            className={
              taskData.taskName.length > 0
                ? 'form-input-label shrink'
                : 'form-input-label'
            }
          >
            Task
          </label>
        </div>
        <div className="input-group">
          <textarea
            className="form-input"
            name="description"
            value={taskData.description}
            onChange={handleChange}
          ></textarea>
          <label
            className={
              taskData.description.length > 0
                ? 'form-input-label shrink'
                : 'form-input-label'
            }
          >
            Description
          </label>
        </div>
        <div className="button-container">
          <button className="submit-button">Submit</button>
        </div>
      </form>
      <Tasks className="back-to-tasks" onClick={() => history.push('/')} />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task))
});

export default connect(null, mapDispatchToProps)(AddTask);
