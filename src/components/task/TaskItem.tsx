import { useState } from "react";
import CheckBox from "../CheckBox";
import CrossIcon from "../../assets/images/icon-cross.svg";

const TaskItem = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  function handleCheck() {
    setIsChecked((prevState) => !prevState);
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
          Jog around the park 3x
        </div>
      </div>
      {/** Cross  */}
      <div className="cursor-pointer w-4 h-4">
        <img src={CrossIcon} alt="Cross icon" />
      </div>
    </div>
  );
};

export default TaskItem;
