import React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { confirmAlert } from "react-confirm-alert";
import { deleteAllFinishedTasks } from "../../redux/tasks/tasks.actions";

import Task from "../task/task.component";
import { ReactComponent as Empty } from "../../assets/note.svg";

import "./finished-tasks.styles.scss";

const FinishedTasks = ({ finished, deleteAll }) => {
  return (
    <div className="finished-container">
      <div className="finished-headline-container">
        <h1 className="finished-headline">
          <span role="img" aria-label="check-emoji">
            &#x2705;
          </span>
          / Finished - [ {finished.length} ]
        </h1>
        <button
          className="delete-all-btn"
          disabled={finished.length === 0}
          onClick={() =>
            confirmAlert({
              customUI: ({ onClose }) => {
                return (
                  <div className="dialog">
                    <h3 className="dialog-title">Delete task</h3>
                    <p className="dialog-message">
                      Are you sure you want to delete all finished tasks?
                    </p>
                    <div className="dialog-buttons">
                      <button
                        className="btn-yes"
                        onClick={() => {
                          deleteAll();
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
        >
          Delete all
        </button>
      </div>
      <TransitionGroup>
        {finished
          .sort((a, b) => new Date(b.finishedAt) - new Date(a.finishedAt))
          .map(el => (
            <CSSTransition classNames="anim-task" key={el.id} timeout={1300}>
              <Task task={el} />
            </CSSTransition>
          ))}
      </TransitionGroup>
      <div className={finished.length === 0 ? "no-tasks anim" : "no-tasks"}>
        <Empty />
        <p>
          You haven't finished anything yet
          <span role="img" aria-label="emoji-">
            😱
          </span>
          <br />
          Go and do something!
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ tasks: { finished } }) => ({
  finished
});

const mapDispatchToProps = dispatch => ({
  deleteAll: () => dispatch(deleteAllFinishedTasks())
});

export default connect(mapStateToProps, mapDispatchToProps)(FinishedTasks);
