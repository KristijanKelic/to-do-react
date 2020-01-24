import { TasksActionTypes } from './tasks.types';
import { addTaskUtil } from './tasks.utils';

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
    default:
      return state;
  }
};

export default tasksReducer;
