import React, { useState } from "react";
import { connect } from "react-redux";
import generateUniqueId from "generate-unique-id";

import { addTask } from "../../redux/tasks/tasks.actions";

import "./add-task.styles.scss";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (task.trim() === "") {
      return;
    }
    const taskObj = {
      id: generateUniqueId(),
      task,
      createdAt: new Date(),
      finished: false,
      finishedAt: ""
    };
    setTask("");
    addTask(taskObj);
    btnRef.current.focus();
  };

  const btnRef = React.createRef();

  const handleChange = e => {
    setTask(e.target.value);
  };
  return (
    <>
      <form className="add-task-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="taskName"
            className="form-input"
            value={task}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <label
            className={
              task.length > 0 ? "form-input-label shrink" : "form-input-label"
            }
          >
            Task to do
          </label>
        </div>
        <div className="button-container">
          <button type="submit" className="add-button draw-border" ref={btnRef}>
            <span className="check-mark">&#x2713;</span>
            <span className="btn-text">Add</span>
          </button>
        </div>
      </form>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task))
});

export default connect(null, mapDispatchToProps)(AddTask);
