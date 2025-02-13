import {
  TaskFilterContext,
  TaskFilterType,
  useTaskContextFilter,
} from "../../contexts/TaskFilterContext";

const TaskFilters = () => {
  const taskFilters: TaskFilterType[] = ["All", "Active", "Completed"];
  const { taskFilter, setTaskFilter } = useTaskContextFilter(TaskFilterContext);

  function handleFilterClick(filter: TaskFilterType) {
    setTaskFilter(filter);
  }

  return (
    <div className="flex flex-row justify-center space-x-4 ">
      {taskFilters.map((filter) => (
        <div
          key={filter}
          onClick={() => handleFilterClick(filter)}
          className={` ${
            taskFilter === filter
              ? "text-primary-bright-blue"
              : "text-neutral-light-theme-very-drak-grayish-blue dark:text-neutral-dark-theme-very-dark-grayish-blue-main"
          } font-semibold cursor-pointer transition-all hover:text-primary-bright-blue`}
        >
          {filter}
        </div>
      ))}
    </div>
  );
};

export default TaskFilters;
