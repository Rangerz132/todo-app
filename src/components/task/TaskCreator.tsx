import { useState } from "react";
import CheckBox from "../CheckBox";

const TaskCreator = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  function handleCheck() {
    setIsChecked((prevState) => !prevState);
  }

  return (
    <div className="w-full bg-white rounded-md px-6 py-4 flex flex-row space-x-4 dark:bg-neutral-dark-theme-very-dark-desaturated-blue">
      <CheckBox onCheck={() => handleCheck()} isChecked={false} />
      <input
        type="text"
        placeholder="Create a new todo..."
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
