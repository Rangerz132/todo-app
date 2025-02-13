import { createContext, useContext, useState } from "react";

type TaskFilterContextProps = {
  children: React.ReactNode;
};

export type TaskFilterType = "All" | "Active" | "Completed";

type TaskFilterContext = {
  taskFilter: TaskFilterType;
  setTaskFilter: React.Dispatch<React.SetStateAction<TaskFilterType>>;
};

export const TaskFilterContext = createContext<TaskFilterContext | null>(null);

export default function TaskFilterContextProvider({
  children,
}: TaskFilterContextProps) {
  const [taskFilter, setTaskFilter] = useState<TaskFilterType>("All");

  return (
    <TaskFilterContext.Provider value={{ taskFilter, setTaskFilter }}>
      {children}
    </TaskFilterContext.Provider>
  );
}

export function useTaskContextFilter(
  taskFilterContext: React.Context<TaskFilterContext | null>
) {
  const context = useContext(taskFilterContext);

  if (!context) {
    throw new Error(
      "useTaslFilterContext must be within TaskFilterContextProvider"
    );
  } else {
    return context;
  }
}
