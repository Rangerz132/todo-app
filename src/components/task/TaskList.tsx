import TaskItem from "./TaskItem";

const TaskList = () => {
  return (
    <div className="w-full flex flex-col bg-white rounded-md shadow-2xl shadow-neutral-light-theme-light-grayish-blue dark:bg-neutral-dark-theme-very-dark-desaturated-blue dark:shadow-black">
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
};

export default TaskList;
