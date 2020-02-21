import { TasksActionTypes } from "./tasks.types";

export const addTask = task => ({
  type: TasksActionTypes.ADD_TASK,
  payload: task
});

export const toggleFinished = task => ({
  type: TasksActionTypes.TOGGLE_FINISHED,
  payload: task
});

export const deleteTask = taskId => ({
  type: TasksActionTypes.DELETE_TASK,
  payload: taskId
});

export const deleteAllFinishedTasks = () => ({
  type: TasksActionTypes.DELETE_ALL_FINISHED_TASKS
});
