import { TaskType } from "../../types/taskType";
import TaskCreator from "./TaskCreator";
import TaskFilters from "./TaskFilters";
import TaskList from "./TaskList";

const TaskManager = (props: { tasks: TaskType[] }) => {
  return (
    <div className="flex flex-col space-y-5">
      <TaskCreator />
      <TaskList tasks={props.tasks} />
      <div className="w-full rounded-lg bg-white  shadow-2xl shadow-neutral-light-theme-light-grayish-blue dark:bg-neutral-dark-theme-very-dark-desaturated-blue dark:shadow-black">
        <TaskFilters />
      </div>
    </div>
  );
};

export default TaskManager;
