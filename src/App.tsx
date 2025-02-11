import Header from "./components/header/Header";
import HeaderBackground from "./components/header/HeaderBackground";
import TaskCreator from "./components/task/TaskCreator";
import TaskList from "./components/task/TaskList";

function App() {
  return (
    <div className="w-full h-screen bg-neutral-light-theme-very-light-grayish-blue dark:bg-neutral-dark-theme-very-dark-blue ">
      {/** Header */}
      <div className="absolute w-full z-10">
        <HeaderBackground />
      </div>
      <div className="wrapper pt-10 flex flex-col space-y-10 relative z-20">
        <Header />
        <TaskCreator />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
