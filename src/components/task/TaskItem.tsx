import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../CheckBox";
import CrossIcon from "../../assets/images/icon-cross.svg";
import { TaskType } from "../../types/taskType";
import { TodoAPI } from "../../api/todo-api";
import { RootState } from "../../state/store";
import { deleteTask, updateTask } from "../../state/task/taskSlice";

const TaskItem = ({ task }: { task: TaskType }) => {
  const dispatch = useDispatch();
  const currentTask = useSelector((store: RootState) =>
    store.task.tasks.find((t) => t.id === task.id)
  );

  const isChecked = currentTask?.completed ?? task.completed;

  const handleCheck = async () => {
    const updatedTask = { ...task, completed: !isChecked };
    await TodoAPI.update(updatedTask);
    dispatch(updateTask(updatedTask));
  };

  const handleCrossClick = async () => {
    await TodoAPI.deleteTaskById(task.id);
    dispatch(deleteTask(task));
  };

  return (
    <div className="w-full border-b border-neutral-light-theme-light-grayish-blue px-6 py-5 flex flex-row justify-between items-center dark:border-neutral-dark-theme-very-drak-grayish-blue-second">
      <div className="flex flex-row space-x-4">
        {/** Checkbox */}
        <CheckBox onCheck={handleCheck} isChecked={isChecked} />
        {/** Task description */}
        <div
          className={`transition-all ${
            isChecked
              ? "text-neutral-light-theme-light-grayish-blue line-through dark:text-neutral-dark-theme-very-dark-grayish-blue-main"
              : "text-neutral-light-theme-very-drak-grayish-blue dark:text-neutral-dark-theme-light-grayish-blue-main"
          }`}
        >
          {task.task}
        </div>
      </div>
      {/** Cross  */}
      <div onClick={handleCrossClick} className="cursor-pointer w-4 h-4">
        <img src={CrossIcon} alt="Cross icon" />
      </div>
    </div>
  );
};

export default TaskItem;
