import React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import AddTask from "../add-task/add-task.component";
import Task from "../task/task.component";

import "./tasks.styles.scss";

const Tasks = ({ tasks }) => {
  return (
    <div className="tasks-container">
      <AddTask />
      <TransitionGroup>
        {tasks
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map(el => (
            <CSSTransition classNames="anim-task" key={el.id} timeout={1300}>
              <Task task={el} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
};

const mapStateToProps = ({ tasks: { tasks } }) => ({
  tasks
});

export default connect(mapStateToProps)(Tasks);
