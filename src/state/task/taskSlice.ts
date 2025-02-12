import { createSlice } from "@reduxjs/toolkit";
import { TaskType } from "../../types/taskType";

interface TaskState {
  tasks: TaskType[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "Task",
  initialState: initialState,
  reducers: {
    setTaskList: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      const filteredTaskList = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );
      state.tasks = filteredTaskList;
    },
    updateTask: (state, action) => {
      const indexToUpdate = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks[indexToUpdate] = action.payload;
    },
  },
});

export const { setTaskList, addTask, deleteTask, updateTask } =
  taskSlice.actions;
export default taskSlice.reducer;
