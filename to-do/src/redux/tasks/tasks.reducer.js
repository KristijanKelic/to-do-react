import { TasksActionTypes } from './tasks.types';

const INITIAL_STATE = {
  tasks: []
};

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tasksReducer;
