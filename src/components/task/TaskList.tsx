import { TaskType } from "../../types/taskType";
import TaskInfo from "./TaskInfo";
import TaskItem from "./TaskItem";

const TaskList = (props: { tasks: TaskType[] }) => {
  return (
    <div className="w-full flex flex-col bg-white rounded-md shadow-2xl shadow-neutral-light-theme-light-grayish-blue dark:bg-neutral-dark-theme-very-dark-desaturated-blue dark:shadow-black">
      {props.tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      {/** Mobile Task info */}
      <div className="px-6 py-5 md:hidden">
        <TaskInfo />
      </div>
      {/** Desktop Task info */}
      <div className="px-6 py-5 hidden md:flex">
        <TaskInfo />
      </div>
    </div>
  );
};

export default TaskList;
