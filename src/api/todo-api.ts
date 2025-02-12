import axios from "axios";
import { TaskType } from "../types/taskType";

const BASE_URL = "http://localhost:3200/tasks";

export class TodoAPI {
  public static async getTasks() {
    return (await axios.get(BASE_URL)).data;
  }

  public static async getTaskById(taskId: string) {
    return (await axios.get(`${BASE_URL}/${taskId}`)).data;
  }

  public static async getCompletedTasks() {
    const tasks = (await axios.get(`${BASE_URL}`)).data;

    const filteredTasks: TaskType[] = tasks.filter(
      (task: TaskType) => task.completed
    );
    return filteredTasks;
  }

  public static async getUncompletedTasks() {
    const tasks = (await axios.get(`${BASE_URL}`)).data;

    const filteredTasks: TaskType[] = tasks.filter(
      (task: TaskType) => !task.completed
    );
    return filteredTasks;
  }

  public static async createTask(task: TaskType) {
    return (await axios.post(BASE_URL, task)).data;
  }

  public static async update(task: TaskType) {
    return (await axios.patch(`${BASE_URL}/${task.id}`)).data;
  }

  public static async deleteTaskById(taskId: string) {
    return (await axios.delete(`${BASE_URL}/${taskId}`)).data;
  }

  public static async deleteTasksById(taskIds: string[]) {
    const deletePromises = taskIds.map((id) =>
      axios.delete(`${BASE_URL}/${id}`)
    );
    await Promise.all(deletePromises); // Ensure all deletions are executed
  }
}
