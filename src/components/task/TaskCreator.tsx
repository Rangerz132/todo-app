import { useState } from "react";
import CheckBox from "../CheckBox";

const TaskCreator = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  function handleCheck() {
    setIsChecked((prevState) => !prevState);
  }

  return (
    <div className="w-full bg-white rounded-md px-6 py-4 flex flex-row space-x-4">
      <CheckBox onCheck={() => handleCheck()} isChecked={false} />
      <input
        type="text"
        placeholder="Create a new todo..."
        className={`text-ellipsis outline-0 text-neutral-light-theme-dark-grayish-blue placeholder:text-neutral-light-theme-light-grayish-blue ${
          isChecked
            ? "text-neutral-light-theme-light-grayish-blue line-through"
            : "text-neutral-light-theme-dark-grayish-blue"
        } transition-all`}
      ></input>
    </div>
  );
};

export default TaskCreator;
