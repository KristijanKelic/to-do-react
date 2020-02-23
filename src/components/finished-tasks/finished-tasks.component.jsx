import React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Task from "../task/task.component";

import "./finished-tasks.styles.scss";

const FinishedTasks = ({ finished }) => {
  return (
    <div className="finished-container">
      <h1 className="finished-headline">
        <span role="img" aria-label="check-emoji">
          &#x2705;
        </span>
        / Finished - [ {finished.length} ]
      </h1>
      <TransitionGroup>
        {finished
          .sort((a, b) => new Date(b.finishedAt) - new Date(a.finishedAt))
          .map(el => (
            <CSSTransition classNames="anim-task" key={el.id} timeout={1300}>
              <Task task={el} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
};

const mapStateToProps = ({ tasks: { finished } }) => ({
  finished
});

export default connect(mapStateToProps)(FinishedTasks);
