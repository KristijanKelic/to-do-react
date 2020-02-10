export const toggleFinishedUtil = (task, tasks) => {
  const i = tasks.indexOf(task);
  console.log(task);
  console.log(i);
  // setting finished prop to opposite of previous (done, undone) task!
  task.finished = !task.finished;
  tasks[i] = task;
  return tasks;
};
