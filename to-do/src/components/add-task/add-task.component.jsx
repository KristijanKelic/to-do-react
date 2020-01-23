import React, { useState } from 'react';

import { ReactComponent as Tasks } from '../../assets/list.svg';

import './add-task.styles.scss';

const AddTask = ({ history }) => {
  const [taskData, setTaskData] = useState({
    task: '',
    description: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    // TO DO REDUX STORING
  };

  const handleChange = e => {
    const { value, name } = e.target;
    console.log(value, name);

    setTaskData({ ...taskData, [name]: value });
  };
  return (
    <>
      <form className="add-task-form">
        <div className="input-group">
          <input
            type="text"
            name="task"
            className="form-input"
            value={taskData.task}
            onChange={handleChange}
            required
          />
          <label
            className={
              taskData.task.length > 0
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

export default AddTask;
