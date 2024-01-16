import dbConnect from "@/db/connect";
import Task from "@/db/models/Task";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const tasks = await Task.find();
    return response.status(200).json(tasks);
  }

  if (request.method === "POST") {
    try {
      const taskTitle = request.body;
      const task = new Task(taskTitle);
      console.log("BEtask", task);
      await task.save();
      return response.status(201).json({ status: "Task created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
