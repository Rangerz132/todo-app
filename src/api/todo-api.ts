import axios from "axios";

const BASE_URL = "http://localhost:3200/tasks";

export class TodoAPI {
  public static async getTasks() {
    return (await axios.get(BASE_URL)).data;
  }

  public static async getTaskById(taskId: string) {
    return (await axios.get(`${BASE_URL}/${taskId}`)).data;
  }

  public static async updateTaskById(taskId: string) {
    return (await axios.patch(`${BASE_URL}/${taskId}`)).data;
  }

  public static async deleteTaskById(taskId: string) {
    return (await axios.delete(`${BASE_URL}/${taskId}`)).data;
  }
}
