import { useState } from "react";
import CheckBox from "../CheckBox";
import CrossIcon from "../../assets/images/icon-cross.svg";
import { TaskType } from "../../types/taskType";
import { TodoAPI } from "../../api/todo-api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { deleteTask, updateTask } from "../../state/task/taskSlice";

const TaskItem = (props: { task: TaskType }) => {
  const [isChecked, setIsChecked] = useState<boolean>(props.task.completed);
  const currentTask = useSelector((store: RootState) =>
    store.task.tasks.find((task) => task.id === props.task.id)
  );
  const dispatch = useDispatch();

  function handleCheck() {
    setIsChecked((prevState) => {
      const newCheckedState = !prevState;
      setTask(newCheckedState);
      return newCheckedState;
    });
  }
  function handleCrossClick() {
    removeTask();
  }

  async function setTask(completed: boolean) {
    const newTask: TaskType = {
      task: props.task.task,
      id: props.task.id,
      completed,
    };
    const updatedTask = await TodoAPI.update(newTask);
    dispatch(updateTask(updatedTask));
  }

  async function removeTask() {
    await TodoAPI.deleteTaskById(props.task.id);
    dispatch(deleteTask(currentTask));
  }

  return (
    <div className="w-full  border-b border-neutral-light-theme-light-grayish-blue px-6 py-5 flex flex-row justify-between items-center dark:border-neutral-dark-theme-very-drak-grayish-blue-second">
      <div className="flex flex-row space-x-4">
        {/** Checkbox */}
        <CheckBox onCheck={() => handleCheck()} isChecked={isChecked} />
        {/** Task description */}
        <div
          className={` ${
            isChecked
              ? "text-neutral-light-theme-light-grayish-blue line-through dark:text-neutral-dark-theme-very-dark-grayish-blue-main"
              : "text-neutral-light-theme-very-drak-grayish-blue dark:text-neutral-dark-theme-light-grayish-blue-main"
          } transition-all`}
        >
          {props.task.task}
        </div>
      </div>
      {/** Cross  */}
      <div
        onClick={() => handleCrossClick()}
        className="cursor-pointer w-4 h-4"
      >
        <img src={CrossIcon} alt="Cross icon" />
      </div>
    </div>
  );
};

export default TaskItem;
