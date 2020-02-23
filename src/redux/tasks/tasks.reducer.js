import { TasksActionTypes } from "./tasks.types";

import { toggleFinishedUtil } from "./tasks.utils";

const INITIAL_STATE = {
  tasks: [],
  finished: []
};

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TasksActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      };
    case TasksActionTypes.TOGGLE_FINISHED:
      return toggleFinishedUtil(state.tasks, state.finished, action.payload);
    case TasksActionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(el => el.id !== action.payload),
        finished: state.finished.filter(el => el.id !== action.payload)
      };
    case TasksActionTypes.DELETE_ALL_FINISHED_TASKS:
      return {
        ...state,
        finished: []
      };
    default:
      return state;
  }
};

export default tasksReducer;
