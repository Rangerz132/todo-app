import TaskItem from "./TaskItem";

const TaskList = () => {
  return (
    <div className="w-full flex flex-col bg-white rounded-md shadow-2xl shadow-neutral-light-theme-light-grayish-blue">
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
};

export default TaskList;
