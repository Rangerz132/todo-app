import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import HeaderBackground from "./components/header/HeaderBackground";
import Instruction from "./components/Instruction";
import TaskCreator from "./components/task/TaskCreator";
import TaskList from "./components/task/TaskList";
import ThemeContextProvider from "./contexts/ThemeContext";
import { TodoAPI } from "./api/todo-api";
import { TaskType } from "./types/taskType";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  async function fetchData() {
    try {
      const fetchedTasks = await TodoAPI.getTasks();
      setTasks(fetchedTasks); // Update state
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeContextProvider>
      <div className="w-full h-screen bg-neutral-light-theme-very-light-grayish-blue dark:bg-neutral-dark-theme-very-dark-blue ">
        {/** Header */}
        <div className="absolute w-full z-10">
          <HeaderBackground />
        </div>
        <div className="wrapper pt-10 flex flex-col space-y-10 relative z-20">
          <Header />
          <TaskCreator />
          <TaskList tasks={tasks} />
          <Instruction />
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
