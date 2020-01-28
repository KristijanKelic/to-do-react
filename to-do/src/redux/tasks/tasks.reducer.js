import { TasksActionTypes } from './tasks.types';
import { addTaskUtil, markTaskFinishedUtil } from './tasks.utils';

const INITIAL_STATE = {
  tasks: [],
  finished: []
};

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TasksActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: addTaskUtil(action.payload, state.tasks)
      };
    case TasksActionTypes.MARK_TASK_FINISHED:
      return {
        ...state,
        ...markTaskFinishedUtil(action.payload, state.tasks, state.finished)
      };
    default:
      return state;
  }
};

export default tasksReducer;
