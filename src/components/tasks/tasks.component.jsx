import React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import AddTask from "../add-task/add-task.component";
import Task from "../task/task.component";

import { ReactComponent as Free } from "../../assets/sun-umbrella.svg";

import "./tasks.styles.scss";

const Tasks = ({ tasks }) => {
  return (
    <div className="tasks-container">
      <AddTask />
      <h1 className="tasks-headline">
        <span role="img" aria-label="pin-emoji">
          &#x1F4CC;
        </span>
        / Tasks - [ {tasks.length} ]
      </h1>
      <TransitionGroup>
        {tasks
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map(el => (
            <CSSTransition classNames="anim-task" key={el.id} timeout={1300}>
              <Task task={el} />
            </CSSTransition>
          ))}
      </TransitionGroup>
      <div className={tasks.length === 0 ? "no-tasks anim" : "no-tasks"}>
        <Free />
        <p>
          You are all done
          <span role="img" aria-label="emoji-with-sunglasses">
            &#128526;
          </span>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ tasks: { tasks } }) => ({
  tasks
});

export default connect(mapStateToProps)(Tasks);
