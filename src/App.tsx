import { useEffect } from "react";
import Header from "./components/header/Header";
import HeaderBackground from "./components/header/HeaderBackground";
import Instruction from "./components/Instruction";
import { TodoAPI } from "./api/todo-api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/store";
import { setTaskList } from "./state/task/taskSlice";
import TaskManager from "./components/task/TaskManager";
import {
  TaskFilterContext,
  useTaskContextFilter,
} from "./contexts/TaskFilterContext";
import { TaskType } from "./types/taskType";

function App() {
  const allTasks = useSelector((store: RootState) => store.task.tasks);
  const dispatch = useDispatch();
  const { taskFilter } = useTaskContextFilter(TaskFilterContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedTasks: TaskType[] = await TodoAPI.getTasks();
        dispatch(setTaskList(fetchedTasks));
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }
    fetchData();
  }, [dispatch]);

  const filteredTasks = allTasks.filter((task) => {
    if (taskFilter === "All") return true;
    if (taskFilter === "Active") return !task.completed;
    if (taskFilter === "Completed") return task.completed;
    return true;
  });

  return (
    <div className="w-full h-screen bg-neutral-light-theme-very-light-grayish-blue dark:bg-neutral-dark-theme-very-dark-blue ">
      {/** Header */}
      <div className="absolute w-full z-10">
        <HeaderBackground />
      </div>
      <div className="wrapper pt-10 flex flex-col space-y-10 relative z-20">
        <Header />
        <TaskManager tasks={filteredTasks} />
        <Instruction />
      </div>
    </div>
  );
}

export default App;
