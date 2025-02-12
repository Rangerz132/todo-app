import { TaskType } from "../../types/taskType";
import TaskCreator from "./TaskCreator";
import TaskList from "./TaskList";

const TaskManager = (props: { tasks: TaskType[] }) => {
  return (
    <div className="flex flex-col space-y-10">
      <TaskCreator />
      <TaskList tasks={props.tasks} />
    </div>
  );
};

export default TaskManager;
