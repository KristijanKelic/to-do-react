export const addTaskUtil = (task, tasks) => {
  tasks = [task, ...tasks];
  return tasks;
};

export const markTaskFinishedUtil = (task, tasks, finished) => {
  tasks = tasks.filter(el => el.id !== task.id);
  task.finishedAt = new Date();
  finished = [task, ...finished];

  return {
    tasks,
    finished
  };
};

export const markTaskUnfinishedUtil = (task, tasks, finished) => {
  finished = finished.filter(el => el.id !== task.id);
  task.finishedAt = '';
  tasks = [task, ...tasks];

  return {
    tasks,
    finished
  };
};
