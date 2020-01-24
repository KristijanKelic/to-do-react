import { TasksActionTypes } from './tasks.types';

export const addTask = task => ({
  type: TasksActionTypes.ADD_TASK,
  payload: task
});

export const markDone = task => ({
  type: TasksActionTypes.MARK_TASK_FINISHED,
  payload: task
});

export const deleteTask = task => ({
  type: TasksActionTypes.DELETE_TASK,
  payload: task
});

export const markUndone = task => ({
  type: TasksActionTypes.UNMARK_TASK_FINISHED,
  payload: task
});
