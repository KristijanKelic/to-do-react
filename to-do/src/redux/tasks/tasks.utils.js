export const addTaskUtil = (task, tasks) => {
  tasks = [task, ...tasks];
  return tasks;
};

export const markTaskFinishedUtil = (task, tasks, finished) => {
  tasks = tasks.filter(el => el.id !== task.id);
  task.finishedAt = new Date().toLocaleDateString();
  finished = [task, ...finished];

  return {
    tasks,
    finished
  };
};
