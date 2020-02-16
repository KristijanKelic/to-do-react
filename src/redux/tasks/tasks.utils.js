export const toggleFinishedUtil = (tasks, finished, task) => {
  const index = tasks.indexOf(task);
  if (index !== -1) {
    let newTasks = tasks.filter(el => el.id !== task.id);
    task.finished = true;
    task.finishedAt = new Date();
    finished = [task, ...finished];
    tasks = newTasks;
  } else {
    let newFinished = finished.filter(el => el.id !== task.id);
    task.finished = false;
    task.finishedAt = '';
    tasks = [task, ...tasks];
    finished = newFinished;
  }

  return {
    tasks,
    finished
  };
};
