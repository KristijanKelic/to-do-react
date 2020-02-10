import { TasksActionTypes } from './tasks.types';

export const addTask = task => ({
  type: TasksActionTypes.ADD_TASK,
  payload: task
});

export const toggleFinished = task => ({
  type: TasksActionTypes.TOGGLE_FINISHED,
  payload: task
});

export const deleteTask = () => ({
  type: TasksActionTypes.DELETE_TASK
});
