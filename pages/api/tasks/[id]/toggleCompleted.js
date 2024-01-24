import Task from "@/db/models/Task";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  const { id } = request.query;

  if (!id) {
    return;
  }
  await dbConnect();

  if (request.method === "POST") {
    let task = await Task.findById(id);

    if (!task) {
      response.status(404).json({ status: "Task not found" });
      return;
    }

    const newCompletedStatus = !task.completed;

    task = await Task.findByIdAndUpdate(id, {
      $set: { completed: newCompletedStatus },
    });
    console.log(task);
    response.status(200).json(task);
  }
}
