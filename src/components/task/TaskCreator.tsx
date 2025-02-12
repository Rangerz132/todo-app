import { useState } from "react";
import CheckBox from "../CheckBox";
import { useDispatch } from "react-redux";
import { addTask } from "../../state/task/taskSlice";
import { TodoAPI } from "../../api/todo-api";
import { v4 as uuidv4 } from "uuid";

const TaskCreator = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const dispatch = useDispatch();

  function handleCheck() {
    setIsChecked((prevState) => !prevState);
  }

  async function createTask(event: React.KeyboardEvent<HTMLInputElement>) {
    const newTask = await TodoAPI.createTask({
      id: uuidv4(),
      task: event.currentTarget.value,
      completed: isChecked,
    });

    dispatch(addTask(newTask));
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      createTask(event);
    }
  }

  return (
    <div className="w-full bg-white rounded-md px-6 py-4 flex flex-row space-x-4 dark:bg-neutral-dark-theme-very-dark-desaturated-blue">
      <CheckBox onCheck={() => handleCheck()} isChecked={false} />
      <input
        type="text"
        placeholder="Create a new todo..."
        onKeyDown={(event) => handleKeyDown(event)}
        className={`text-ellipsis outline-0 text-neutral-light-theme-dark-grayish-blue placeholder:text-neutral-light-theme-light-grayish-blue dark:placeholder:text-neutral-dark-theme-very-dark-grayish-blue-main ${
          isChecked
            ? "text-neutral-light-theme-light-grayish-blue line-through dark:text-neutral-dark-theme-very-dark-grayish-blue-main"
            : "text-neutral-light-theme-very-drak-grayish-blue dark:text-neutral-dark-theme-light-grayish-blue-main"
        } transition-all`}
      ></input>
    </div>
  );
};

export default TaskCreator;
