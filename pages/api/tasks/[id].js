import Task from "@/db/models/Task";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  const { id } = request.query;

  if (!id) {
    return;
  }
  await dbConnect();

  if (request.method === "DELETE") {
    await Task.findByIdAndDelete(id);

    response.status(200).json({ message: "Success!" });
  }

  if (request.method === "PUT") {
    const task = await Task.findById(id);

    if (!task) {
      response.status(404).json({ status: "Task not found" });
      return;
    }

    await Task.findByIdAndUpdate(id, {
      $set: { title: request.body },
    });

    response.status(200).json({
      status: `Task ${id} was successfully edited!`,
    });
  }

  if (request.method === "PATCH") {
    const task = await Task.findById(id);

    if (!task) {
      response.status(404).json({ status: "Task not found" });
      return;
    }


    const newCompletedStatus = !task.completed;

    await Task.findByIdAndUpdate(id, {
      $set: { completed: !task.completed },
    });

    response.status(200).json({
      status: `Task ${id} was successfully marked as ${
        newCompletedStatus ? "done" : "undone"
      }!`,
    });
  }
}
