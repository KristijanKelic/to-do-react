import { TasksActionTypes } from './tasks.types';

import { toggleFinishedUtil } from './tasks.utils';

const INITIAL_STATE = [];

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TasksActionTypes.ADD_TASK:
      return [action.payload, ...state];
    case TasksActionTypes.TOGGLE_FINISHED:
      return toggleFinishedUtil(action.payload, state);
    case TasksActionTypes.DELETE_TASK:
      return state.splice(state.indexOf(action.payload), 1);
    default:
      return state;
  }
};

export default tasksReducer;
