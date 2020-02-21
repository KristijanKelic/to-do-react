import React from "react";
import { connect } from "react-redux";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import { toggleFinished, deleteTask } from "../../redux/tasks/tasks.actions";

import { ReactComponent as Delete } from "../../assets/delete.svg";

import "./task.styles.scss";

const Task = ({ task, toggleFinished, deleteTask }) => {
  return (
    <div className="task-container">
      <label>
        <input
          type="checkbox"
          className="hidden-real-check"
          onClick={() => toggleFinished(task)}
        />
        <div className="task">
          <span className="custom-check">
            <span className="checkbox">
              <span className="internal-one"></span>
              <span className="internal-two"></span>
            </span>
          </span>
          <span className="task-title">{task.task}</span>
        </div>
      </label>
      <div className="delete">
        <Delete
          className="icon"
          onClick={() =>
            confirmAlert({
              customUI: ({ onClose }) => {
                return (
                  <div className="dialog">
                    <h3 className="dialog-title">Delete task</h3>
                    <p className="dialog-message">
                      Are you sure you want to delete this task?
                    </p>
                    <div className="dialog-buttons">
                      <button
                        className="btn-yes"
                        onClick={() => {
                          deleteTask(task.id);
                          onClose();
                        }}
                      >
                        Yes
                      </button>
                      <button onClick={onClose} className="btn-no">
                        No
                      </button>
                    </div>
                  </div>
                );
              }
            })
          }
        />
      </div>
      <span className="timestamp">
        created - {new Date(task.createdAt).toLocaleDateString()}
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleFinished: task => dispatch(toggleFinished(task)),
  deleteTask: taskId => dispatch(deleteTask(taskId))
});

export default connect(null, mapDispatchToProps)(Task);
