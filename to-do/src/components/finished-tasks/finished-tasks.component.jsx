import React from 'react';
import { connect } from 'react-redux';

import { deleteFinishedTasks } from '../../redux/tasks/tasks.actions';

import Task from '../task/task.component';
import { ReactComponent as Trash } from '../../assets/delete.svg';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import './finished-tasks.styles.scss';

const FinishedTasks = ({ finished, deleteFinishedTasks }) => {
  return (
    <div className="tasks-container">
      <div className="info-text">
        <span>
          DONE:
          <span className="number-of-tasks"> {finished.length} </span>
          task(s)
        </span>
      </div>
      {finished
        .sort((a, b) => new Date(b.finishedAt) - new Date(a.finishedAt))
        .map(task => (
          <Task task={task} key={task.id} />
        ))}
      <Trash
        className="remove"
        onClick={() =>
          confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div>
                  <h3 className="dialog-title">Delete finished tasks</h3>
                  <p className="dialog-message">
                    Are you sure you want to delete all fisnihed tasks?
                  </p>
                  <div className="dialog-buttons">
                    <button
                      className="btn-yes"
                      onClick={() => {
                        deleteFinishedTasks();
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
      ></Trash>
    </div>
  );
};

const mapStateToProps = ({ tasks: { finished } }) => ({
  finished
});

const mapDispatchToProps = dispatch => ({
  deleteFinishedTasks: () => dispatch(deleteFinishedTasks())
});

export default connect(mapStateToProps, mapDispatchToProps)(FinishedTasks);
