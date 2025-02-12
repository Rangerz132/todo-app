import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { TaskType } from "../../types/taskType";
import { TodoAPI } from "../../api/todo-api";
import { deleteTasks } from "../../state/task/taskSlice";

const TaskInfo = () => {
  const taskList = useSelector((store: RootState) => store.task.tasks);
  const dispatch = useDispatch();
  const uncompletedTaskList = taskList.filter(
    (task: TaskType) => !task.completed
  );

  async function clearCompletedTasks() {
    const completedTaskList = taskList.filter(
      (task: TaskType) => task.completed
    );
    const completedTaskListId = completedTaskList.map((task) => task.id);

    if (completedTaskListId.length === 0) return;

    await TodoAPI.deleteTasksById(completedTaskListId);
    dispatch(deleteTasks(completedTaskListId));
  }

  return (
    <div className="flex flex-row items-center justify-between text-neutral-light-theme-light-grayish-blue  dark:text-neutral-dark-theme-very-dark-grayish-blue-main transition-all duration-300">
      <div className="cursor-pointer hover:text-primary-bright-blue">
        {uncompletedTaskList.length}{" "}
        {uncompletedTaskList.length > 1 ? "items" : "item"} left
      </div>
      <div
        onClick={() => clearCompletedTasks()}
        className="cursor-pointer hover:text-primary-bright-blue"
      >
        Clear completed
      </div>
    </div>
  );
};

export default TaskInfo;
