import { TasksActionTypes } from './tasks.types';

const INITIAL_STATE = {
  tasks: []
};

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TasksActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: []
      };
    case TasksActionTypes.MARK_TASK_FINISHED:
      return {
        ...state
      };
    case TasksActionTypes.UNMARK_TASK_FINISHED:
      return {
        ...state
      };
    case TasksActionTypes.DELETE_FINISHED_TASK:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default tasksReducer;
